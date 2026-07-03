# 05 Speed Control

- Размер: `255 x 72`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: текущая скорость симуляции и управление скоростью.

## DOM-структура

```text
section.speed-control[data-component="speed-control"]
  div.speed-copy
    span.speed-label "SPEED"
    output.speed-value[data-bind="gameSpeed"] "x4"
  div.button-strip[role="group"]
    button.back[data-action="speed-down"]
    button.pause[data-action="pause"]
    button.forward.active[data-action="speed-up"][data-speed="4"]
    button.forward.muted[data-action="speed-max"][data-speed="8"]
```

Кнопки являются настоящими `button`, значение скорости — `output`, чтобы игровая логика могла менять `state.gameSpeed` без перерендера картинки.

## Micro-crops

Нет. Треугольники перемотки, пауза, рамка и подсветка воспроизводятся CSS-формами; текст `SPEED` и `x4` не запекаются.

## Итерации

- `v4-live-1`: взята v2 геометрия, декоративный wrapper заменен на реальные кнопки с `data-action`.
- `v4-live-2`: скорость переведена в `output[data-bind="gameSpeed"]`, активная кнопка помечена `data-speed="4"`.
- `v4-live-3`: font-weight снижен до `700`, чтобы live text был ближе к исходной толщине.

## Финальная оценка

Блок полностью live-DOM: значения и управляющие зоны доступны для логики и тестов. Raw diff ограничен несовпадением шрифта и CSS-глифов с raster-оригиналом, но это правильный v4 результат.
