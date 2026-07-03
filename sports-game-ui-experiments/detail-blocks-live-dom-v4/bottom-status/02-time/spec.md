# 02 Time

- Размер: `125 x 65`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/02-time.png` без масштабирования.
- Назначение: текущее игровое время в нижней статусной строке.

## DOM-структура

```text
section.status-slice.status-time[data-component="bottom-time"]
  time.status-row[datetime="19:45"][data-game-time="19:45"]
    img.status-icon
    span.status-text[data-bind="clock.time"] "07:45 PM"
```

Время оставлено живым DOM-значением; `data-game-time` и `data-bind` дают стабильные hooks для интеграции.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/icon-clock.png` | 17 | 20 | 24 | 24 | used in live layout |

Текст времени не запекался в PNG.

## Итерации

- `v4-live-1`: собран fixed-size slice с `time`, micro-crop часов и CSS-разделителями.
- `v4-live-2`: фон и top/bottom edges приведены к той же темной шкале, что в original crop; позиция иконки оставлена по исходным координатам.

## Финальная оценка

Блок визуально совпадает по композиции. Финальная метрика `layout-final.png`: `avgRgbDelta 8.769`, `changedRatio 0.1589`. Pixel diff ожидаемо создают живой текст времени и небольшая разница CSS-фона относительно raster mockup.
