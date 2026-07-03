# 05 Coach Recommendation Card

## Размер

- Original crop: `405x93`
- HTML layout: fixed `405x93`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/05-coach-recommendation-card.png`

## DOM-структура

```text
section.coach-card[data-block="coach-recommendation-card"]
  div[data-bind="card-title"]
  div.coach-card__body
    img key-icon
    p[data-bind="recommendation-copy"]
      strong[data-bind="recommended-tactic"]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/key-icon.png` | 13 | 38 | 29 | 31 | used in live layout |

Recommendation text and highlighted tactic are live DOM.

## Итерации

- `v1 live-DOM`: карточка собрана без bitmap-текста, key-icon оставлен micro-crop.
- `background/typography pass`: фон затемнён, основной recommendation copy облегчен до `font-weight: 400`.

## Финальная оценка

Final заметно ближе к original по тону и весу текста. Единственный raster asset - маленькая key-иконка; рекомендация и `ATTACK` остаются редактируемыми DOM-узлами.
