import styles from './portfolio.module.scss';

export default function Portfolio() {
  return (
    <section className={styles.gallery}>
      <h3>Projects</h3>
      <div className={styles.grid}>
        {/* Project Card Placeholder */}
        <div className={styles.card}>
          <div className={styles.thumbnail}>Image Placeholder</div>
          <h4>Mars Rover Kata</h4>
          <div className={styles.tags}>
            <span>Java</span><span>TypeScript</span>
          </div>
          <p>Problem/Solution summary placeholder.</p>
          <div className={styles.links}>
            <a href="#">Repo</a>
            <a href="#">Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
