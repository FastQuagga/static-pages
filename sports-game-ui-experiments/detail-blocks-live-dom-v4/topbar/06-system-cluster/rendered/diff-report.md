# Diff report

Источник: `reference/original.png`  
Размер: `176 x 72`

## Итерации

| Версия | Подход | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1.png` | v2 CSS + system buttons | 12.932 | 2766 | 0.2183 | 747 |
| `layout-v2.png` | micro-crops системных glyphs пересняты из текущего crop | 11.999 | 2684 | 0.2118 | 747 |
| `layout-v3.png` | typography pass: уменьшен и ослаблен `EN` | 11.146 | 2617 | 0.2065 | 747 |
| `layout-v4.png` | body background вместо белых rounded-corners Chrome | 10.958 | 2600 | 0.2052 | 595 |
| `layout-v5.png` | background/border pass: затемнены фон и внешняя рамка | 8.406 | 1585 | 0.1251 | 595 |
| `layout-final.png` | текущий `layout.html`, live language text + icon micro-crops | 8.406 | 1585 | 0.1251 | 595 |
| `layout-exact.png` | полный raster crop внутри HTML | 5.353 | 27 | 0.0021 | 26 |

## Вывод

Иконки fullscreen/settings оставлены raster, `EN` и кнопочные зоны остаются DOM. Финальная подгонка улучшила фон и рамку без запекания language text.
