# Pipeline: HTML-верстка из raster mockup с live-DOM элементами

Статус: рабочее правило для следующих HTML-экспериментов  
Основано на эксперименте: `block-04-resource-cluster-v1`  
Главный принцип: pixel-perfect важен, но не ценой интерактивности.

## Цель

Нужно получать HTML/CSS-верстку, визуально близкую к исходному raster mockup, но
при этом пригодную для вставки в проект как настоящий UI:

- значения должны быть текстом в DOM, а не частью картинки;
- кнопки, переключатели, карточки и кликабельные зоны должны быть HTML-элементами;
- будущие состояния, hover, focus, disabled, tooltips и обновление данных должны
  подключаться к нормальной DOM-структуре;
- raster assets допустимы для иконок, гербов, портретов, сложных глифов,
  фактурных фонов и декоративных деталей, но не для живых чисел и подписей.

## Термины

- `original crop` - исходный PNG-блок из мокапа, без масштабирования.
- `block` - самостоятельная область интерфейса, которую можно сверстать и
  сравнить отдельно.
- `sub-block` - семантическая часть блока: группа ресурса, кнопка, шкала,
  заголовок, ряд таблицы.
- `micro-crop` - маленький raster asset, вырезанный из original crop.
- `live-DOM layout` - целевой HTML/CSS, где интерактивные и изменяемые элементы
  являются DOM-узлами.
- `bitmap-heavy hybrid` - промежуточный или архивный вариант, где часть UI
  запечена в картинки ради лучшего pixel diff.
- `exact raster layout` - контрольный HTML, который показывает оригинальный PNG
  целиком. Используется только для нижней границы diff, не для интеграции.

## Структура папки блока

Для каждого отдельного эксперимента использовать такую структуру:

```text
block-NN-slug-vX/
  README.md
  slug-spec.md
  slug-pipeline-case-study.md
  slug.html
  layout.html
  layout-exact.html
  layout-archive-*.html
  slug.css
  reference/
    NN-slug-original.png
  assets/
    micro-crops/
      ...
  rendered/
    layout-v1.png
    layout-v2.png
    layout-final.png
    diff-report.md
  scripts/
    compare-png.mjs
```

Назначение файлов:

- `layout.html` - главный live-DOM результат.
- `slug.html` - страница сравнения live-DOM результата, exact-варианта и
  original crop.
- `layout-exact.html` - контрольный raster-backed вариант.
- `layout-archive-*.html` - сохраненные промежуточные подходы, если они важны
  для понимания решений.
- `slug-spec.md` - структура, координаты, стили, assets и DOM-контракт.
- `slug-pipeline-case-study.md` - подробный ход работы именно по этому блоку.
- `rendered/diff-report.md` - все измеренные итерации и вывод.

## Шаг 1. Зафиксировать source of truth

1. Скопировать исходный crop в `reference/`.
2. Проверить размер без масштабирования:

```bash
sips -g pixelWidth -g pixelHeight reference/NN-slug-original.png
```

3. Записать размер в `README.md` и `slug-spec.md`.
4. Договориться, что все координаты считаются от левого верхнего угла crop:
   `x = 0`, `y = 0`.
5. Нельзя менять размер reference-файла. Если нужно другое представление,
   создавать новый файл, а original оставлять неизменным.

## Шаг 2. Разложить блок на семантические слои

Перед версткой нужно описать блок как набор слоев:

1. Контейнер: размер, рамка, радиус, фон, шум, grid texture.
2. Фоновые декоративные элементы: свечения, линии, разделители, pattern.
3. Интерактивные группы: кнопки, карточки, табы, строки, selectable zones.
4. Изменяемые значения: числа, проценты, таймеры, подписи, статусы.
5. Статические raster assets: иконки, гербы, портреты, сложные пиктограммы.
6. Визуальные состояния: active, focus, hover, disabled, positive/negative.

Результат этого шага должен попасть в `slug-spec.md` в виде дерева:

```text
block 480x72
  group A
    icon
    value
    label
  divider
  group B
    ...
```

## Шаг 3. Решить, что можно резать в micro-crops

Правило для целевого live-DOM:

- Можно резать: иконки, гербы, портреты, сложные декоративные глифы,
  фактурные фоны, tiny ornaments.
- Нельзя резать как финальный UI: живые числа, подписи, кнопки целиком, таблицы,
  полосы прогресса с будущим изменением значения.
- Можно временно резать текстовые foreground-группы для диагностики и сравнения,
  но такие crop не должны быть основой `layout.html`.

