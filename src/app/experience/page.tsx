import type { Metadata } from "next";
import styles from "./experience.module.scss";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./data";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1>Professional Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      <div className={styles.actions}>
        <a href="/cv.pdf" className={styles.resumeBtn}>
          Download CV
        </a>
      </div>
    </div>
  );
}
