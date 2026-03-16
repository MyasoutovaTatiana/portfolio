"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./YearReviewCarousel.module.css";

type CarouselImage = {
  src: string;
  alt: string;
};

const IMAGES: CarouselImage[] = [
  { src: "/year-review-1.jpg", alt: "Экран года в фактах" },
  { src: "/year-review-2.jpg", alt: "Экран с игровым животным пользователя" },
  { src: "/year-review-3.jpg", alt: "Экран с количеством использований функций" },
  { src: "/year-review-4.jpg", alt: "Экран с количеством копирований кода и наименования" },
  { src: "/year-review-5.jpg", alt: "Экран с количеством поисковых запросов" },
  { src: "/year-review-6.jpg", alt: "Экран благодарности и приглашения к опросу" },
  { src: "/year-review-7.jpg", alt: "Экран с глубиной просмотра результатов" },
  { src: "/year-review-8.jpg", alt: "Экран со звездой первой страницы" },
  { src: "/year-review-9.jpg", alt: "Экран с карточкой предсказания" },
  { src: "/year-review-10.jpg", alt: "Экран с визуализацией любимого класса материалов" },
];

export default function YearReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const showPrev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  }, []);

  const showNext = useCallback(() => {
    setIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  const current = IMAGES[index];

  useEffect(() => {
    if (!open) {
      if (lastFocusedRef.current) {
        lastFocusedRef.current.focus();
      }
      return;
    }

    lastFocusedRef.current = document.activeElement as HTMLElement | null;

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      }
      if (event.key === "Tab") {
        const node = overlayRef.current;
        if (!node) return;
        const focusable = node.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, showNext, showPrev]);

  return (
    <>
      <div
        className={styles.root}
        aria-roledescription="carousel"
        aria-live="polite"
        aria-label={`Экран ${index + 1} из ${IMAGES.length}`}
      >
        <button
          type="button"
          className={styles.frameButton}
          onClick={() => setOpen(true)}
          aria-label="Открыть галерею экранов статистики"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            className={styles.image}
            width={672}
            height={424}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 672px, 672px"
          />
        </button>

        <button
          type="button"
          onClick={showPrev}
          className={styles.navButtonLeft}
          aria-label="Предыдущий экран статистики"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={showNext}
          className={styles.navButtonRight}
          aria-label="Следующий экран статистики"
        >
          ›
        </button>

        <div className={styles.dots} aria-hidden="true">
          {IMAGES.map((_, i) => (
            <span
              key={i}
              className={i === index ? styles.dotActive : styles.dot}
            />
          ))}
        </div>
      </div>

      {open && (
        <div
          ref={overlayRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          tabIndex={-1}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.overlayContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.overlayClose}
              onClick={() => setOpen(false)}
            >
              Закрыть
            </button>

            <button
              type="button"
              onClick={showPrev}
            className={styles.overlayNavLeft}
              aria-label="Предыдущий экран статистики"
            >
              ‹
            </button>

            <Image
              key={`overlay-${current.src}`}
              src={current.src}
              alt={current.alt}
              className={styles.overlayImage}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            <button
              type="button"
              onClick={showNext}
              className={styles.overlayNavRight}
              aria-label="Следующий экран статистики"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}


