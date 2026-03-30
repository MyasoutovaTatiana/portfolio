import Image from "next/image";
import Link from "next/link";
import ProjectCaseImageSlot from "@/components/project-case/ProjectCaseImageSlot";
import styles from "@/components/project-case/ProjectCasePage.module.css";

export default function ArcPage() {
  return (
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
            <span className={styles.breadcrumbCurrent}>profit architect</span>
          </nav>

          <header className={styles.hero}>
            <h1 className={styles.title}>profit architect</h1>
            <p className={styles.period}>B2C продукт · 2026</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О проекте</h2>
            <div className={styles.sectionText}>
              <p>
                Телеграм-бот для инвестиций в криптовалюты и заработка с
                реферальной программы.
              </p>
              <p>
                Продукт объединяет сценарии работы с портфелем и механики
                привлечения пользователей через реферальную программу.
              </p>
            </div>
            <div className={styles.imageLabel}>Общий вид продукта</div>
            <div className={styles.overviewImageWrap}>
              <Image
                src="/Arc.png"
                alt="profit architect: обзор интерфейса"
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
                Пользователям нужен простой и понятный сценарий в Telegram
                без перегруженных экранов, при этом важно прозрачно показывать
                риски и условия инвестиционных и реферальных механик.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Цель</h2>
            <div className={styles.sectionText}>
              <p>
                Спроектировать интерфейс бота и ключевые пользовательские флоу
                так, чтобы сценарии инвестиций и реферальной программы были
                понятны с первых шагов.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Моя роль</h2>
            <div className={styles.sectionText}>
              <p>
                Раздел будет дополнен описанием вашей роли и процесса работы над
                продуктом.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Решение</h2>
            <div className={styles.sectionText}>
              <p>
                Ниже — место для скриншотов ключевых сценариев и состояний бота.
              </p>
            </div>
            <ProjectCaseImageSlot
              label="Ключевые экраны"
              imageSrc="/profit-architect.png"
              imageAlt="Ключевые экраны Telegram-бота profit architect"
              imageWidth={1920}
              imageHeight={1080}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Результат</h2>
            <div className={styles.sectionText}>
              <p>
                Кейс в разработке: здесь появятся итоги и метрики после
                готовности материалов.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
