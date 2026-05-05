"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const CONSENT_KEY = "portfolio_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className={styles.banner} role="status" aria-live="polite">
      <p className={styles.text}>
        Я использую 🍪 для анализа посещаемости и улучшения сайта{" "}
        <Link href="/privacy" className={styles.moreLink}>
          Подробнее
        </Link>
      </p>
      <button type="button" className={styles.button} onClick={handleAccept}>
        Окей
      </button>
    </aside>
  );
}
