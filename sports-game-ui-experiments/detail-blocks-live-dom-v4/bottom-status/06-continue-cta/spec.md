# 06 Continue CTA

- Размер: `170 x 47`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/06-continue-cta.png` без масштабирования.
- Назначение: основной CTA перехода дальше.

## DOM-структура

```text
button.continue-cta[data-component="bottom-continue-cta"][data-action="continue"]
  span.cta-text[data-bind="cta.label"] "CONTINUE"
  span.cta-chevrons[aria-hidden="true"]
```

CTA сделан настоящей кнопкой. Label остается live-DOM и может локализоваться/меняться.

## Micro-crops

Micro-crops не используются. Рамка, фон, label и chevrons собраны CSS/DOM.

## Итерации

- `v4-live-1`: кнопка собрана как semantic `button` с `data-action="continue"`.
- `v4-live-2`: добавлен cyan border, внутреннее свечение и затемненная подложка, чтобы приблизить raster crop без bitmap-текста.
- `v4-live-3`: символ `»` заменен CSS-chevrons, потому что системный glyph был слишком тяжелым и плохо совпадал с исходной стрелкой.
- `v4-live-4`: подогнаны gradient, letter-spacing и gap между label/chevrons.

## Финальная оценка

Блок сохраняет интерактивность и исходный visual intent. Финальная метрика `layout-final.png`: `avgRgbDelta 19.767`, `changedRatio 0.3021`. Основной diff остается на живой типографике `CONTINUE`, CSS-chevrons и свечении рамки, но финальный слой не использует bitmap-heavy CTA.
