# 02 Scoreboard Card

## Source of truth

- Original crop: `reference/original.png`
- Размер: `421x124`
- Назначение: live-scoreboard с командами, счётом, таймером, формацией и шансом победы.

## DOM-структура

```text
section.scoreboard-card[data-block="scoreboard-card"][data-match-state="live"] 421x124
  header.score-row[data-region="score-row"]
    img.crest-left[data-team-id="newport-city"]
    span.team-left[data-field="home-team"]
    output.score[data-field="score"][data-home-score][data-away-score]
    span.team-right[data-field="away-team"]
    img.crest-right[data-team-id="riverside-utd"]
  div.meta-row[data-region="match-meta"]
    span[data-field="period"]
    output.timer[data-field="match-clock"]
    span[data-field="formation"]
  div.chance-row[data-region="win-chance"]
    span.chance-label
    output.chance-value[data-field="win-chance-value"]
    progress.chance-progress[data-field="win-chance-progress"][max][value]
```

## Micro-crops

| file | x | y | w | h | final usage |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/newport-crest.png` | 12 | 4 | 44 | 44 | used in live layout |
| `assets/micro-crops/riverside-crest.png` | 365 | 4 | 44 | 44 | used in live layout |

Живые значения (`score`, `timer`, `62%`, `progress`) не запечены в PNG.

## Итерации

- `layout-v1.png`: CSS-карта, DOM-текст, `output` для счёта/таймера/процента, нативный `progress`.
- `layout-final.png`: принят как финал; расхождение в основном идёт от live typography и CSS progress вместо raster-антиалиасинга.

## Финальная оценка

- `layout-final.png`: `avgRgbDelta 18.897`, `changedPixelsOver24 28469`, `changedRatio 0.5453`, `maxRgbTripletDelta 744`.
- `layout-exact.png`: `avgRgbDelta 5.647`, `changedPixelsOver24 201`, `changedRatio 0.0039`, `maxRgbTripletDelta 27`.
- Вывод: scoreboard сохранён как настоящий UI; высокий raw diff ожидаем для крупного DOM-счёта и текстовых строк.
