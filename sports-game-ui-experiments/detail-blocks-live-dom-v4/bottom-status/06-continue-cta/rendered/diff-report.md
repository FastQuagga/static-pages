# 06 Continue CTA Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 26.936 | 5556 | 0.6954 | 601 | Фон и системный glyph `»` сильно расходились с crop. |
| `v4-live-2` | 27.573 | 4620 | 0.5782 | 586 | CSS-chevrons снизили changed pixels, но фон оставался неточным. |
| `layout-final.png` | 19.767 | 2414 | 0.3021 | 564 | Подогнаны фон, letter-spacing и позиция chevrons; финальный live-DOM вариант. |
| `layout-exact.png` | 3.221 | 0 | 0.0000 | 21 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` остается настоящей `button`: label и chevrons не запечены. Diff выше, чем у других bottom-status блоков, потому что весь CTA является светящимся DOM-текстом/рамкой на полупрозрачном фоне.
