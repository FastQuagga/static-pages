# 04 Win Chance Card Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 12.090 | 7925 | 0.1882 | 523 |
| `layout-exact` | 6.329 | 46 | 0.0011 | 27 |
| `layout-final` | 10.746 | 7747 | 0.1839 | 523 |

Итог: final улучшил фон и вторичный текст без bitmap-heavy слоёв. Проценты и шкала остались live-DOM.
