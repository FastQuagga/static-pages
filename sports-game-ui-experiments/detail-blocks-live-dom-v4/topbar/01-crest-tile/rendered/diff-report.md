# Diff report

Источник: `reference/original.png`  
Размер: `78 x 75`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | v2 CSS + старый micro-crop | 30.781 | 2480 | 0.4239 | 750 |
| `layout-v2.png` | micro-crop переснят из текущего `reference/original.png` | 20.618 | 2220 | 0.3795 | 750 |
| `layout-v3.png` | darker background pass без grid texture | 21.111 | 3081 | 0.5267 | 750 |
| `layout-v4.png` | body background вместо белых rounded-corners Chrome | 20.739 | 3077 | 0.5260 | 549 |
| `layout-v5.png` | возврат к более близкому v2 фону + body background | 20.245 | 2216 | 0.3788 | 549 |
| `layout-final.png` | текущий `layout.html`, live DOM button + crest micro-crop | 20.245 | 2216 | 0.3788 | 549 |
| `layout-exact.png` | полный raster crop внутри HTML | 6.117 | 112 | 0.0191 | 26 |

## Вывод

Главная ошибка после переснятия micro-crop идет от CSS-фона и рамки вокруг герба. Exact baseline показывает нижнюю границу Chrome/color pipeline, а live-DOM вариант оставлен интерактивной кнопкой с raster только для герба.
