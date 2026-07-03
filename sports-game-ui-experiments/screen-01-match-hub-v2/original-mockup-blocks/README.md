# Нарезка оригинального мокапа 01 на блоки

Источник: `docs/brainstorm/claude/ui/v2/screen-01-match-hub.png`  
Размер источника: `1440 x 900`  
Метод: crop без масштабирования, координаты в пикселях от левого верхнего угла.

## Структура

- `block-map.html` - общая HTML-карта нарезки: crop-картинки собраны на
  исходных координатах и подсвечены тонкими цветными рамками. В конце страницы
  добавлена `Live-DOM Assembly Map`: экран, собранный из HTML/CSS-блоков
  `detail-blocks-live-dom-v4` на тех же координатах и с теми же рамками.
- `block-map.css` - стили карты нарезки.
- `block-map-with-live-dom-assembly.png` - screenshot обновленной страницы с
  original/global map, detail map и live-DOM сборкой.
- `global/` - крупные зоны экрана.
- `detail/topbar/` - подблоки верхней панели.
- `detail/pre-match/` - карточки и элементы панели `PRE-MATCH`.
- `detail/live/` - карточки и элементы панели `LIVE`.
- `detail/post-match/` - карточки и элементы панели `POST-MATCH`.
- `detail/bottom-status/` - секции нижней status/action bar.

## Обязательное правило для pipeline

После каждой декомпозиции полного мокапа нужно генерировать сводный
`block-map.html`. Карта должна показывать original mockup, global map и detail
map; все crop-блоки вставляются без масштабирования, на исходных координатах из
`block-map-global.csv/json` и `block-map-detail.csv/json`, с тонкими цветными
рамками и labels.

Если для блоков уже есть live-DOM верстка, в `block-map.html` добавляется
`Live-DOM Assembly Map`: полный экран, собранный из HTML/CSS-блоков на тех же
координатах. Для assembly map нужен переключатель debug-рамок. Отдельно должна
быть clean-сборка полного live-DOM экрана без рамок, labels и debug-элементов.

## Global Blocks

| Файл | x | y | w | h |
| --- | ---: | ---: | ---: | ---: |
| `global/01-topbar.png` | 10 | 11 | 1418 | 75 |
| `global/02-left-nav.png` | 10 | 98 | 80 | 703 |
| `global/03-pre-match-panel.png` | 105 | 98 | 425 | 703 |
| `global/04-live-panel.png` | 542 | 98 | 445 | 703 |
| `global/05-post-match-panel.png` | 998 | 98 | 430 | 703 |
| `global/06-bottom-status-bar.png` | 10 | 821 | 1418 | 65 |

## Detail Blocks

| Файл | x | y | w | h |
| --- | ---: | ---: | ---: | ---: |
| `detail/topbar/01-crest-tile.png` | 10 | 11 | 78 | 75 |
| `detail/topbar/02-club-identity.png` | 97 | 13 | 180 | 70 |
| `detail/topbar/03-league-tile.png` | 292 | 12 | 190 | 72 |
| `detail/topbar/04-resource-cluster.png` | 494 | 12 | 480 | 72 |
| `detail/topbar/05-speed-control.png` | 985 | 12 | 255 | 72 |
| `detail/topbar/06-system-cluster.png` | 1252 | 12 | 176 | 72 |
| `detail/pre-match/01-pre-header.png` | 105 | 98 | 425 | 58 |
| `detail/pre-match/02-opponent-card.png` | 116 | 170 | 318 | 305 |
| `detail/pre-match/03-last-report-strip.png` | 444 | 170 | 78 | 305 |
| `detail/pre-match/04-win-chance-card.png` | 116 | 487 | 405 | 104 |
| `detail/pre-match/05-coach-recommendation-card.png` | 116 | 603 | 405 | 93 |
| `detail/pre-match/06-current-tactic-chip.png` | 116 | 709 | 156 | 67 |
| `detail/pre-match/07-start-match-button.png` | 285 | 709 | 236 | 67 |
| `detail/live/01-live-header.png` | 542 | 98 | 445 | 58 |
| `detail/live/02-scoreboard-card.png` | 554 | 170 | 421 | 124 |
| `detail/live/03-match-field-card.png` | 554 | 307 | 421 | 267 |
| `detail/live/04-match-flow-card.png` | 554 | 587 | 421 | 102 |
| `detail/live/05-speed-control-card.png` | 554 | 701 | 421 | 87 |
| `detail/post-match/01-post-header.png` | 998 | 98 | 430 | 58 |
| `detail/post-match/02-result-card.png` | 1010 | 168 | 406 | 113 |
| `detail/post-match/03-why-we-won-card.png` | 1010 | 292 | 406 | 142 |
| `detail/post-match/04-mvp-card.png` | 1010 | 444 | 154 | 179 |
| `detail/post-match/05-match-pnl-card.png` | 1168 | 444 | 248 | 179 |
| `detail/post-match/06-next-opponent-card.png` | 1010 | 634 | 406 | 95 |
| `detail/post-match/07-continue-button.png` | 1010 | 739 | 406 | 50 |
| `detail/bottom-status/01-date.png` | 10 | 821 | 158 | 65 |
| `detail/bottom-status/02-time.png` | 168 | 821 | 125 | 65 |
| `detail/bottom-status/03-news.png` | 293 | 821 | 524 | 65 |
| `detail/bottom-status/04-status.png` | 817 | 821 | 249 | 65 |
| `detail/bottom-status/05-next-match.png` | 1066 | 821 | 182 | 65 |
| `detail/bottom-status/06-continue-cta.png` | 1248 | 828 | 170 | 47 |

Всего: `37` PNG-файлов.
