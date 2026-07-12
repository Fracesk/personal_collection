import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export function BlogCard({ title, description, date, slug, tags }: { title: string; description: string; date: string; slug: string; tags: string[] }) {
  return (<Link href={`/blog/${slug}`}><Card className="group h-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"><CardHeader><div className="flex items-center justify-between gap-2"><CardTitle className="text-lg">{title}</CardTitle><time className="shrink-0 text-xs text-muted-foreground">{date}</time></div><CardDescription className="mt-2 line-clamp-2">{description}</CardDescription></CardHeader><CardContent><div className="flex flex-wrap gap-2">{tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}</div></CardContent></Card></Link>);
}
