import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to my Portfolio</h1>
        <p>This sit is currently being updated - please check back soon for new content and features!</p>
      </section>
    </div>
  );
}