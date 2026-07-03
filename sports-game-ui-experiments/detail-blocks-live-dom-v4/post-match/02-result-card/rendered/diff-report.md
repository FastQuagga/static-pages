# Diff Report: 02-result-card

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=406,113
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 17.502 | 11931 | 0.2601 | 725 |
| `layout-final` | `layout-final.png` | 16.098 | 10176 | 0.2218 | 725 |
| `layout-exact` | `layout-exact.png` | 6.636 | 254 | 0.0055 | 27 |

## Notes

Гербы используются как micro-crops. Счет, `WIN` и названия команд остаются live-DOM, поэтому главный diff идет от anti-aliasing крупного score и team labels.
