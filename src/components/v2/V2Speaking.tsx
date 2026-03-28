import styles from "./V2Speaking.module.css";

const ITEMS = [
  {
    thumb: styles.thumbBlue,
    title: "Design Митап",
    date: "Апрель 2025",
    subtitle: "Внутренний митап центра компетенций дизайна Газпромнефть",
    body: "Рассказала про процесс обработки алмазного сырья и переложила его на процесс проектирования продуктов. Выделила схожие моменты и объяснила почему единый продуманный процесс важен в работе",
  },
  {
    thumb: styles.thumbPeach,
    title: "Young Design ‘24",
    date: "Октябрь-декабрь 2024",
    subtitle: "Федеральный конкурс молодежного дизайна и искусства",
    body: "Организовала проектную школу в рамках которой перед студентами стояла задача разработать мерч и сайт-визитку команды дизайна Газпром нефти. В течении трех месяцев менторила студентов и ревьюила их прогресс",
  },
  {
    thumb: styles.thumbPurple,
    title: "III Digital форум СмартДизайн",
    date: "Ноябрь 2024",
    subtitle:
      "Форум посвященный актуальным вопросам образования в сфере IT и дизайна, а также использованию искусственного интеллекта для разработки инновационных решений",
    body: "Организовала островок компании на котором можно было поучаствовать в различных активностях за победу в которых выдавались призы",
  },
  {
    thumb: styles.thumbGreen,
    title: "Креатон «Разработка приложения СмартДизайн»",
    date: "Май 2024",
    subtitle:
      "Креатон по разработке приложения для Лаборатории СмартДизайн совместно с компанией «Газпром нефть»",
    body: "Приняла участие в качестве ментора в креатоне для студентов с целью популяризации дизайн-системы Consta и освещения продуктового процесса. Вместе с другими коллегами-менторами помогала студентам в проектировании дизайна мобильного приложения для университета.",
  },
] as const;

export default function V2Speaking() {
  return (
    <section className={styles.section} aria-labelledby="v2-speaking-title">
      <h2 id="v2-speaking-title" className={styles.title}>
        Выступления и активности
      </h2>
      <div className={styles.list}>
        {ITEMS.map((item) => (
          <article key={item.title} className={styles.card}>
            <div
              className={`${styles.thumb} ${item.thumb}`}
              aria-hidden
            />
            <div className={styles.body}>
              <div>
                <div className={styles.rowTop}>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  <p className={styles.date}>{item.date}</p>
                </div>
                <p className={styles.subtitle}>{item.subtitle}</p>
              </div>
              <div className={styles.block}>
                <p className={styles.text}>{item.body}</p>
                <button type="button" className={styles.link}>
                  Анонс
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