Когда нужна дополнительная декомпозиция:

- иконка имеет сложный glow, внутренние тени или форму, которую CSS повторяет
  заметно хуже;
- после первого render/diff непонятно, что дает ошибку: фон, текст, иконка или
  позиционирование;
- отдельный sub-block визуально "плавает" и его нужно сравнить отдельно;
- большой crop содержит несколько смысловых зон с разными правилами layout.

Каждый micro-crop фиксировать таблицей:

```text
file | x | y | w | h | final usage
```

Поле `final usage` важно: `used in live layout`, `diagnostic only`,
`archive hybrid only`.

## Шаг 3.1. Алгоритм детальной разбивки

Разбивка идет не сразу до пикселей, а в несколько уровней. Это помогает не
превратить весь UI в набор картинок.

1. `Coarse block`: выделить крупный блок из экрана. Пример:
   `04-resource-cluster.png`.
2. `Semantic sub-blocks`: разложить крупный блок на смысловые зоны. Пример:
   `money group`, `fans group`, `reputation group`, `income rate`.
3. `Element layer`: внутри каждой зоны выделить конкретные элементы:
   `icon`, `primary value`, `secondary value`, `label`, `divider`.
4. `Raster candidate`: отметить только те элементы, которые потенциально можно
   оставить картинками: иконки, гербы, сложные декоративные glyphs.
5. `Diagnostic micro-crops`: если diff неясен, временно нарезать больше:
   foreground-группы, dividers, куски фона. Эти crop нужны для анализа, а не
   обязательно для финального `layout.html`.
6. `Final DOM pass`: вернуться к live-DOM и оставить в финальном layout только
   допустимые raster assets.

Для каждого уровня фиксировать:

```text
level | name | x | y | w | h | purpose | final usage
```

Признаки, что нужен еще один уровень разбивки:

- в side-by-side видно локальное расхождение, но непонятно, какой элемент его
  дает;
- один sub-block содержит и текст, и сложную иконку, и фоновые артефакты;
- pixel diff улучшается после raster-группы, значит ошибка связана с живым
  рендерингом текста или фона;
- визуально заметна прямоугольная подложка вокруг micro-crop;
- нужный элемент должен быть интерактивным, но сейчас запечен в diagnostic crop.

## Шаг 4. Сначала собрать live-DOM v1

`layout.html` должен сразу проектироваться как будущий UI, даже если первая
метрика будет хуже raster-варианта.

Правила HTML:

- контейнер блока фиксированного размера;
- interactive group делать через `button`, `a`, `input`, `output` или другой
  подходящий семантический элемент;
- добавлять стабильные `data-*` hooks для интеграции;
- значения и подписи держать в отдельных `span`/`output`;
- декоративные элементы помечать `aria-hidden="true"`;
- для raster icons использовать пустой `alt=""`, если текст уже есть рядом;
- не зашивать будущие данные в background-image.

Пример:

```html
<button class="resource-button" type="button" data-resource="money">
  <img class="resource-icon" src="./assets/micro-crops/money.png" alt="" />
  <span class="resource-copy">
    <span class="resource-value">$ 12.45M</span>
    <span class="resource-rate">+285K /s</span>
  </span>
</button>
```

Правила CSS:

- `body` для layout-страницы имеет точный размер crop и `overflow: hidden`;
- главный блок `position: relative`;
- внутри допускается absolute positioning, если mockup fixed-size;
- размеры и координаты писать явно, без viewport scaling;
- `letter-spacing: 0`, если нет явной причины менять;
- не использовать raster-группы для текста как финальный слой;
- отдельно стилизовать focus/hover, даже если минимально.

## Шаг 5. Сделать страницу сравнения

Страница сравнения должна показывать минимум:

1. `layout.html` в iframe.
2. `layout-exact.html` в iframe, если он есть.
3. Original crop как `<img>`.

Это позволяет видеть сразу три вещи:

- насколько хорош live-DOM layout;
- как выглядит нижняя граница screenshot diff;
- что именно отличается от исходного crop.

## Шаг 5.1. Сделать сводную HTML-карту нарезки

После декомпозиции полного мокапа обязательно генерировать `block-map.html`.
Это контрольная страница не для финальной игры, а для проверки, что экран
правильно разрезан на блоки и может быть собран обратно по тем же координатам.

`block-map.html` должна показывать:

1. Оригинальный мокап целиком.
2. `Global map`: крупные зоны экрана, наложенные на исходный мокап по точным
   координатам.
