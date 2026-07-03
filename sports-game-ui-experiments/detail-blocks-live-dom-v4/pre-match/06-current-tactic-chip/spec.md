# 06 Current Tactic Chip

## Размер

- Original crop: `156x67`
- HTML layout: fixed `156x67`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/06-current-tactic-chip.png`

## DOM-структура

```text
button.tactic-chip[data-block="current-tactic-chip"][data-action="open-tactic-selector"]
  span.tactic-chip__title[data-bind="card-title"]
  span.tactic-chip__body
    img tactic-glyph
    span[data-bind="current-tactic"]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/tactic-glyph.png` | 14 | 28 | 31 | 31 | used in live layout |

Title and tactic name are live DOM. Весь chip сделан `button`, чтобы сразу поддерживать переход к выбору тактики.

## Итерации

- `v1 live-DOM`: v2 chip переведён в semantic `button`, добавлен `data-action`.
- `background/typography pass`: фон подогнан к original, tactic label облегчен до `font-weight: 700`, кнопка наследует основной шрифт.

## Финальная оценка

Блок готов как интерактивный chip. Diff остаётся в text anti-aliasing и CSS-фоне; tactical glyph взят micro-crop, текст не запечён.
