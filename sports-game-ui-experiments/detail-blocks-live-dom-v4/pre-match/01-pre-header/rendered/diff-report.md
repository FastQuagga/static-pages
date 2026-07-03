# 01 Pre Header Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 11.059 | 3747 | 0.1520 | 712 |
| `layout-exact` | 5.971 | 27 | 0.0011 | 26 |
| `layout-final` | 10.981 | 3747 | 0.1520 | 718 |

Итог: финальный pass слегка улучшил средний delta за счёт более тёмной подложки. Exact baseline показывает ненулевую нижнюю границу Chrome/color pipeline, но raster-контроль визуально совпадает с original.