3. `Detail map`: детальные crop-блоки, собранные на исходных координатах.
4. Каждый блок с тонкой цветной рамкой и видимым label или номером.
5. Разные группы блоков разными цветами рамок.
6. Блоки без масштабирования: crop-картинки вставляются в оригинальном размере.
7. Координаты, совпадающие с `block-map-global.csv/json` и
   `block-map-detail.csv/json`.
8. Визуальную проверку покрытия экрана без случайных пропусков, дублей и
   смещений.

Если уже есть live-DOM верстка блоков, в конец `block-map.html` нужно добавить
`Live-DOM Assembly Map`: экран, собранный из HTML/CSS-блоков на тех же
координатах. Для этой карты нужно сделать переключатель debug-подсветки рамок.
Отдельно нужна clean-версия собранного live-DOM экрана без рамок, labels и
debug-элементов, чтобы оценить качество верстки как финальный UI.

Минимальная структура артефактов:

```text
original-mockup-blocks/
  README.md
  block-map.html
  block-map.css
  data/
    block-map-global.csv
    block-map-global.json
    block-map-detail.csv
    block-map-detail.json
  global/
    01-*.png
    02-*.png
  detail/
    group-name/
      01-*.png
      02-*.png
  rendered/
    block-map.png
    block-map-with-live-dom-assembly.png
```

## Шаг 6. Рендерить через один и тот же Chrome pipeline

Для каждого прогона использовать одинаковые параметры:

```bash
ROOT="/abs/path/to/block"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size=480,72 \
  --screenshot="$ROOT/rendered/layout-v1.png" \
  "file://$ROOT/layout.html"
```

Размер `--window-size` должен совпадать с размером блока. Для страницы сравнения
использовать отдельный размер окна, например `1540,160`.

## Шаг 7. Считать pixel diff

Использовать `scripts/compare-png.mjs`:

```bash
node "$ROOT/scripts/compare-png.mjs" \
  "$ROOT/rendered/layout-v1.png" \
  "$ROOT/reference/NN-slug-original.png"
```

Метрики:

- `avgRgbDelta` - средняя разница RGB на канал по всем пикселям.
- `changedPixelsOver24` - количество пикселей, где суммарная RGB-разница больше
  `24`.
- `changedRatio` - доля таких пикселей от всего изображения.
- `maxRgbTripletDelta` - максимальная суммарная RGB-разница одного пикселя.

Ограничение: pixel diff не знает, что важно для UI. Он штрафует живой текст за
anti-aliasing и отличие шрифта, даже если UI стал правильнее для продукта.
Поэтому diff - инструмент диагностики, а не единственный критерий принятия.

## Шаг 8. Делать итерации маленькими сериями

Нельзя менять сразу все. Каждая итерация должна иметь одну понятную гипотезу:

- geometry pass: `left`, `top`, `width`, `height`, выравнивания;
- typography pass: `font-family`, `font-size`, `font-weight`, `line-height`,
  `text-shadow`, `color`;
- background pass: фон, рамка, opacity, texture;
- asset pass: размер и позиция иконок, `mix-blend-mode`;
- semantic pass: замена div на button/output, добавление `data-*`, aria.

После каждой итерации:

1. сохранить screenshot как `rendered/layout-<name>.png`;
2. прогнать diff;
3. визуально открыть side-by-side;
4. записать метрики и вывод в `rendered/diff-report.md`;
5. если итерация неудачна, сохранить вывод, но не делать ее финальной.

## Шаг 8.1. Практическая попиксельная подгонка

Подгонка делается в таком порядке. Если перепрыгивать между пунктами, легко
испортить уже найденное совпадение.

1. `Canvas size`: убедиться, что screenshot и original имеют одинаковый размер.
   Если размер не совпадает, дальше сравнение бесполезно.
2. `Outer box`: подогнать ширину, высоту, border, radius и clipping контейнера.
3. `Background`: подобрать базовый цвет/gradient по пустым участкам original
   crop. Сначала фон, потом текст.
4. `Major x/y`: расставить sub-blocks по левым верхним координатам. Двигать
   крупные группы, а не каждый текстовый символ.
5. `Icon fit`: подогнать raster icons по `x/y/w/h`. Если иконка темнеет из-за
   фона, проверить `mix-blend-mode`, но не применять его к тексту без причины.
6. `Text fit`: подбирать `font-family`, `font-size`, `font-weight`,
   `line-height`, `margin-top`, `color`, `text-shadow`. Обычно менять только
   одно свойство за итерацию.
7. `Vertical rhythm`: после выбора шрифта двигать блоки текста по `top` с шагом
   `1px` или `2px`. Pixel diff может почти не измениться, но визуально посадка
   станет правильнее.
