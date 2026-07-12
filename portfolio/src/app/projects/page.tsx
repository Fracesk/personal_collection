import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="px-6 pt-28">
      <SectionTitle
        title="项目专栏"
        subtitle="这里展示了我的个人项目与实践经验"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            slug={project.slug}
            year={project.year}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
