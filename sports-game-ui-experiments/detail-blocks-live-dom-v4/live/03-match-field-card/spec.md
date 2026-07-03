# 03 Match Field Card

## Source of truth

- Original crop: `reference/original.png`
- Размер: `421x267`
- Назначение: tactical field live-матча с позициями, зонами, траекториями и точкой мяча.

## DOM-структура

```text
section.field-card[data-block="match-field-card"] 421x267
  img.tactical-layer
  button.player-hotspot[data-team="newport-city"][data-player-number]
  ...
  button.player-hotspot[data-team="riverside-utd"][data-player-number]
  button.ball-hotspot[data-event="ball"]
```

`player-hotspot` и `ball-hotspot` невидимы в обычном состоянии, но дают будущие интерактивные зоны поверх сложного tactical layer.

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/tactical-field-layer.png` | 0 | 0 | 421 | 267 | used in live layout |

Крупный raster layer допустим для этого блока: поле, translucent zones, player markers, dashed trajectories и мяч являются сложным tactical field layer.

## Итерации

- `layout-v1.png`: полный tactical layer + DOM-hotspots.
- `layout-final.png`: принят как финал; live layer визуально совпадает с exact baseline, а интерактивные зоны не влияют на обычный render.

## Финальная оценка

- `layout-final.png`: `avgRgbDelta 5.047`, `changedPixelsOver24 22`, `changedRatio 0.0002`, `maxRgbTripletDelta 25`.
- `layout-exact.png`: `avgRgbDelta 5.047`, `changedPixelsOver24 22`, `changedRatio 0.0002`, `maxRgbTripletDelta 25`.
- Вывод: отличие полностью упирается в нижнюю границу Chrome/color pipeline.
