import styles from "./portfolio.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { db } from "@/lib/firebase/firebaseAdmin";
import Link from "next/link";

interface ProjectData {
  title: string;
  tags: string[];
  summary: string;
  repoLink?: string;
  demoLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default async function Portfolio() {
  // Fetch the projects collection directly from Firestore
  const snapshot = await db.collection("projects").get();
  const projectsData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectData),
  }));

  return (
    <section className={styles.gallery}>
      <h1>Engineering Lab</h1>
      <div className={styles.prose}>
        <p>
          Much of my professional work is covered by NDAs, which limits what I
          can share directly. However, I&apos;m currently building an
          engineering lab to showcase my skills on a smaller scale. This lab
          will feature a variety of learning projects and code samples from
          courses I&apos;ve designed.
        </p>
        <p>
          I&apos;m in the process of consolidating projects from various GitLab
          and GitHub accounts that I&apos;ve used in different roles and
          locations, while also carefully checking licensing and IP agreements.
          New projects will be added regularly.
        </p>
        <p>
          For a centralised and up-to-date view of my work, please visit my new
          professional GitHub account, which will be my sole account going
          forward:{" "}
          <Link
            href="https://github.com/aurorastormbutterfly"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/aurorastormbutterfly
          </Link>
          .
        </p>
      </div>

      <div className={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tags={project.tags}
            summary={project.summary}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
