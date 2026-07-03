# 07 Start Match Button Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 29.742 | 12517 | 0.7916 | 615 |
| `background/typography pass` | 26.910 | 10974 | 0.6940 | 589 |
| `layout-exact` | 3.116 | 137 | 0.0087 | 27 |
| `layout-final` | 26.547 | 10899 | 0.6893 | 610 |

Итог: финальная geometry-итерация ещё немного снизила changedRatio и лучше поставила label/play icon. Высокий raw diff ожидаем: original CTA содержит плотный raster glow, а final намеренно оставлен CSS/button.
