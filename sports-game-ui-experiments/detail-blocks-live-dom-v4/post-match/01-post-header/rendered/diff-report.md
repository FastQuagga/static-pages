# Diff Report: 01-post-header

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=430,58
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 20.408 | 11035 | 0.4425 | 709 |
| `layout-final` | `layout-final.png` | 17.593 | 5285 | 0.2119 | 709 |
| `layout-exact` | `layout-exact.png` | 6.478 | 64 | 0.0026 | 26 |

## Notes

Финальная итерация затемнила header background и ослабила cyan glow. Остаточный diff в основном от live-типографики `POST-MATCH` и chevron-кнопки.
