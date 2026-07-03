# 03 Last Report Strip Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 19.187 | 7141 | 0.3002 | 722 |
| `layout-exact` | 6.498 | 57 | 0.0024 | 27 |
| `layout-final` | 17.885 | 6925 | 0.2911 | 722 |

Итог: background/typography pass улучшил средний delta и changedRatio. Bitmap используется только для tactical glyph; кнопка, счёт и рейтинг остаются DOM.
