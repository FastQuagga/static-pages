# 02 Opponent Card

## Размер

- Original crop: `318x305`
- HTML layout: fixed `318x305`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/02-opponent-card.png`

## DOM-структура

```text
article.opponent-card[data-block="opponent-card"][data-opponent-id]
  header[data-bind="card-title"]
  section.opponent-card__main
    img.opponent-card__crest
    strong[data-bind="opponent-name"]
    span[data-bind="opponent-standing"]
  section.opponent-card__strength[data-home-strength][data-away-strength]
    output[data-bind="home-strength"]
    output[data-bind="away-strength"]
    div.strength-bar[role="img"]
  section.opponent-card__form
    span.form-chip[data-result] x5
  section.opponent-card__player
    img key-player-jersey
    strong[data-bind="key-player-name"]
    output[data-bind="key-player-overall"]
  section.opponent-card__weakness
    img weakness-shield
    strong[data-bind="weakness-title"]
    span[data-bind="weakness-description"]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/opponent-crest.png` | 11 | 36 | 56 | 70 | used in live layout |
| `assets/micro-crops/key-player-jersey.png` | 198 | 157 | 47 | 45 | used in live layout |
| `assets/micro-crops/weakness-shield.png` | 17 | 244 | 43 | 47 | used in live layout |

Form chips, score, labels, strength values and bar are live DOM/CSS.

## Итерации

- `v1 live-DOM`: перенесена v2-композиция, значения силы и OVR оформлены через `output`, добавлены `data-*` hooks.
- `background/typography pass`: затемнена карточная подложка, вторичный текст ослаблен до `font-weight: 500`.

## Финальная оценка

Структура блока и все изменяемые значения живые. Pixel diff у final выше v1 из-за более лёгкого вторичного текста, но визуально текст ближе к raster crop; bitmap оставлен только на гербе, jersey и shield.
