# Diff report

Источник: `reference/original.png`  
Размер: `255 x 72`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | v2 CSS + реальные buttons/output | 13.959 | 7987 | 0.4350 | 755 |
| `layout-v3.png` | typography pass: снижен weight у `SPEED` и `x4` | 12.649 | 7884 | 0.4294 | 755 |
| `layout-v4.png` | body background вместо белых rounded-corners Chrome | 12.522 | 7875 | 0.4289 | 710 |
| `layout-final.png` | текущий `layout.html`, CSS glyphs + live controls | 12.522 | 7875 | 0.4289 | 710 |
| `layout-exact.png` | полный raster crop внутри HTML | 5.453 | 40 | 0.0022 | 26 |

## Вывод

Блок полностью live-DOM: speed value сделан `output`, кнопки управления остаются `button`. Diff высокий по changedRatio из-за CSS-глифов и шрифта, но PNG для живых кнопок не использовались.
