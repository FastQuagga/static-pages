# 06 System Cluster

- Размер: `176 x 72`.
- Source of truth: `reference/original.png`, скопирован из исходного crop без масштабирования.
- Назначение: системные действия topbar: fullscreen, язык, настройки.

## DOM-структура

```text
nav.system-cluster[data-component="system-cluster"]
  button.fullscreen-button[data-action="toggle-fullscreen"]
    img fullscreen
  button.language-button[data-action="open-language-menu"][data-language="en"] "EN"
  button.settings-button[data-action="open-settings"]
    img settings
```

Три зоны сделаны отдельными кнопками. Текст языка остается живым, чтобы локализация могла менять значение без замены картинки.

## Micro-crops

| Файл | x | y | w | h | Использование |
| --- | ---: | ---: | ---: | ---: | --- |
| `assets/micro-crops/fullscreen.png` | 17 | 21 | 32 | 31 | used in live layout |
| `assets/micro-crops/settings-gear.png` | 130 | 17 | 35 | 35 | used in live layout |

PNG используется только для сложных системных glyphs. `EN`, рамки и разделители собраны DOM/CSS.

## Итерации

- `v4-live-1`: перенесена v2 сетка `58/59/59`, добавлены `data-action` hooks.
- `v4-live-2`: текст языка оставлен live-DOM, вес и tracking ослаблены для лучшего совпадения с original crop.

## Финальная оценка

Блок готов как интерактивный системный nav. Расхождения с exact в основном идут от текста `EN` и CSS-фона; иконки остаются точными micro-crops.
