# Next Opponent Card

Группа: `post-match`  
Размер: `406 x 95`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/06-next-opponent-card.png`

## DOM-структура

```text
section.block-root.next-card[data-block="next-opponent-card"]
  h2[data-field="title"]
  div.next-identity[data-role="opponent-identity"]
    img[data-asset="opponent-crest"]
    strong[data-field="opponent-name"]
    span[data-field="opponent-rank"]
  div.next-strength[data-role="opponent-strength"]
    output[data-field="strength"]
    span.strength-bar[role="progressbar"]
  div.form-summary[data-role="opponent-form"]
    ol.form-chips
      li[data-field="form-*"]
```

## Micro-crops

| Файл | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/crest-highland.png` | 12 | 22 | 43 | 50 | used in live layout |

`FORM W L D W L` не нарезался как raster: это изменяемая форма команды, поэтому chips и буквы сверстаны DOM-элементами.

## Итерации

1. `layout-v1`: герб вынесен в micro-crop, identity, strength и form собраны live-DOM.
2. `layout-final`: подогнаны координаты заголовка, strength bar и form chips.

## Финальная оценка

Остаточный diff ожидаемо выше, чем у bitmap-heavy варианта, потому что form chips и strength bar живые. Это правильнее для интеграции: форма, сила и подписи обновляются через DOM.
