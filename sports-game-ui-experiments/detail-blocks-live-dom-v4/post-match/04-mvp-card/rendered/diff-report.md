# Diff Report: 04-mvp-card

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=154,179
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 18.141 | 11362 | 0.4122 | 721 |
| `layout-final` | `layout-final.png` | 15.663 | 6471 | 0.2347 | 721 |
| `layout-exact` | `layout-exact.png` | 6.396 | 44 | 0.0016 | 27 |

## Notes

Портрет и sparkline оставлены raster-backed. Имя игрока, позиция, rating и growth live-DOM; остаточный diff в основном от compact typography и rating badge.
