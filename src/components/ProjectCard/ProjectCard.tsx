import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  tags: string[];
  summary: string;
  repoLink?: string;
  demoLink?: string;
  thumbnailText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  tags,
  summary,
  repoLink,
  demoLink,
  thumbnailText = "Image Placeholder",
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          thumbnailText
        )}
      </div>
      <h4>{title}</h4>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{summary}</p>
      <div className={styles.links}>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
