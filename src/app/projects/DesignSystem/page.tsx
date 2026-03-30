import Image from "next/image";
import Link from "next/link";
import ProjectCaseImageSlot from "@/components/project-case/ProjectCaseImageSlot";
import styles from "@/components/project-case/ProjectCasePage.module.css";

export default function DesignSystemPage() {
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
            <span className={styles.breadcrumbCurrent}>Consta</span>
          </nav>

          <header className={styles.hero}>
            <h1 className={styles.title}>Consta</h1>
            <p className={styles.period}>B2E продукт · 2022 — настоящее время</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О проекте</h2>
            <div className={styles.sectionText}>
              <p>
                Consta — дизайн-система компании «Газпром нефть». Она задаёт
                визуальный язык и набор компонентов для внутренних и внешних
                цифровых продуктов компании.
              </p>
              <p>
                Дизайн-система помогает командам быстрее собирать интерфейсы и
                держать продукты визуально согласованными.
              </p>
            </div>
            <div className={styles.imageLabel}>Общий вид дизайн-системы</div>
            <div className={styles.overviewImageWrap}>
              <Image
                src="/Consta.png"
                alt="Consta: обзор компонентов и стилей дизайн-системы"
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
                Без единой дизайн-системы интерфейсы разных продуктов
                расходятся по стилю и поведению: пользователям сложнее
                переключаться между системами, а командам — дольше проектировать
                и согласовывать решения.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Цель</h2>
            <div className={styles.sectionText}>
              <p>
                Дать единый набор принципов, токенов и компонентов, чтобы
                ускорить разработку и дать пользователям предсказуемый опыт во
                всех продуктах экосистемы.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Моя роль</h2>
            <div className={styles.sectionText}>
              <p>
                В рамках кейса описываю участие в развитии дизайн-системы
                (контент и иллюстрации на странице будут дополняться по мере
                готовности материалов).
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Решение</h2>
            <div className={styles.sectionText}>
              <p>
                Ниже — место для детального разбора: библиотеки компонентов,
                темизации, документации и примеров внедрения.
              </p>
            </div>
            <ProjectCaseImageSlot
              label="Компоненты и документация"
              imageSrc="/DesignSystem-Main.png"
              imageAlt="Библиотека компонентов Consta"
              imageWidth={1920}
              imageHeight={1080}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Результат</h2>
            <div className={styles.sectionText}>
              <p>
                Раздел находится в разработке: здесь появятся итоги и метрики
                использования дизайн-системы в продуктах компании.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
