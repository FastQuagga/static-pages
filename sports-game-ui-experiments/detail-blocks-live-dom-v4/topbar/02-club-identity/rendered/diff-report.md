# Diff report

Источник: `reference/original.png`  
Размер: `180 x 70`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | первичный button, текст рендерился browser-default font | 40.483 | 6688 | 0.5308 | 723 |
| `layout-v2.png` | добавлен `font: inherit` для button | 33.377 | 6190 | 0.4913 | 719 |
| `layout-v3.png` | typography pass: поднят текст, снижен weight/size subtitle | 32.531 | 6064 | 0.4813 | 723 |
| `layout-v5.png` | background pass: затемнен фон, убран верхний highlight | 29.478 | 3126 | 0.2481 | 747 |
| `layout-v6.png` | geometry pass: текст поднят до original baseline | 24.204 | 2856 | 0.2267 | 747 |
| `layout-final.png` | текущий `layout.html`, live DOM text | 24.204 | 2856 | 0.2267 | 747 |
| `layout-exact.png` | полный raster crop внутри HTML | 4.652 | 98 | 0.0078 | 27 |

## Вывод

Raw diff в основном создают живой шрифт и anti-aliasing. Текст не запекался в PNG, потому что название клуба и motto должны обновляться из данных клуба.
