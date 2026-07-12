import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <HeroSection />
      <section className="px-6 py-20">
        <SectionTitle
          title="精选项目"
          subtitle="以下是我近期的一些代表作品"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
      </section>
    </div>
  );
}
