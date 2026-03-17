"use client";

import React, { useState, useEffect } from "react";
import styles from "./FlipCard.module.scss";

interface FlipCardProps {
  title: string;
  details: string;
  flipDirection?: "horizontal" | "vertical";
  color?: "brightFern" | "brightRust";
  type?: "long" | "regular";
  image?: {
    src: string;
    alt: string;
  };
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  details,
  flipDirection = "horizontal",
  color = "brightFern",
  type = "regular",
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => {
      setReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`${styles.flipCardContainer} ${styles[color]} ${styles[type]}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-live="polite"
    >
      <div
        className={`${styles.flipCard} ${styles[flipDirection]} ${styles[color]} ${styles[type]}`}
        onClick={handleClick}
        role="button"
      >
        <div
          className={`${styles.flipCardInner} ${isFlipped && !reduceMotion ? styles.isFlipped : ""}`}
        >
          <div className={styles.flipCardFront} aria-hidden={isFlipped}>
            <h2>{title}</h2>
          </div>
          <div className={styles.flipCardBack} aria-hidden={!isFlipped}>
            <div className={styles.flipCardBackContent}>
              {image && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.flipCardBackImage}
                />
              )}
              <p style={{ whiteSpace: "pre-line" }}>{details}</p>
            </div>
          </div>
        </div>
      </div>
      <img src="/fern-leaf.svg" className={styles.vine1} alt="" />
      <img src="/fern-leaf.svg" className={styles.vine2} alt="" />
    </div>
  );
};

export default FlipCard;
