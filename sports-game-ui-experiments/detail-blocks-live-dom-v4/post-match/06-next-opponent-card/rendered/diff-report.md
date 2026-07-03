# Diff Report: 06-next-opponent-card

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=406,95
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 22.358 | 23359 | 0.6056 | 712 |
| `layout-final` | `layout-final.png` | 19.053 | 10401 | 0.2697 | 712 |
| `layout-exact` | `layout-exact.png` | 6.198 | 102 | 0.0026 | 27 |

## Notes

Используется только crest micro-crop. `FORM W L D W L`, strength number и strength bar live-DOM, поэтому diff выше bitmap-heavy варианта, но UI готов к обновлению данных.
