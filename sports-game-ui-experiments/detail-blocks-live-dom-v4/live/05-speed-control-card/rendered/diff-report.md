# 05 Speed Control Card Diff Report

## Pipeline

- Render: Chrome headless, `--force-device-scale-factor=1`, `--window-size=421,87`.
- Compare: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`.
- Reference: `reference/original.png`.

## Measurements

| render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | note |
| --- | ---: | ---: | ---: | ---: | --- |
| `layout-exact.png` | 6.304 | 35 | 0.001 | 26 | Raster baseline; почти весь diff ниже threshold. |
| `layout-v1.png` | 12.556 | 9396 | 0.2565 | 732 | DOM buttons, CSS icons, active `4x`. |
| `layout-final.png` | 12.556 | 9396 | 0.2565 | 732 | Финал совпадает с v1 после визуальной проверки. |

## Вывод

Сегменты скорости и skip action остаются кнопками с `data-*` hooks. Bitmap-heavy кнопки не применялись.
