# V4 Run Summary

Статус: генерация завершена  
Модель агентов: `gpt-5.5`  
Reasoning effort агентов: `xhigh`  
Количество агентов: `5`  
Pipeline: `../live-dom-html-from-mockup-pipeline.md`

## Результат

Сгенерированы все `31` detail-блока:

- `topbar`: 6 блоков;
- `pre-match`: 7 блоков;
- `live`: 5 блоков;
- `post-match`: 7 блоков;
- `bottom-status`: 6 блоков.

Главная страница сравнения:

- `compare-all.html` - вертикальное сравнение live-DOM верстки и original crop;
- `rendered/compare-all-v4.png` - screenshot общей страницы;
- `validate-v4.mjs` - интеграционная проверка структуры v4.

Финальная проверка:

```text
expectedBlocks: 31
errors: []
warnings: []
```

## Метрики `layout-final`

| Группа | Блок | avgRgbDelta | changedPixelsOver24 | changedRatio | maxRgbTripletDelta |
| --- | --- | ---: | ---: | ---: | ---: |
| topbar | `01-crest-tile` | 20.245 | 2216 | 0.3788 | 549 |
| topbar | `02-club-identity` | 24.204 | 2856 | 0.2267 | 747 |
| topbar | `03-league-tile` | 17.309 | 3256 | 0.2380 | 712 |
| topbar | `04-resource-cluster` | 11.225 | 6087 | 0.1761 | 740 |
| topbar | `05-speed-control` | 12.522 | 7875 | 0.4289 | 710 |
| topbar | `06-system-cluster` | 8.406 | 1585 | 0.1251 | 595 |
| pre-match | `01-pre-header` | 10.981 | 3747 | 0.1520 | 718 |
| pre-match | `02-opponent-card` | 19.847 | 26307 | 0.2712 | 717 |
| pre-match | `03-last-report-strip` | 17.885 | 6925 | 0.2911 | 722 |
| pre-match | `04-win-chance-card` | 10.746 | 7747 | 0.1839 | 523 |
| pre-match | `05-coach-recommendation-card` | 14.552 | 7084 | 0.1881 | 650 |
| pre-match | `06-current-tactic-chip` | 17.744 | 2967 | 0.2839 | 697 |
| pre-match | `07-start-match-button` | 26.547 | 10899 | 0.6893 | 610 |
| live | `01-live-header` | 8.629 | 3736 | 0.1448 | 728 |
| live | `02-scoreboard-card` | 18.897 | 28469 | 0.5453 | 744 |
| live | `03-match-field-card` | 5.047 | 22 | 0.0002 | 25 |
| live | `04-match-flow-card` | 12.925 | 9135 | 0.2127 | 733 |
| live | `05-speed-control-card` | 12.556 | 9396 | 0.2565 | 732 |
| post-match | `01-post-header` | 17.593 | 5285 | 0.2119 | 709 |
| post-match | `02-result-card` | 16.098 | 10176 | 0.2218 | 725 |
| post-match | `03-why-we-won-card` | 14.618 | 11195 | 0.1942 | 617 |
| post-match | `04-mvp-card` | 15.663 | 6471 | 0.2347 | 721 |
| post-match | `05-match-pnl-card` | 16.516 | 10725 | 0.2416 | 686 |
| post-match | `06-next-opponent-card` | 19.053 | 10401 | 0.2697 | 712 |
| post-match | `07-continue-button` | 16.240 | 6916 | 0.3407 | 615 |
| bottom-status | `01-date` | 8.315 | 1435 | 0.1397 | 524 |
| bottom-status | `02-time` | 8.769 | 1291 | 0.1589 | 515 |
| bottom-status | `03-news` | 9.793 | 5438 | 0.1597 | 524 |
| bottom-status | `04-status` | 7.527 | 2622 | 0.1620 | 429 |
| bottom-status | `05-next-match` | 7.463 | 1563 | 0.1321 | 533 |
| bottom-status | `06-continue-cta` | 19.767 | 2414 | 0.3021 | 564 |

## Важный вывод

V4 следует live-DOM правилу: изменяемые тексты, значения, CTA, таблицы, шкалы и
кликабельные зоны не запекаются в PNG. Поэтому часть блоков имеет более высокий
pixel diff, чем bitmap-heavy подход, но лучше подходит для будущей интеграции с
игровым состоянием и интерактивностью.
