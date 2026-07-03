# Diff Report: 03-why-we-won-card

## Render

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=406,142
```

Compare script: `detail-blocks-live-dom-v4/scripts/compare-png.mjs`

## Metrics

| Pass | Screenshot | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| `layout-v1` | `layout-final.png` before background pass | 17.487 | 22652 | 0.3929 | 617 |
| `layout-final` | `layout-final.png` | 14.618 | 11195 | 0.1942 | 617 |
| `layout-exact` | `layout-exact.png` | 6.652 | 173 | 0.0030 | 27 |

## Notes

Background pass приблизил card tone к source crop и уменьшил заметность прямоугольных краев icon micro-crops. Тексты причин и заголовок остаются live-DOM.
