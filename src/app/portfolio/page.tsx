import styles from "./portfolio.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { db } from "@/lib/firebase/firebaseAdmin";

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
      <h3>Projects</h3>
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
