# 05 Next Match

- Размер: `182 x 65`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/05-next-match.png` без масштабирования.
- Назначение: переход к следующему матчу и срок до него.

## DOM-структура

```text
button.status-slice.next-match[data-component="bottom-next-match"][data-action="open-next-match"][data-next-match-id]
  span.next-label "NEXT MATCH"
  img.status-icon
  time.next-time[datetime="P2D"][data-bind="nextMatch.startsIn"] "2 days"
```

Блок сделан `button`: ожидаемое действие - открыть карточку следующего матча. Значение `2 days` оставлено live-DOM.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/icon-calendar.png` | 89 | 21 | 24 | 24 | used in live layout |

Текст `NEXT MATCH` и `2 days` не запекался в PNG.

## Итерации

- `v4-live-1`: блок переведен в semantic `button`, срок до матча оформлен как `time`.
- `v4-live-2`: календарь нарезан из original crop, фон и разделители собраны CSS.

## Финальная оценка

Иконка и основные координаты совпадают с crop. Финальная метрика `layout-final.png`: `avgRgbDelta 7.463`, `changedRatio 0.1321`. Расхождение остается на live-render текста и CSS-восстановлении темной подложки.
