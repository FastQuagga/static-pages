# 01 Pre Header

## Размер

- Original crop: `425x58`
- HTML layout: fixed `425x58`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/01-pre-header.png`

## DOM-структура

```text
section.pre-header[data-block="pre-header"]
  div.pre-header__copy
    div.pre-header__title[data-bind="section-title"]
    div.pre-header__subtitle[data-bind="section-subtitle"]
  button.pre-header__toggle[data-action="toggle-pre-match"]
    span[aria-hidden]
```

## Micro-crops

Не используются. Заголовок, подзаголовок, рамка и chevron-кнопка собраны CSS/DOM.

## Итерации

- `v1 live-DOM`: базовая геометрия по v2, кнопка сделана настоящим `button`, добавлены `data-*` hooks.
- `background/typography pass`: затемнён фон контейнера под sampled original `#051119`, кнопка явно наследует основной шрифт.

## Финальная оценка

Live-DOM версия визуально совпадает по структуре и интерактивности. Основной остаточный diff идёт от шрифтового anti-aliasing и тонкой разницы градиента/рамки; текст не запечён в bitmap.
