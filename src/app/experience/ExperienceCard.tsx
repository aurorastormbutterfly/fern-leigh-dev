"use client";

import { useState, useId } from "react";
import styles from "./ExperienceCard.module.scss";

export interface ExperienceDetails {
  duties?: string[];
  projects?: string[];
  skills?: string[];
}

export interface ExperienceCardProps {
  company: string;
  location: string;
  role: string;
  duration: string;
  details: ExperienceDetails;
}

export default function ExperienceCard({
  company,
  location,
  role,
  duration,
  details,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={`${styles.cardWrapper} ${isOpen ? styles.open : ""}`}>
      <article className={styles.card}>
        <button
          className={styles.header}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <div className={styles.primaryInfo}>
            <h3 className={styles.role}>{role}</h3>
            <span className={styles.company}>
              {company} &bull; {location}
            </span>
          </div>
          <div className={styles.duration}>{duration}</div>
          <span className={styles.toggleIcon} aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div id={contentId} className={styles.detailsBody} hidden={!isOpen}>
          <div className={styles.detailsContent}>
            {details.duties && details.duties.length > 0 && (
              <section className={styles.section}>
                <h4>Key Duties</h4>
                <ul>
                  {details.duties.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            {details.projects && details.projects.length > 0 && (
              <section className={styles.section}>
                <h4>Projects</h4>
                <ul>
                  {details.projects.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            {details.skills && details.skills.length > 0 && (
              <section className={styles.section}>
                <h4>Technical Skills</h4>
                <ul className={styles.skillsList}>
                  {details.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
