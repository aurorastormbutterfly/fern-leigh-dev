import React from "react";
import Image from "next/image";
import styles from "./placeholder.module.scss";

const Placeholder = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.png"
        alt="logo showing words 'Fern Leigh Dev - QA & Automation | Software Dev | A11y SME'"
        width={383}
        height={112}
        className={styles.logo}
        priority
        unoptimized
      />
      <div className={styles.content}>
        <h1>Site currently undergoing redesign.</h1>
        <p>
          I am currently updating my portfolio to reflect recent projects in
          Software Development, QA, and Technical Consultancy.
        </p>
        <p>The full site will be back online shortly.</p>
        <div className={styles.buttons}>
          <a
            href="https://www.linkedin.com/in/fern-leigh-c-666b4657/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View LinkedIn Profile
          </a>
          <a href="mailto:fern.corcoran@gmail.com" className={styles.button}>
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
