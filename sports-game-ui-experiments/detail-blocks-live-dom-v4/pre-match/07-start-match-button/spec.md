# 07 Start Match Button

## Размер

- Original crop: `236x67`
- HTML layout: fixed `236x67`
- Source: `screen-01-match-hub-v2/original-mockup-blocks/detail/pre-match/07-start-match-button.png`

## DOM-структура

```text
button.start-button[data-block="start-match-button"][data-action="start-match"]
  span[data-bind="button-label"]
  i play-icon[aria-hidden]
```

## Micro-crops

Не используются. Текст, рамка, glow, круг и play-triangle собраны live-DOM/CSS.

## Итерации

- `v1 live-DOM`: CTA собрана как semantic `button`, play icon сделан CSS-геометрией.
- `background/typography pass`: затемнён фон и glow, кнопка наследует основной шрифт.
- `geometry pass`: текст и play circle разведены по исходному raster: `padding-left: 49px`, `gap: 44px`, label увеличен до `17px`.

## Финальная оценка

Кнопка остаётся полностью live-DOM и интерактивной. Pixel diff высокий из-за сложного raster glow в original, но финальный вариант визуально ближе по позициям label/play icon и не использует bitmap-heavy CTA.
