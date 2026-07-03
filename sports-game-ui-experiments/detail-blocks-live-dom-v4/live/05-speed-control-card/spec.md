# 05 Speed Control Card

## Source of truth

- Original crop: `reference/original.png`
- Размер: `421x87`
- Назначение: управление скоростью live-матча и действие `SKIP MATCH`.

## DOM-структура

```text
section.speed-card[data-block="speed-control-card"] 421x87
  h1.speed-title[data-field="title"]
  div.controls[role="group"][data-control="game-speed"]
    button.segment.pause[data-action="pause"]
    button.segment[data-action="set-speed"][data-speed="1"]
    button.segment[data-action="set-speed"][data-speed="2"]
    button.segment.active[data-action="set-speed"][data-speed="4"][aria-pressed="true"]
    button.segment[data-action="set-speed"][data-speed="8"]
  button.skip[data-action="skip-match"]
    span label
    i fast-forward glyph
```

## Micro-crops

Не используются. Pause и fast-forward glyphs собраны CSS-геометрией, кнопки и значения скоростей остаются DOM.

## Итерации

- `layout-v1.png`: CSS card, segmented control на `button`, активный `4x`, skip button.
- `layout-final.png`: принят как финал; видимое расхождение связано с живой типографикой и CSS-иконками.

## Финальная оценка

- `layout-final.png`: `avgRgbDelta 12.556`, `changedPixelsOver24 9396`, `changedRatio 0.2565`, `maxRgbTripletDelta 732`.
- `layout-exact.png`: `avgRgbDelta 6.304`, `changedPixelsOver24 35`, `changedRatio 0.001`, `maxRgbTripletDelta 26`.
- Вывод: control panel полностью live-DOM, без bitmap-heavy кнопок.
