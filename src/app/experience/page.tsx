import styles from './experience.module.scss';

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Professional Experience</h2>
      <a href="/resume.pdf" className={styles.resumeBtn}>Download CV</a>
    </div>
  );
}
