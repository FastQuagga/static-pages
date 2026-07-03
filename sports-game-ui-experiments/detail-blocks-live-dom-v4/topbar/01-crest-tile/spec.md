# 01 Crest Tile

- Размер: `78 x 75`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: кликабельная плитка герба клуба в topbar.

## DOM-структура

```text
button.crest-tile[data-component="topbar-crest"][data-action="open-club-profile"]
  img.crest
```

Плитка сделана `button`, потому что герб в topbar естественно ведет в профиль клуба. Фон, рамка и состояние focus собраны CSS, герб оставлен raster-asset.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/crest.png` | 14 | 10 | 50 | 55 | used in live layout |

Живого текста в блоке нет. PNG используется только для сложного клубного герба.

## Итерации

- `v4-live-1`: перенесена v2 геометрия, контейнер переведен в интерактивный `button`, добавлены `data-*` hooks.
- `v4-live-2`: фон затемнен ближе к обновленному resource-cluster, добавлена слабая grid texture без запекания UI в PNG.

## Финальная оценка

`layout.html` пригоден для интеграции: вся интерактивная зона является DOM-кнопкой, raster-слой ограничен гербом. `layout-exact.html` оставлен как контрольный baseline для screenshot pipeline.
