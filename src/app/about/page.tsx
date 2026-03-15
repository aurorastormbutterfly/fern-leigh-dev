import styles from "./about.module.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.flipCardContainer}>
        <FlipCard
          title="Quality at Every Level"
          details={`The pursuit of quality forms a common thread linking each stage of my career. \n \n I began with a high-level focus on strategy and ISO 9001 compliance as a Quality Manager, before moving into Product Management to take a systems-level view of UAT, exploratory testing, and complex data queries. Now, as a Developer, I build quality directly into the architecture through unit, integration, and e2e tests within automated CI/CD pipelines. This journey also includes my work as a Technical Educator, designing and delivering formal training based on ISTQB and Software Tester standards. \n \n This varied experience provides a 360 degree view of quality. It allows me to indulge a genuine passion for deep analysis and improvement at every level, from high-level business operations to the granular details of system development.`}
          color="brightFern"
        />
        <FlipCard
          title="Purposeful Engineering"
          details={`I am driven by the technical challenge of creating clean, well-architected software that delights users and can be scaled and maintained with ease. My experience as a Consultant Engineer at Thoughtworks provided the opportunity to see Agile best practices and clean code principles applied across a range of tech stacks at enterprise and government level. This exposure to various tools and architectures provides the basis of knowledge I use to make informed technical decisions. \n \nAs a freelance consultant, I have honed my focus on user-centric software. I am a T-shaped engineer, balancing a strong foundation in backend development and infrastructure with a specialist focus on using frontend JavaScript and TypeScript frameworks to build intuitive user experiences. My interest in going deep on tools and best practices naturally led me into mentoring and training other developers, as I enjoy sharing the technical rigour required to build robust and sustainable systems.`}
          flipDirection="vertical"
          color="brightFern"
        />
        <FlipCard
          title="Accessibility & Inclusion"
          details={`Learning about accessibility and EDI went hand in hand with learning about myself. As a neurodivergent individual, I experience the world differently, which informs my commitment to building inclusive digital spaces. My time at Thoughtworks provided an environment where bringing our whole selves to work was encouraged, and this provided an avenue to discover my passion in this area, leading a major accessibility overhaul and contributing to UK EDI policy and working groups. \n \n I believe that advocacy is an ongoing process of creating environments where everyone can thrive. I was recently honoured by my colleagues with an award for championing EDI, a recognition I value deeply because it came from the peers I work alongside every day. For me, ethical tech, technical accessibility, and social equity are inseparable parts of the same goal: ensuring that the systems we build are truly open to everyone.
            `}
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
