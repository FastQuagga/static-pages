# Continue Button

Группа: `post-match`  
Размер: `406 x 50`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/07-continue-button.png`

## DOM-структура

```text
button.block-root.continue-button[data-block="continue-button"][data-action="continue-post-match"]
  span[data-field="label"]
  span.arrow[aria-hidden="true"]
```

## Micro-crops

Не используются. Кнопка, label и стрелка оставлены live-DOM.

## Итерации

1. `layout-v1`: CTA собран как настоящий `button`, фон и рамка восстановлены CSS.
2. `layout-final`: подогнаны gold gradient, центрирование label и arrow gap.

## Финальная оценка

Pixel diff в основном идет от живой типографики и CSS-gradient. Интерактивность и будущие состояния кнопки сохранены.
