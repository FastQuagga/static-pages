# 03 Match Field Card Diff Report

## Pipeline

- Render: Chrome headless, `--force-device-scale-factor=1`, `--window-size=421,267`.
- Compare: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`.
- Reference: `reference/original.png`.

## Measurements

| render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | note |
| --- | ---: | ---: | ---: | ---: | --- |
| `layout-exact.png` | 5.047 | 22 | 0.0002 | 25 | Raster baseline. |
| `layout-v1.png` | 5.047 | 22 | 0.0002 | 25 | Tactical layer + invisible DOM-hotspots. |
| `layout-final.png` | 5.047 | 22 | 0.0002 | 25 | Финал совпадает с v1. |

## Вывод

Для field block выбран разрешённый крупный tactical micro-crop. DOM-hotspots дают интеграционные hooks без ухудшения baseline.
