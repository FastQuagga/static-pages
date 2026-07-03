# Detail Blocks Live DOM v4

Статус: чистый перезапуск генерации всех detail-блоков по live-DOM pipeline  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/`  
Pipeline: `../live-dom-html-from-mockup-pipeline.md`

## Цель

Пересобрать все `31` detail-блоков так, чтобы финальный `layout.html` каждого
блока был пригоден для интерактивной интеграции:

- живые значения, подписи, кнопки, шкалы, таблицы и состояния должны быть
  DOM-элементами;
- raster можно использовать для иконок, гербов, портретов, tactical field layer
  и сложных декоративных glyphs;
- bitmap-heavy варианты допустимы только как diagnostic/archive, но не как
  основной `layout.html`;
- каждый блок должен иметь side-by-side сравнение с original crop и локальный
  `diff-report.md`;
- после генерации каждый блок проверяется screenshot render + pixel diff, а при
  заметном расхождении делается небольшая серия улучшений по pipeline.

## Структура

```text
detail-blocks-live-dom-v4/
  topbar/
  pre-match/
  live/
  post-match/
  bottom-status/
  scripts/
  compare-all.html
  compare-all.css
  README.md
```

Ожидаемая структура каждого блока:

```text
<group>/<NN-slug>/
  index.html
  layout.html
  layout-exact.html
  block.css
  spec.md
  reference/original.png
  assets/micro-crops/...
  rendered/layout-final.png
  rendered/diff-report.md
```

## Критерий результата

Главный критерий - правильный live-DOM слой. Pixel diff используется для
диагностики и улучшений, но не должен вынуждать запекать будущие данные в PNG.

## Итог прохода

Итоговая сводка сохранена в `v4-run-summary.md`.

Основные артефакты:

- `compare-all.html` - общая вертикальная страница сравнения всех 31 блоков;
- `rendered/compare-all-v4.png` - screenshot общей страницы;
- `validate-v4.mjs` - проверка обязательных файлов, ссылок, CSS и размеров.

Финальная проверка: `31` блок, `errors: []`, `warnings: []`.
