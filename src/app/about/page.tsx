import styles from "./about.module.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.flipCardContainer}>
        <FlipCard
          title="QA & Automation"
          details="Expert in React, Next.js, and building accessible user interfaces."
          color="brightFern"
        />
        <FlipCard
          title="Software Engineering"
          details="Proficient in JavaScript/TypeScript, Java, and Clojure."
          flipDirection="vertical"
          color="brightRust"
        />
        <FlipCard
          title="Accessibility & EDI"
          details="Internal consultant and policy shaper for disability inclusion."
          color="brightFern"
        />
      </div>
      <p>
        Outside of the IDE, I spent eighteen months on a sabbatical that tested
        my logistical limits. I hiked the Continental Divide Trail and renovated
        vintage RVs. These experiences required grit, planning, and hands-on
        mechanical problem-solving. I bring that same resilience to my
        engineering teams, seeking out environments that value technical quality
        and social responsibility.
      </p>
    </div>
  );
}
