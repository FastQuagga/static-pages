# 04 Win Chance Card

## Размер

- Original crop: `405x104`
- HTML layout: fixed `405x104`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/04-win-chance-card.png`

## DOM-структура

```text
section.win-card[data-block="win-chance-card"]
  div.win-card__title
    span[data-bind="card-title"]
    button[data-action="show-win-chance-info"]
  div.win-card__body
    output[data-bind="win-chance"][for="winChanceProgress"]
    progress#winChanceProgress[data-bind="win-chance-progress"]
    output[data-bind="win-chance-delta"]
    i arrow
  p[data-bind="win-chance-reason"]
```

## Micro-crops

Не используются. Info marker, progress bar, delta arrow, проценты и пояснение собраны live-DOM/CSS.

## Итерации

- `v1 live-DOM`: `63%` и `+7%` переведены в `output`, шкала сделана настоящим `progress`, info marker сделан `button`.
- `background/typography pass`: фон затемнён под sampled original, вторичный текст облегчен.

## Финальная оценка

Блок пригоден для интеграции: шанс победы, delta, reason и progress обновляются через DOM. Остаточный diff ожидаем для native `<progress>` и шрифтового рендера.
