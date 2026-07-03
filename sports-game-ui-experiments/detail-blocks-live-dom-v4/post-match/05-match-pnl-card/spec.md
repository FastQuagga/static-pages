# Match P&L Card

Группа: `post-match`  
Размер: `248 x 179`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/05-match-pnl-card.png`

## DOM-структура

```text
section.block-root.pnl-card[data-block="match-pnl-card"]
  header.pnl-header
    h2[data-field="title"]
    button.info-button-left[data-action="show-pnl-info"]
    button.info-button-right[data-action="show-pnl-help"]
  table.pnl-grid[data-table="match-pnl"]
    thead
      th category labels
    tbody
      tr.icon-row
        img finance icons
      tr.value-row
        output[data-field]
  button.details-button[data-action="open-pnl-details"]
```

## Micro-crops

| Файл | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/info-left.png` | 85 | 8 | 18 | 18 | used in live layout |
| `assets/micro-crops/info-right.png` | 219 | 8 | 18 | 18 | used in live layout |
| `assets/micro-crops/icon-tickets.png` | 16 | 73 | 20 | 20 | used in live layout |
| `assets/micro-crops/icon-sponsor.png` | 56 | 73 | 20 | 20 | used in live layout |
| `assets/micro-crops/icon-prize.png` | 96 | 73 | 21 | 20 | used in live layout |
| `assets/micro-crops/icon-salaries.png` | 138 | 73 | 18 | 20 | used in live layout |
| `assets/micro-crops/icon-upkeep.png` | 177 | 73 | 21 | 20 | used in live layout |
| `assets/micro-crops/icon-net.png` | 218 | 73 | 18 | 20 | used in live layout |
| `assets/micro-crops/icon-details-external.png` | 147 | 143 | 15 | 15 | used in live layout |

Labels, суммы, net value и `DETAILS` остаются live-DOM. Строки таблицы и кнопка не запечены в PNG.

## Итерации

1. `layout-v1`: P&L собран как live `table`, иконки вынесены в micro-crops, действия сделаны `button`.
2. `layout-final`: выровнены grid columns, button baseline и right info icon.

## Финальная оценка

Главный diff приходится на live-типографику компактной таблицы и CSS-фон кнопки. Все финансовые значения остаются `output`.
