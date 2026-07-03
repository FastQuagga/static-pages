# 02 Time Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 9.417 | 1328 | 0.1634 | 558 | Clock icon и геометрия совпали, текст был ярче original. |
| `layout-final.png` | 8.769 | 1291 | 0.1589 | 515 | Затемнен текст времени; финальный live-DOM вариант. |
| `layout-exact.png` | 6.461 | 16 | 0.0020 | 26 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` оставляет время живым `time`. Расхождение связано с системным рендерингом текста и baseline color conversion.
