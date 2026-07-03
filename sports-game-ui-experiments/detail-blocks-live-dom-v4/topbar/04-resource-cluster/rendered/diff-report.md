# Diff report

Источник: `reference/original.png`  
Размер: `480 x 72`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | live-DOM версия из `block-04-resource-cluster-v1` | 11.294 | 6102 | 0.1766 | 746 |
| `layout-v2.png` | micro-crops пересняты из текущего `reference/original.png` | 11.294 | 6102 | 0.1766 | 746 |
| `layout-v4.png` | body background вместо белых rounded-corners Chrome | 11.225 | 6087 | 0.1761 | 740 |
| `layout-final.png` | текущий `layout.html`, live DOM values/buttons | 11.225 | 6087 | 0.1761 | 740 |
| `layout-exact.png` | полный raster crop внутри HTML | 5.193 | 87 | 0.0025 | 26 |

## Вывод

Это тот же целевой live-DOM подход, что в обновленном resource-cluster v1: кнопки ресурсов, `output` для значений и raster только для трех иконок. Bitmap-группы с текстом не используются.
