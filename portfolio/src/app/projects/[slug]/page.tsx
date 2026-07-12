import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-6 pt-28">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        返回项目列表
      </Link>

      <article>
        {project.image ? (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="mb-8 aspect-video w-full rounded-xl bg-gradient-to-br from-primary/10 to-accent" />
        )}

        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <span className="shrink-0 text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <h2 className="mt-10 text-xl font-semibold">主要功能</h2>
          <ul className="mt-4 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold">技术栈</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
