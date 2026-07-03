# 04 Match Flow Card

## Source of truth

- Original crop: `reference/original.png`
- Размер: `421x102`
- Назначение: timeline pressure chart с событиями и минутными отметками.

## DOM-структура

```text
section.flow-card[data-block="match-flow-card"] 421x102
  h1.flow-title[data-field="title"]
  div.chart[data-region="pressure-chart"]
    div.grid-lines
    div.bars-blue[data-team="newport-city"]
      i bar
    div.bars-red[data-team="riverside-utd"]
      i bar
    div.bars-late[data-team="mixed"]
      i bar
    button.event-marker[data-event][data-minute]
      img event glyph
  div.ticks[data-region="minute-ticks"]
    span[data-minute]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/event-goal-left.png` | 89 | 28 | 18 | 18 | used in live layout, background flood-removed to alpha |
| `assets/micro-crops/event-goal-mid.png` | 164 | 28 | 18 | 18 | used in live layout, background flood-removed to alpha |
| `assets/micro-crops/event-flag.png` | 218 | 36 | 18 | 18 | used in live layout, background flood-removed to alpha |
| `assets/micro-crops/event-goal-right.png` | 343 | 28 | 18 | 18 | used in live layout, background flood-removed to alpha |

Bars, grid и minute ticks не запечены в PNG.

## Итерации

- `layout-v1.png`: CSS chart, DOM ticks, event glyph crops с исходной тёмной подложкой.
- `layout-asset-pass.png`: event crops переведены в RGBA через flood background removal, чтобы убрать заметные квадраты вокруг glyphs.
- `layout-final.png`: asset-pass принят как финал.

## Финальная оценка

- `layout-final.png`: `avgRgbDelta 12.925`, `changedPixelsOver24 9135`, `changedRatio 0.2127`, `maxRgbTripletDelta 733`.
- `layout-exact.png`: `avgRgbDelta 6.803`, `changedPixelsOver24 85`, `changedRatio 0.002`, `maxRgbTripletDelta 27`.
- Вывод: финал сохраняет chart как DOM/CSS; оставшийся diff ожидаем из-за bar geometry, CSS grid и live text антиалиасинга.
