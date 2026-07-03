# 02 Opponent Card Diff Report

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

| Render | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | ---: | ---: | ---: | ---: |
| `layout-v1` | 19.177 | 25442 | 0.2623 | 717 |
| `layout-exact` | 6.290 | 267 | 0.0028 | 27 |
| `layout-final` | 19.847 | 26307 | 0.2712 | 717 |

Итог: final выбран как live-DOM pass с более близкой визуальной иерархией текста. Основной diff остаётся в текстовом anti-aliasing, CSS-чипах формы и фоне; допустимые micro-crops совпадают с original по координатам.
