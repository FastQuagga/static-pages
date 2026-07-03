# 04 Resource Cluster

- Размер: `480 x 72`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: деньги, фанаты, репутация и текущий income rate.

## DOM-структура

```text
section.resource-cluster[data-component="resource-cluster"]
  button.resource-button.money-resource[data-resource="money"]
    img.money-icon
    span.resource-copy
      output.resource-value[data-bind="money"] "$ 12.45M"
      output.resource-rate[data-bind="money-rate"] "+285K /s"
  span.live-divider-a
  button.resource-button.fans-resource[data-resource="fans"]
    img.fans-icon
    span.resource-copy
      output.resource-value[data-bind="fans"] "98,734"
      output.resource-rate[data-bind="fans-rate"] "+1,250 /s"
  span.live-divider-b
  button.resource-button.reputation-resource[data-resource="reputation"]
    img.reputation-icon
    span.resource-copy
      output.resource-value[data-bind="reputation"] "87"
      span.resource-label "REPUTATION"
  output.income-rate-live[data-resource="income-rate"][data-bind="income-rate"] "+5 /s"
```

Ресурсные группы сделаны кнопками, потому что в игре они могут открывать детализацию экономики/фан-базы/репутации. Все числа и подписи остаются live-DOM.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/money.png` | 20 | 18 | 32 | 31 | used in live layout |
| `assets/micro-crops/fans.png` | 150 | 19 | 35 | 31 | used in live layout |
| `assets/micro-crops/reputation-star.png` | 280 | 15 | 39 | 38 | used in live layout |

Foreground-группы с текстом из предыдущего resource-cluster эксперимента не используются: они давали лучший raw diff, но ломали live-DOM цель.

## Итерации

- `v4-live-1`: взята обновленная live-DOM версия из `block-04-resource-cluster-v1`, без bitmap-групп.
- `v4-live-2`: значения переведены в `output`, добавлены `data-bind` hooks для будущего обновления ресурсов.
- `v4-live-3`: сохранены более легкие веса шрифта и координаты из финального `layout-live-v4`, потому что они уже прошли geometry/typography pass.

## Финальная оценка

Это целевой v4-вариант: интерактивность и динамические значения доступны через DOM, raster используется только для трех сложных иконок. Pixel diff хуже exact baseline из-за живого текста, но это осознанный tradeoff pipeline.
