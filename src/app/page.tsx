import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Home | Fern Leigh Dev",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Hi, I'm Fern Leigh.</h1>
        <p className={styles.tagline}>
          QA & Automation | Senior Software Enineer | A11y SME
        </p>
        <p className={styles.bio}>
          I build robust, accessible, and highly tested web applications. With a
          dual background in software development and technical quality
          assurance, I bridge the gap between building fast and building right.
        </p>
      </section>

      {/* Dashboard / Bento Grid Section */}
      <section className={styles.bentoGrid}>
        {/* The NDA / Experience Card (Spans two columns on desktop) */}
        <div className={`${styles.card} ${styles.experience}`}>
          <h2>Enterprise Experience</h2>
          <p>
            My most impactful work is locked safely behind enterprise NDAs. I
            have spent my career building, testing, and scaling robust
            applications for complex domains, bridging the gap between rapid
            development and rigorous quality assurance.
          </p>
        </div>

        {/* The "Lab" Card for your smaller learning projects */}
        <div className={`${styles.card} ${styles.lab}`}>
          <h2>The Engineering Lab</h2>
          <p>
            A collection of side projects, experiments, and conceptual builds
            where I test new frameworks and A11y patterns.
          </p>
          <Link href="/portfolio" className={styles.link}>
            Explore the Lab &rarr;
          </Link>
        </div>

        <div className={`${styles.card} ${styles.skills}`}>
          <h2>Core Expertise</h2>
          <p>
            Full-stack development primarily in TypeScript, Node.js, and Java.
            Deep expertise in Next.js, React, test automation
            (Selenium/Cypress/Playwright), API and Contract testing, CI/CD
            pipelines, and web accessibility.
          </p>
        </div>

        <div className={`${styles.card} ${styles.blogTeaser}`}>
          <h2>Insights & Writing</h2>
          <p>
            Currently drafting thoughts on QA automation, CI/CD pipelines, and
            web accessibility. In the meantime, let's connect.
          </p>
          <a
            href="https://www.linkedin.com/in/fern-leigh-c-666b4657/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Find me on LinkedIn &rarr;
          </a>
        </div>

        <div className={`${styles.card} ${styles.github}`}>
          <h2>View the Source</h2>
          <p>
            The full code for this portfolio is open source. Check out the
            README for details on my engineering approach, including the CI/CD
            pipeline, unit and E2E tests, and accessibility considerations.
          </p>
          <a
            href="https://github.com/aurorastormbutterfly"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub Profile &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
