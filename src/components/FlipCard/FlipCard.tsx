'use client';

import React, { useState } from 'react';
import styles from './FlipCard.module.scss';

interface FlipCardProps {
  title: string;
  details: string;
  flipDirection?: 'horizontal' | 'vertical';
  color?: 'brightFern' | 'brightRust';
}

const FlipCard: React.FC<FlipCardProps> = ({ title, details, flipDirection = 'horizontal', color = 'brightFern' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.flipCardContainer} ${styles[color]}`} tabIndex={0}>
      <div className={`${styles.flipCard} ${styles[flipDirection]} ${styles[color]}`} onClick={handleClick}>
        <div className={`${styles.flipCardInner} ${isFlipped ? styles.isFlipped : ''}`}>
          <div className={styles.flipCardFront}>
            <h2>{title}</h2>
          </div>
          <div className={styles.flipCardBack}>
            <p>{details}</p>
          </div>
        </div>
      </div>
      <img src="/fern-leaf.svg" className={styles.vine1} alt="" />
      <img src="/fern-leaf.svg" className={styles.vine2} alt="" />
    </div>
  );
};

export default FlipCard;
