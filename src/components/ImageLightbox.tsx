"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ImageLightbox.module.css";

const DISPLAY_WIDTH = 672;
const DISPLAY_HEIGHT = 424;

type Props = {
  src: string;
  alt?: string;
};

export default function ImageLightbox({ src, alt }: Props) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
      return;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key === "Tab") {
        const overlay = overlayRef.current;
        if (!overlay) return;

        const focusable = overlay.querySelectorAll<HTMLElement>(
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

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
      >
        <span className={styles.srOnly}>Открыть изображение в полноэкранном режиме</span>
        <Image
          src={src}
          alt={alt ?? ""}
          className={styles.image}
          width={DISPLAY_WIDTH}
          height={DISPLAY_HEIGHT}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 672px, 672px"
        />
      </button>

      {open && (
        <div
          ref={overlayRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={alt || "Просмотр изображения"}
          tabIndex={-1}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.dialogContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setOpen(false)}
            >
              Закрыть
            </button>
            <Image
              src={src}
              alt={alt ?? ""}
              className={styles.fullImage}
              width={DISPLAY_WIDTH}
              height={DISPLAY_HEIGHT}
            />
          </div>
        </div>
      )}
    </>
  );
}