8. `Secondary labels`: отдельно подгонять подписи и мелкие значения. Они часто
   требуют меньшего weight и более слабого shadow, чем primary value.
9. `Dividers`: если разделитель тонкий, лучше сделать его CSS-линией с gradient
   и shadow, чем использовать crop, если он не несет уникальной текстуры.
10. `Metric check`: после каждой итерации записать diff. Если метрика улучшается,
    но UI становится менее интерактивным, это не победа.

Что нельзя делать во время подгонки:

- заменять живой текст bitmap-текстом в финальном `layout.html`;
- масштабировать original crop ради совпадения;
- менять сразу геометрию, шрифт и фон в одной итерации;
- удалять неудачные итерации без записи вывода;
- выбирать финал только по минимальному `avgRgbDelta`.

## Шаг 9. Использовать deeper decomposition как диагностический инструмент

Если live-DOM версия сильно отличается и непонятно почему, можно временно
сделать bitmap-heavy hybrid:

- нарезать foreground-группы;
- собрать `layout-archive-*.html`;
- измерить, насколько ошибка ушла;
- понять, какая часть mismatch идет от текста/шрифтов, а какая от фона и
  геометрии.

Важно: если foreground-группы включают текст или значения, они остаются
архивным/диагностическим слоем. В `layout.html` нужно вернуться к live-DOM.

## Шаг 10. Делать exact baseline

`layout-exact.html` нужен для контроля screenshot pipeline:

```html
<section class="block-exact">
  <img src="./reference/NN-slug-original.png" width="480" height="72" alt="" />
  <span class="sr-only">...</span>
</section>
```

Затем рендер:

```bash
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size=480,72 \
  --screenshot="$ROOT/rendered/layout-exact.png" \
  "file://$ROOT/layout-exact.html"
```

Если `layout-exact.png` тоже имеет ненулевой diff против original, это нижняя
граница погрешности Chrome/color pipeline. Ее надо записать отдельно.

## Шаг 11. Финальная проверка

Перед завершением блока проверить:

```bash
find "$ROOT" -name .DS_Store -delete
```

Проверить локальные ссылки в HTML, баланс `{}` в CSS и отсутствие `.DS_Store`.
Пример проверки можно запускать из shell через Node:

```bash
ROOT="/abs/path/to/block" node <<'NODE'
const fs = require('fs');
const path = require('path');
const root = process.env.ROOT;
if (!root) throw new Error('ROOT env var is required');
const htmlFiles = ['layout.html', 'layout-exact.html'];
const missing = [];
for (const file of htmlFiles) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) continue;
  const html = fs.readFileSync(full, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(https?:|data:|#)/.test(ref)) continue;
    const resolved = path.resolve(path.dirname(full), ref);
    if (!fs.existsSync(resolved)) missing.push(`${file}: ${ref}`);
  }
}
const cssFiles = fs.readdirSync(root).filter((file) => file.endsWith('.css'));
for (const file of cssFiles) {
  const css = fs.readFileSync(path.join(root, file), 'utf8');
  const open = (css.match(/\{/g) || []).length;
  const close = (css.match(/\}/g) || []).length;
  if (open !== close) missing.push(`${file}: css brace mismatch`);
}
console.log(missing.length ? missing.join('\n') : 'ok');
if (missing.length) process.exit(1);
NODE
```

## Критерии приемки

Блок можно считать готовым для следующего шага, если:

- `layout.html` использует live-DOM для всех изменяемых значений;
- raster используется только там, где это допустимо;
- side-by-side визуально читается как тот же UI-блок;
- для полного экрана есть `block-map.html` с original/global/detail картами,
  цветными рамками и координатами из `block-map-*.csv/json`;
- если блоки уже сверстаны, есть `Live-DOM Assembly Map` и clean live-DOM screen
  без debug-рамок;
- diff-метрики сохранены и объяснены;
- известно, почему финальная live-DOM версия отличается от exact;
- у интерактивных зон есть DOM hooks (`data-*`, class names, semantic tags);
- все пути валидны, CSS синтаксически целый, служебных `.DS_Store` нет.

## Главный урок из `04-resource-cluster`

Bitmap-heavy hybrid может дать лучший raw pixel diff, но это может быть
неправильным результатом. Для проектной цели важнее live-DOM: числа, подписи,
кнопки и состояния должны быть настоящими UI-элементами. Raster-слои нужны для
референса, диагностики и сложных иконок, но не должны заменять интерактивный UI.
