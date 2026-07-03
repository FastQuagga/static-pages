# 01 Live Header

## Source of truth

- Original crop: `reference/original.png`
- Размер: `445x58`
- Назначение: заголовок live-секции с текущим состоянием матча и действием сворачивания.

## DOM-структура

```text
section.live-header[data-block="live-header"][data-live-state="running"] 445x58
  div.live-copy[data-region="status-copy"]
    output.live-title[data-field="live-state"] = LIVE
    span.live-subtitle[data-field="match-status"] = Match in progress
  button.collapse-button[data-action="collapse-live-panel"][aria-expanded]
    span chevron glyph
```

## Micro-crops

Не используются. Блок состоит из CSS-фона, live-DOM текста и простой CSS-пиктограммы chevron.

## Итерации

- `layout-v1.png`: базовая live-DOM сборка на CSS gradients, DOM-тексте и `button`.
- `layout-final.png`: принят как финальный, потому что визуальное расхождение ограничено anti-aliasing текста и небольшой разницей фона; bitmap-текст не применялся.

## Финальная оценка

- `layout-final.png`: `avgRgbDelta 8.629`, `changedPixelsOver24 3736`, `changedRatio 0.1448`, `maxRgbTripletDelta 728`.
- `layout-exact.png`: `avgRgbDelta 6.56`, `changedPixelsOver24 23`, `changedRatio 0.0009`, `maxRgbTripletDelta 26`.
- Вывод: live-DOM слой пригоден для интеграции; точный raster baseline показывает небольшой системный RGB-сдвиг Chrome pipeline.
