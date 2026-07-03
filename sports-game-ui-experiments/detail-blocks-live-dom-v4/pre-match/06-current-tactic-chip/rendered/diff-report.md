# 06 Current Tactic Chip Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 20.930 | 3116 | 0.2981 | 697 |
| `layout-exact` | 6.529 | 16 | 0.0015 | 27 |
| `layout-final` | 17.744 | 2967 | 0.2839 | 697 |

Итог: final улучшил фон и текстовый вес. DOM-кнопка сохранена; bitmap используется только для tactical glyph.
