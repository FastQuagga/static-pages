# Diff Report: 05-match-pnl-card

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=248,179
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 19.306 | 24040 | 0.5415 | 674 |
| `layout-final` | `layout-final.png` | 16.516 | 10725 | 0.2416 | 686 |
| `layout-exact` | `layout-exact.png` | 6.623 | 105 | 0.0024 | 27 |

## Notes

Финальная версия использует live `table`, `output` для сумм и настоящие `button` для info/details. Иконки являются micro-crops; строки таблицы, суммы и CTA text не запечены в PNG.
