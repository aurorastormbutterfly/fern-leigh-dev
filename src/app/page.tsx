import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to my Portfolio</h1>
        <p>Please explore the different sections of my portfolio to learn more about me and my work.</p>
      </section>
    </div>
  );
}