# Result Card

Группа: `post-match`  
Размер: `406 x 113`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/02-result-card.png`

## DOM-структура

```text
section.block-root.result-card[data-block="result-card"]
  img.team-crest-home[data-asset="home-crest"]
  div.score-stack[data-role="score-summary"]
    output.score-value[data-field="score"]
    output.result-badge[data-field="result"]
  img.team-crest-away[data-asset="away-crest"]
  span.team-name-home[data-field="home-team"]
  span.team-name-away[data-field="away-team"]
```

## Micro-crops

| Файл | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/crest-home.png` | 42 | 12 | 58 | 68 | used in live layout |
| `assets/micro-crops/crest-away.png` | 306 | 12 | 58 | 68 | used in live layout |

Текст результата, статус `WIN` и названия команд оставлены live-DOM.

## Итерации

1. `layout-v1`: перенесена card-геометрия, гербы вынесены в micro-crops, счет и подписи сделаны `output`/`span`.
2. `layout-final`: уточнены абсолютные позиции гербов, счета, badge и team labels.

## Финальная оценка

Основной остаточный diff ожидаемо идет от live-типографики счета и labels. Гербы raster-backed, но все изменяемые значения и текст результата остаются DOM-элементами.
