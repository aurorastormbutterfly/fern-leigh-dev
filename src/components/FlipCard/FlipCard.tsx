"use client";

import React, { useState, useEffect } from "react";
import styles from "./FlipCard.module.scss";

interface FlipCardProps {
  title: string;
  details: React.ReactNode;
  flipDirection?: "horizontal" | "vertical";
  color?: "brightFern" | "brightRust";
  type?: "long" | "regular";
  image?: {
    src: string;
    alt: string;
  };
  "data-testid"?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  details,
  flipDirection = "horizontal",
  color = "brightFern",
  type = "regular",
  image,
  "data-testid": dataTestId,
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
      data-testid={dataTestId}
    >
      <div
        className={`${styles.flipCard} ${styles[flipDirection]} ${styles[color]} ${styles[type]}`}
        onClick={handleClick}
        role="button"
      >
        <div
          className={`${styles.flipCardInner} ${isFlipped && !reduceMotion ? styles.isFlipped : ""}`}
          data-testid={`${dataTestId}-inner`}
        >
          <div
            className={styles.flipCardFront}
            aria-hidden={isFlipped}
            data-testid={`${dataTestId}-front`}
          >
            <h2 data-testid={`${dataTestId}-title`}>{title}</h2>
          </div>
          <div
            className={styles.flipCardBack}
            aria-hidden={!isFlipped}
            data-testid={`${dataTestId}-back`}
          >
            <div
              className={styles.flipCardBackContent}
              data-testid={`${dataTestId}-details`}
            >
              {image && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.flipCardBackImage}
                />
              )}
              {typeof details === "string" ? (
                <p style={{ whiteSpace: "pre-line" }}>{details}</p>
              ) : (
                details
              )}
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
