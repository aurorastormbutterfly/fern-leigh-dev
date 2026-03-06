import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>Full-stack Software Engineer & Accessibility Expert</h2>
      <p>
        I am a software engineer with significant experience across the full
        technology stack. My expertise in building accessible frontend
        applications with React and Next.js is paired with proficiency in
        backend languages including JavaScript/TypScript, Java, and Clojure. I
        have worked across a range of architectures, from microservices to
        event-driven systems, to deliver inclusive software that scales.
      </p>
      <p>
        My approach to software is shaped by a 1st Class Honours degree in
        Philosophy. This academic foundation in formal logic and critical
        thinking allows me to break down complex architectural problems with
        precision. I have applied this mindset within high-growth startups and
        at Thoughtworks, where I acted as an internal consultant for
        accessibility and helped shape disability inclusion policies. Most
        recently, I turned my attention to technical education, designing
        curricula that helped Level 4 apprentices achieve Distinction grades.
      </p>
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
