# 01 Date Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 8.887 | 1445 | 0.1407 | 560 | Геометрия совпала, но текст был слишком ярким. |
| `layout-final.png` | 8.315 | 1435 | 0.1397 | 524 | Затемнен secondary text; финальный live-DOM вариант. |
| `layout-exact.png` | 6.402 | 20 | 0.0019 | 26 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` сохраняет дату живым `time`. Оставшийся diff в основном идет от anti-aliasing текста и цветового профиля PNG.
