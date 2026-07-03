# 04 Status

- Размер: `249 x 65`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/04-status.png` без масштабирования.
- Назначение: системный статус нижней панели.

## DOM-структура

```text
section.status-slice.status-system[data-component="bottom-system-status"]
  span.status-chip "STATUS"
  span.status-dot[aria-hidden="true"]
  output.system-text[name="system-status"][data-state="operational"][data-bind="system.status"] "All systems operational"
```

Текст статуса оставлен в `output`, чтобы состояние могло обновляться без замены разметки.

## Micro-crops

Дополнительные micro-crops не используются. Chip, dot и текст воспроизведены CSS/DOM.

## Итерации

- `v4-live-1`: статус выделен как `output`, добавлены `data-state` и `data-bind`.
- `v4-live-2`: dot и chip сделаны CSS-элементами; фон затемнен до общей шкалы bottom-status.

## Финальная оценка

Live-DOM контракт подходит для смены статуса и цвета состояния. Финальная метрика `layout-final.png`: `avgRgbDelta 7.527`, `changedRatio 0.1620`. Diff концентрируется на тексте и CSS-реконструкции рамок, но bitmap-heavy текста нет.
