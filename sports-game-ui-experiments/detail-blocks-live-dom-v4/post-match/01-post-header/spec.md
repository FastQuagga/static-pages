# Post Header

Группа: `post-match`  
Размер: `430 x 58`  
Источник: `screen-01-match-hub-v2/original-mockup-blocks/detail/post-match/01-post-header.png`

## DOM-структура

```text
section.block-root[data-block="post-header"]
  div.header-copy[data-role="post-match-copy"]
    strong[data-field="title"]
    span[data-field="subtitle"]
  button.collapse-button[data-action="toggle-post-match"]
```

## Micro-crops

Не используются. В блоке нет гербов, портретов или сложных иконок; кнопка сверстана как live `button`.

## Итерации

1. `layout-v1`: перенос структуры header из full mockup в изолированный live-DOM блок, добавлены `data-*` hooks и `layout-exact.html`.
2. `layout-final`: CSS-фон, рамка и типографика оставлены live, без bitmap-текста.

## Финальная оценка

Live-DOM отличается от exact главным образом anti-aliasing шрифта и CSS-рендером фона. Все изменяемые подписи и интерактивная кнопка остаются DOM-элементами.
