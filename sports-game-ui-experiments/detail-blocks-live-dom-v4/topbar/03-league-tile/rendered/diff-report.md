# Diff report

Источник: `reference/original.png`  
Размер: `190 x 72`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | первичный button, текст рендерился browser-default font | 35.335 | 6986 | 0.5107 | 712 |
| `layout-v2.png` | micro-crop эмблемы переснят, добавлен `font: inherit` | 26.986 | 5951 | 0.4350 | 712 |
| `layout-v3.png` | typography pass: уменьшены строки league/season/rank | 23.257 | 5658 | 0.4136 | 712 |
| `layout-v5.png` | background pass: затемнен фон до original crop | 21.174 | 3573 | 0.2612 | 712 |
| `layout-v6.png` | typography pass: еще уменьшены rank и secondary text | 17.309 | 3256 | 0.2380 | 712 |
| `layout-final.png` | текущий `layout.html`, live DOM text + league crest micro-crop | 17.309 | 3256 | 0.2380 | 712 |
| `layout-exact.png` | полный raster crop внутри HTML | 5.012 | 133 | 0.0097 | 27 |

## Вывод

Эмблема оставлена raster, все league данные являются DOM-текстом. Оставшийся diff ожидаем для live typography и не исправляется bitmap-текстом в целевом v4 проходе.
