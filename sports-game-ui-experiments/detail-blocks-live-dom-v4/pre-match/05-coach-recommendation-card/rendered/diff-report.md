# 05 Coach Recommendation Card Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 17.512 | 7171 | 0.1904 | 635 |
| `layout-exact` | 6.388 | 124 | 0.0033 | 27 |
| `layout-final` | 14.552 | 7084 | 0.1881 | 650 |

Итог: typography/background pass снизил средний delta и визуально приблизил recommendation copy. Bitmap-текст не используется.
