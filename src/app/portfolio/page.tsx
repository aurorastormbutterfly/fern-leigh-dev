import styles from "./portfolio.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import projectsData from "@/data/projects.json";

export default function Portfolio() {
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
