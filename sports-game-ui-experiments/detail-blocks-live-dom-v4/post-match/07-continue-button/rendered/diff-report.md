# Diff Report: 07-continue-button

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=406,50
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 26.282 | 19028 | 0.9373 | 615 |
| `layout-final` | `layout-final.png` | 16.240 | 6916 | 0.3407 | 615 |
| `layout-exact` | `layout-exact.png` | 3.229 | 336 | 0.0166 | 27 |

## Notes

Gold gradient был затемнен отдельным background pass. Label и arrow остаются DOM-текстом внутри настоящего `button`; bitmap-heavy CTA не используется.
