import styles from "./about.module.scss";
import FlipCard from "../../components/FlipCard/FlipCard";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am Fern Leigh Corcoran, a software developer dedicated to
        accessibility, ethical tech, and engineering excellence. Flip the cards
        to find out more about how I work and what I value.
      </p>

      <div className={styles.flipCardContainer}>
        <FlipCard
          title="Quality at Every Level"
          details={`I have a genuine passion for deep analysis and system-wide improvement. My career has evolved from managing high-level compliance to building quality directly into the code through unit, integration, and E2E testing. \n \n I don't just test; I advocate for quality at every stage. I bring a 360-degree perspective that values business strategy and user impact as much as technical excellence and architectural integrity`}
          color="brightFern"
          data-testid="quality"
        />
        <FlipCard
          title="Purposeful Engineering"
          details={`I am driven by creating clean, well-architected software that scales with ease. My consultant background in enterprise and government sectors has allowed me  to apply Agile and clean code principles across varied tech stacks. This exposure provides the insight and knowledge I use to make informed technical decisions. \n\nAs a T-shaped engineer, I balance a strong backend foundation with a specialist focus on intuitive frontend experiences using component-based architectures.  I am passionate about exploring emerging technologies and mentoring junior team members to help them grow.`}
          flipDirection="vertical"
          color="brightFern"
          data-testid="purpose"
        />
        <FlipCard
          title="Accessibility & Inclusion"
          details={`Learning about accessibility and EDI has gone hand-in-hand with learning about myself. As a neurodivergent engineer, I experience the world differently, which informs my commitment to building inclusive digital spaces. My consultancy background provided the platform to lead major accessibility overhauls and contribute to national EDI policy and working groups. \n\n I believe that technical accessibility, ethical tech, and social equity are inseparable parts of the same goal. For me, advocacy is about ensuring the systems we build are truly open to everyone and have a net positive impact on the world.`}
          color="brightFern"
          data-testid="accessibility"
        />
      </div>

      <FlipCard
        title="Outside the IDE"
        details="Outside of engineering, the mountains are my home. I love everything the outdoors has to offer, from the challenge of hiking and climbing to the rush of kayaking and windsurfing. My dog, Lily, is always by my side. In our quieter moments, when we aren't out exploring, she's usually curled up against me while I have my nose buried in a book."
        color="brightRust"
        type="long"
        image={{
          src: "/hiking.png",
          alt: "A watercolor style image of a woman and dog hiking in the mmountains, silhouetted against the setting sun ",
        }}
        data-testid="ide"
      />
    </div>
  );
}
