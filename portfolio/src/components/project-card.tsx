import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export function ProjectCard({ title, description, tags, slug, year }: { title: string; description: string; tags: string[]; slug: string; year: string }) {
  return (<Link href={`/projects/${slug}`}><Card className="group h-full cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"><div className="aspect-video w-full bg-gradient-to-br from-muted to-accent" /><CardHeader><div className="flex items-start justify-between gap-2"><CardTitle className="text-xl">{title}</CardTitle><span className="shrink-0 text-xs text-muted-foreground">{year}</span></div><CardDescription className="mt-2 line-clamp-2">{description}</CardDescription></CardHeader><CardFooter><div className="flex flex-wrap gap-2">{tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}</div></CardFooter></Card></Link>);
}
