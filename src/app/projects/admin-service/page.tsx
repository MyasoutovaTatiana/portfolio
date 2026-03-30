import Image from "next/image";
import Link from "next/link";
import ProjectCaseImageSlot from "@/components/project-case/ProjectCaseImageSlot";
import styles from "@/components/project-case/ProjectCasePage.module.css";

export default function AdminServicePage() {
  return (
    <>
      <main id="main-content" className={styles.page}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <nav className={styles.breadcrumbs}>
              <Link href="/" className={styles.breadcrumbMuted}>
                Главная
              </Link>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                ›
              </span>
              <span className={styles.breadcrumbCurrent}>
                Сервис администрирования
              </span>
            </nav>

            <header className={styles.hero}>
              <h1 className={styles.title}>Сервис администрирования</h1>
              <p className={styles.period}>B2E продукт · июль — сентябрь 2025</p>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>О проекте</h2>
              <div className={styles.sectionText}>
                <p>
                  Сервис администрирования — это единая точка управления
                  продуктами команды корпоративного поиска. Он объединяет
                  разрозненные админки разных сервисов в одном интерфейсе.
                </p>
                <p>
                  Ранее каждая система развивалась отдельно, со своей логикой
                  управления, хотя по сути админские сценарии дублировались.
                </p>
              </div>
              <div className={styles.imageLabel}>Общий вид сервиса администрирования</div>
              <div className={styles.overviewImageWrap}>
                <Image
                  src="/the-administration-system.png"
                  alt="Система администрирования: сетка сервисов и статусы узлов"
                  width={1024}
                  height={576}
                  sizes="(max-width: 1024px) calc(100vw - 108px), 889px"
                  className={styles.projectImage}
                  priority
                />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Проблема</h2>
              <div className={styles.sectionText}>
                <p>
                  В команде более 20 продуктов, и их количество растет.
                  Административные функции в них:
                </p>
                <ul>
                  <li>дублируются по смыслу</li>
                  <li>отличаются по интерфейсу и логике</li>
                  <li>разбросаны по разным системам</li>
                </ul>
                <p>В результате:</p>
                <ul>
                  <li>
                    пользователи тратят время на переключение между сервисами
                  </li>
                  <li>сложно быстро разобраться в новой админке</li>
                  <li>нет единого подхода к управлению</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Цель</h2>
              <div className={styles.sectionText}>
                <p>
                  Создать единый сервис администрирования, который позволит
                  управлять всеми продуктами из одной точки и сократит время на
                  выполнение административных задач.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Моя роль</h2>
              <div className={styles.sectionText}>
                <p>Я отвечала за проектирование пользовательского опыта и интерфейса:</p>
                <ul>
                  <li>продумала структуру и ключевые сценарии</li>
                  <li>перевела аналитическую модель в понятный UX</li>
                  <li>спроектировала флоу и состояния</li>
                  <li>подготовила макеты для разработки</li>
                </ul>
                <p>
                  Работала в связке с аналитиком, разработчиками и менеджером.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Процесс</h2>

              <h3 className={styles.subsectionTitle}>Исследование</h3>
              <div className={styles.sectionText}>
                <p>
                  Провела интервью с аналитиками, которые регулярно работают с
                  админками.
                </p>
                <p>
                  Выяснила, что основная боль — не сами действия, а переключение
                  между системами и необходимость каждый раз переучиваться.
                </p>
              </div>

              <h3 className={styles.subsectionTitle}>Гипотеза</h3>
              <div className={styles.sectionText}>
                <p>
                  Если объединить админские сценарии в одном сервисе с единым
                  UX, пользователям станет проще ориентироваться и быстрее
                  выполнять задачи.
                </p>
              </div>

              <h3 className={styles.subsectionTitle}>Проектирование</h3>
              <div className={styles.sectionText}>
                <p>
                  На основе структуры от аналитика собрала пользовательские
                  сценарии и упростила их:
                </p>
                <ul>
                  <li>убрала лишние шаги</li>
                  <li>выровняла логику действий</li>
                  <li>привела разные сущности к единой модели</li>
                </ul>
                <p>
                  Сфокусировалась на том, чтобы интерфейс был предсказуемым,
                  даже если пользователь работает с разными сервисами.
                </p>
              </div>
              <ProjectCaseImageSlot
                label="Результаты интервью с аналитиками"
                imageSrc="/info.jpg"
              />

              <h3 className={styles.subsectionTitle}>
                Прототипирование и тестирование
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Собрала прототипы ключевых сценариев и проверила их на
                  коллегах внутри команды.
                </p>
                <p>Исправила неочевидные переходы и перегруженные места.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Решение</h2>
              <div className={styles.sectionText}>
                <p>
                  Спроектировала единый интерфейс администрирования с понятной
                  структурой и повторяемыми паттернами.
                </p>
                <p>Ключевые вещи:</p>
                <ul>
                  <li>единая точка входа для всех сервисов</li>
                  <li>унифицированные сценарии управления</li>
                  <li>предсказуемая навигация между сущностями</li>
                </ul>
                <p>Проработала основные пользовательские флоу:</p>
                <ul>
                  <li>управление ролями</li>
                  <li>добавление и редактирование сущностей</li>
                  <li>переходы между сервисами</li>
                </ul>
                <p>Отдельно проработала состояния:</p>
                <ul>
                  <li>пустые экраны</li>
                  <li>ошибки</li>
                  <li>пограничные сценарии</li>
                </ul>
                <p>
                  Это позволило сделать интерфейс устойчивым и готовым к
                  масштабированию.
                </p>
              </div>
              <ProjectCaseImageSlot
                label="Единый интерфейс и навигация по сущностям"
                imageSrc="/design.jpg"
                imageAlt="Единый интерфейс и навигация по сущностям"
                imageWidth={2680}
                imageHeight={1680}
              />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Результат</h2>
              <div className={styles.sectionText}>
                <p>
                  Сервис внедрён и проходит тестирование на аналитиках команды
                  корпоративного поиска. Уже на этом этапе получена положительная
                  обратная связь.
                </p>
                <p>
                  Сократилось время на выполнение типовых административных задач
                  за счёт унификации сценариев и снижения количества переключений
                  между системами.
                </p>
                <p>
                  Снизилось количество ошибок при настройке прав — благодаря
                  более предсказуемой структуре и единым паттернам взаимодействия.
                </p>
                <p>
                  Пользователям стало проще ориентироваться в интерфейсе: новые
                  сценарии не требуют отдельного обучения, так как логика
                  действий повторяется между сервисами.
                </p>
                <p>
                  Подключение новых продуктов в систему упростилось — появился
                  единый подход к администрированию, который можно масштабировать.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
