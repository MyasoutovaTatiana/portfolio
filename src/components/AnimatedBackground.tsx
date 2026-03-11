"use client";

import { useEffect, useState } from "react";
import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const orb1Style = {
    transform: `translateX(${scrollY * 0.15}px)`,
  };

  const orb2Style = {
    transform: `translateX(${scrollY * -0.15}px)`,
  };

  return (
    <div className={styles.background}>
      <div className={styles.orbOne} style={orb1Style} />
      <div className={styles.orbTwo} style={orb2Style} />
    </div>
  );
}
