# 04 Status Diff Report

Команда:

```bash
node ../../scripts/compare-png.mjs rendered/layout-final.png reference/original.png
```

## Итерации

| Рендер | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta | Вывод |
| --- | ---: | ---: | ---: | ---: | --- |
| `v4-live-1` | 8.227 | 2767 | 0.1710 | 429 | Status text/dot были слишком яркими. |
| `layout-final.png` | 7.527 | 2622 | 0.1620 | 429 | Затемнены green text и dot glow; финальный live-DOM вариант. |
| `layout-exact.png` | 6.719 | 0 | 0.0000 | 24 | Нижняя граница Chrome/color pipeline для raster baseline. |

## Финальный вывод

`layout-final.png` использует `output` для системного статуса. Оставшийся diff в основном текстовый; dot и chip остаются CSS.
