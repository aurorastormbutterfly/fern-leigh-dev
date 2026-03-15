import styles from "./about.module.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.flipCardContainer}>
        <FlipCard
          title="QA & Automation"
          details={`Quality is the common thread in my career path. As a Quality Manager, I focused on high-level strategy and ISO 9001 compliance. Moving into Product Management, I took a systems-level view by handling UAT, exploratory testing, and complex data queries. Now, as a Developer, I build quality directly into the architecture through unit, integration, and e2e tests within automated CI/CD pipelines. \n \n I find real satisfaction in this kind of deep analysis. Having worked across processes, systems, and functions gives me a 360-degree perspective that allows me to consider every angle. My goal is always to help make things the best they can possibly be.`}
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
