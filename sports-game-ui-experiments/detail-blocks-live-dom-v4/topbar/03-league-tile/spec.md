# 03 League Tile

- Размер: `190 x 72`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: переход к лиге, сезон и текущая позиция.

## DOM-структура

```text
button.league-tile[data-component="league-tile"][data-action="open-league"]
  img.league-crest
  span.league-copy
    span.league-name "PRO LEAGUE"
    span.season "Season 12"
    span.rank
      span.rank-current "3rd"
      text " / 20"
```

Карточка сделана кнопкой: это навигационный topbar-блок. Название лиги, сезон и место оставлены live-DOM.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/league-crest.png` | 10 | 4 | 62 | 64 | used in live layout |

Эмблема лиги содержит сложный герб и мелкие декоративные элементы, поэтому оставлена PNG. Текст не запекался.

## Итерации

- `v4-live-1`: перенесена v2 геометрия, div/heading заменены на button + spans с `data-*` hooks.
- `v4-live-2`: вес текста снижен с `800` до `700`, чтобы приблизить live-render к более тонкому raster crop.

## Финальная оценка

Визуально блок держит исходную композицию. Основной diff ожидаемо создают шрифт и anti-aliasing живых строк, но DOM-контракт подходит для интеграции и обновления данных сезона/позиции.
