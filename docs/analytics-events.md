# Analytics Events Map

Трекинг подключен в `src/components/AnalyticsEvents.tsx` и отправляется в:

- Google Analytics 4 через `gtag("event", ...)`
- Microsoft Clarity через `clarity("event", eventName)`

## События и параметры

| Event | Где срабатывает | Параметры |
| --- | --- | --- |
| `click_cv` | Клик по ссылке CV в `Header`, `V2Header`, `V2SiteBar` | `path`, `section`, `site_version`, `link_type="cv"`, `href` |
| `click_email` | Клик по `mailto:` в `Header`, `V2Header`, `V2SiteBar` | `path`, `section`, `site_version`, `link_type="email"`, `href` |
| `click_linkedin` | Клик по LinkedIn в `Header`, `V2Header`, `V2SiteBar` | `path`, `section`, `site_version`, `link_type="linkedin"`, `href` |
| `view_project` | Вход на страницы `/projects/*` | `project_slug`, `path`, `page_type="project_case"` |
| `scroll_50` | Первый раз при достижении 50% скролла на странице | `path`, `scroll_depth_percent=50`, `page_type` (`landing` или `project_case`) |
| `scroll_100` | Первый раз при достижении низа страницы (порог 99%) | `path`, `scroll_depth_percent=100`, `page_type` (`landing` или `project_case`) |
| `click_project_card` | Клик по кликабельной карточке проекта (`ProjectCard`, `V2ProjectsGrid`) | `path`, `project_slug`, `project_title`, `project_status`, `card_variant`, `href` |
| `hover_project_card` | Первое наведение мыши извне на карточку проекта | `path`, `project_slug`, `project_title`, `project_status`, `card_variant`, `href` (если есть) |

## Значения параметров

- `section`: `header` или `footer` (для `V2SiteBar`).
- `site_version`: `v1` или `v2`.
- `project_status`: `published` или `in_development`.
- `card_variant`: `v1` или `v2_grid`.
- `project_slug`: slug проекта из `src/data/projects.ts`.

## Как добавлять новые параметры без изменения обработчика

На любом элементе с `data-analytics-event` или `data-analytics-hover-event` можно добавить:

- `data-analytics-param-<NameInCamelCase>="value"`

Пример:

- `data-analytics-param-site-version="v2"` отправится как `site_version: "v2"`.
- `data-analytics-param-scroll-depth-percent="50"` отправится как число `scroll_depth_percent: 50`.
- `data-analytics-param-isFeatured="true"` отправится как `is_featured: true`.

Рекомендация: использовать осмысленные имена после префикса (`data-analytics-param-*`), ключи автоматически приводятся к `snake_case`.

## Важный нюанс по Clarity

Clarity получает только имя события (`clarity("event", eventName)`) без параметров.  
Параметры в таблице относятся к GA4.
