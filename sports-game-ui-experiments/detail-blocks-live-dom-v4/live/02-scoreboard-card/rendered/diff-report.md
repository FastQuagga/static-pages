# 02 Scoreboard Card Diff Report

## Pipeline

- Render: Chrome headless, `--force-device-scale-factor=1`, `--window-size=421,124`.
- Compare: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`.
- Reference: `reference/original.png`.

## Measurements

| render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | note |
| --- | ---: | ---: | ---: | ---: | --- |
| `layout-exact.png` | 5.647 | 201 | 0.0039 | 27 | Raster baseline; небольшая погрешность от screenshot/color pipeline. |
| `layout-v1.png` | 18.897 | 28469 | 0.5453 | 744 | DOM score, labels, timer and progress. Гербы raster. |
| `layout-final.png` | 18.897 | 28469 | 0.5453 | 744 | Финал совпадает с v1 после визуальной проверки. |

## Вывод

Главное расхождение создают текстовые glyphs и живая progress bar. Bitmap-heavy score или labels не использовались, потому что это нарушило бы live-DOM pipeline.
