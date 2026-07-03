# 03 Last Report Strip

## Размер

- Original crop: `78x305`
- HTML layout: fixed `78x305`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/03-last-report-strip.png`

## DOM-структура

```text
aside.report-strip[data-block="last-report-strip"]
  div.report-strip__icon
    img report-tactic-icon
  div[data-bind="report-title"]
  div[data-bind="report-opponent"]
  output[data-bind="report-score"]
  output[data-bind="report-result"][data-result]
  div label
  div[data-bind="key-performer-name"]
  output[data-bind="key-performer-rating"]
  button[data-action="open-last-report"]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/report-tactic-icon.png` | 21 | 17 | 36 | 36 | used in live layout |

Score, result chip, player name, rating and `VIEW` button are live DOM.

## Итерации

- `v1 live-DOM`: собрана вертикальная карточка, score/result/rating переведены в `output`, `VIEW` сделан настоящим `button`.
- `background/typography pass`: затемнён фон, мелкие подписи облегчены для визуальной близости к original.

## Финальная оценка

Финальная версия сохраняет интерактивную кнопку и live-значения. Остаточный diff связан с очень мелким текстом в узком блоке и CSS-воспроизведением result chip/button.
