# 05 Next Match Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 8.189 | 1602 | 0.1354 | 573 | Иконка совпала, но label/time были ярче original. |
| `layout-final.png` | 7.463 | 1563 | 0.1321 | 533 | Затемнены label/time; финальный live-DOM вариант. |
| `layout-exact.png` | 6.403 | 33 | 0.0028 | 27 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` держит срок до следующего матча в `time`, а календарь остается единственным raster micro-crop.
