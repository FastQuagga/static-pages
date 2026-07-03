# MVP Card

Группа: `post-match`  
Размер: `154 x 179`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/04-mvp-card.png`

## DOM-структура

```text
section.block-root.mvp-card[data-block="mvp-card"]
  h2[data-field="title"]
  div.mvp-head[data-role="player-summary"]
    img[data-asset="mvp-portrait"]
    div.player-copy
      strong[data-field="player-name"]
      span[data-field="player-role"]
  div.mvp-rating[data-role="rating-summary"]
    output.rating-score[data-field="rating"]
    span.growth-copy
      output[data-field="growth"]
  img.sparkline[data-asset="rating-sparkline"]
```

## Micro-crops

| Файл | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/mvp-portrait.png` | 9 | 34 | 48 | 60 | used in live layout |
| `assets/micro-crops/sparkline.png` | 9 | 143 | 137 | 28 | used in live layout |

Имя игрока, позиция, rating и growth оставлены live-DOM.

## Итерации

1. `layout-v1`: портрет и sparkline вынесены в micro-crops, данные MVP сделаны DOM-текстом и `output`.
2. `layout-final`: подогнаны координаты player summary, rating badge и sparkline.

## Финальная оценка

Остаточные отличия связаны с anti-aliasing compact-типографики и живым rating badge. Изменяемые значения не запечены в raster.
