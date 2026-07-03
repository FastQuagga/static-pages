# 01 Live Header Diff Report

## Pipeline

- Render: Chrome headless, `--force-device-scale-factor=1`, `--window-size=445,58`.
- Compare: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`.
- Reference: `reference/original.png`.

## Measurements

| render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | note |
| --- | ---: | ---: | ---: | ---: | --- |
| `layout-exact.png` | 6.56 | 23 | 0.0009 | 26 | Raster baseline; почти весь diff ниже threshold, это нижняя граница Chrome/color pipeline. |
| `layout-v1.png` | 8.629 | 3736 | 0.1448 | 728 | Live-DOM текст и CSS chevron вместо raster. |
| `layout-final.png` | 8.629 | 3736 | 0.1448 | 728 | Финал совпадает с v1 после визуальной проверки. |

## Вывод

Дальше улучшать raw diff можно только ценой bitmap-heavy текста или кнопки. Для v4 это нецелесообразно: `LIVE`, статус и collapse action остаются DOM.
