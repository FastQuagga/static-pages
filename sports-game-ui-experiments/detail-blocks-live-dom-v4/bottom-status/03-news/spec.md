# 03 News

- Размер: `524 x 65`.
- Source of truth: `reference/original.png`, скопирован из `bottom-status/03-news.png` без масштабирования.
- Назначение: кликабельный ticker последней новости.

## DOM-структура

```text
button.status-slice.news-ticker[data-component="bottom-news"][data-action="open-news"][data-news-id]
  span.status-chip "NEWS"
  span.news-text[data-bind="news.headline"] "Marcus Diaz named in Team of the Week after stellar performance."
```

Новость сделана `button`, потому что ticker должен открывать подробности. Chip и headline остаются live-DOM.

## Micro-crops

Дополнительные micro-crops не используются: в блоке нет сложных иконок. Текст `NEWS` и headline не запекались в PNG.

## Итерации

- `v4-live-1`: v2 `div` заменен на semantic `button`, добавлены `data-component`, `data-action`, `data-news-id`.
- `v4-live-2`: chip переведен в CSS-рамку, фон затемнен по медиане crop, headline ограничен `text-overflow`.

## Финальная оценка

Блок остается интерактивным и пригодным для live-обновления headline. Финальная метрика `layout-final.png`: `avgRgbDelta 9.793`, `changedRatio 0.1597`. Основной diff связан с шрифтом живого текста и с тем, что фон воспроизведен CSS, а не crop-фрагментом.
