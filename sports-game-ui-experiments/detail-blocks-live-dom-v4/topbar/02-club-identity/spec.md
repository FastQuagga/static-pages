# 02 Club Identity

- Размер: `180 x 70`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: название клуба и короткий слоган в topbar.

## DOM-структура

```text
button.club-identity[data-component="club-identity"][data-action="open-club-profile"]
  span.club-name "NEWPORT CITY FC"
  span.club-motto "Building a Legacy"
```

Текст оставлен live-DOM, чтобы название и слоган можно было менять из данных клуба. Весь блок сделан кнопкой, потому что это та же навигационная зона, что и герб.

## Micro-crops

Нет. Блок состоит из текста и простого темного поля; нарезка текста противоречила бы live-DOM pipeline.

## Итерации

- `v4-live-1`: перенесена v2 типографика и фон, текст переведен в `span` внутри кнопки.
- `v4-live-2`: уменьшен вес заголовка и убрано растяжение через browser-specific font-stretch, чтобы результат стабильнее рендерился в Chrome.

## Финальная оценка

Главное расхождение ожидаемо идет от шрифта и anti-aliasing живого текста. Функционально блок готов: все изменяемые строки являются DOM-текстом, raster-asset не используется.
