"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ImageLightbox.module.css";

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

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
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
          width={1920}
          height={1080}
        />
      </button>

      {open && (
        <div
          ref={overlayRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
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
              width={1920}
              height={1080}
            />
          </div>
        </div>
      )}
    </>
  );
}
