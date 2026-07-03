# 01 Date

- Размер: `158 x 65`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/01-date.png` без масштабирования.
- Назначение: текущая календарная дата в нижней статусной строке.

## DOM-структура

```text
section.status-slice.status-date[data-component="bottom-date"]
  time.status-row[datetime="0012-05-18"][data-game-date="year-12-05-18"]
    img.status-icon
    span.status-text[data-bind="calendar.date"] "May 18, Year 12"
```

Дата оставлена live-DOM через `time`; строка готова к обновлению значения через `data-bind`.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/icon-calendar.png` | 20 | 21 | 24 | 24 | used in live layout |

Текст даты не запекался в PNG.

## Итерации

- `v4-live-1`: перенесена геометрия bottom-status из исходного mockup CSS, glyph заменен на micro-crop, дата оформлена как `time`.
- `v4-live-2`: фон затемнен до медианного цвета original crop `#050f15`; left/top/bottom edges вынесены в CSS, чтобы не использовать raster-фон.

## Финальная оценка

Композиция и размер совпадают с crop. Финальная метрика `layout-final.png`: `avgRgbDelta 8.315`, `changedRatio 0.1397`. Основной diff остается на живом тексте и сглаживании иконки в отдельном DOM-слое, но изменяемая дата не bitmap-heavy.
