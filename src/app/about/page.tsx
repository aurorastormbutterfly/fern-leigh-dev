import styles from "./about.module.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.flipCardContainer}>
        <FlipCard
          title="QA & Automation"
          details={`The pursuit of quality forms a common thread linking each stage of my career. \n \n I began with a high-level focus on strategy and ISO 9001 compliance as a Quality Manager, before moving into Product Management to take a systems-level view of UAT, exploratory testing, and complex data queries. Now, as a Developer, I build quality directly into the architecture through unit, integration, and e2e tests within automated CI/CD pipelines. This journey also includes my work as a Technical Educator, designing and delivering formal training based on ISTQB and Software Tester standards. \n \n This varied experience provides a 360 degree view of quality. It allows me to indulge a genuine passion for deep analysis and improvement at every level, from high-level business operations to the granular details of system development.`}
          color="brightFern"
        />
        <FlipCard
          title="Software Engineering"
          details="Proficient in JavaScript/TypeScript, Java, and Clojure."
          flipDirection="vertical"
          color="brightFern"
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
