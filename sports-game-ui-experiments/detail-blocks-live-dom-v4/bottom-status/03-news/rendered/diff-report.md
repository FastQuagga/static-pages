# 03 News Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 11.039 | 5620 | 0.1650 | 560 | Live headline был слишком ярким и крупным. |
| `layout-final.png` | 9.793 | 5438 | 0.1597 | 524 | Затемнен и уменьшен headline; финальный live-DOM вариант. |
| `layout-exact.png` | 6.534 | 88 | 0.0026 | 27 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` сохраняет `NEWS` и headline DOM-текстом внутри `button`. Bitmap-heavy текст не использован.
