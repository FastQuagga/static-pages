# 04 Match Flow Card Diff Report

## Pipeline

- Render: Chrome headless, `--force-device-scale-factor=1`, `--window-size=421,102`.
- Compare: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`.
- Reference: `reference/original.png`.

## Measurements

| render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | note |
| --- | ---: | ---: | ---: | ---: | --- |
| `layout-exact.png` | 6.803 | 85 | 0.002 | 27 | Raster baseline; небольшая погрешность Chrome/color pipeline. |
| `layout-v1.png` | 13.01 | 9307 | 0.2167 | 733 | CSS chart + event crops с исходной тёмной подложкой. |
| `layout-asset-pass.png` | 12.925 | 9135 | 0.2127 | 733 | Event crops переведены в RGBA; визуально ушли квадратные подложки. |
| `layout-final.png` | 12.925 | 9135 | 0.2127 | 733 | Финал совпадает с asset-pass. |

## Вывод

Asset-pass улучшил локальное качество event glyphs без bitmap-heavy timeline. Значения минут, title, bars и grid остаются live-DOM/CSS.
