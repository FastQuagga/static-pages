# Why We Won Card

Группа: `post-match`  
Размер: `406 x 142`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/03-why-we-won-card.png`

## DOM-структура

```text
section.block-root.why-card[data-block="why-we-won-card"]
  h2[data-field="title"]
  ul.reason-list[data-list="win-reasons"]
    li[data-reason-id]
      img[data-asset="reason-icon"]
      span[data-field="reason-copy"]
```

## Micro-crops

| Файл | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/reason-shield.png` | 18 | 39 | 28 | 28 | used in live layout |
| `assets/micro-crops/reason-boot.png` | 18 | 77 | 28 | 28 | used in live layout |
| `assets/micro-crops/reason-star.png` | 18 | 114 | 28 | 28 | used in live layout |

Тексты причин и заголовок не запечены в PNG.

## Итерации

1. `layout-v1`: список причин собран как live `ul/li`, иконки вырезаны micro-crops.
2. `layout-final`: выровнены row separators, left gutter и вертикальный ритм строк.

## Финальная оценка

Визуальное расхождение сосредоточено в live-типографике строк и интенсивности CSS-разделителей. Содержимое причин остается редактируемым DOM-текстом.
