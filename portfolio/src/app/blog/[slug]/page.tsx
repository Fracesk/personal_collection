import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import { MarkdownRenderer } from "@/components/markdown-renderer";
export async function generateStaticParams() { return blogPosts.map(p => ({ slug: p.slug })); }
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();
  return (<div className="px-6 pt-28"><Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="h-4 w-4" /> 返回博客列表</Link><article><header className="mb-8"><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1><div className="mt-4 flex flex-wrap items-center gap-4"><time className="text-sm text-muted-foreground">{post.date}</time><div className="flex flex-wrap gap-2">{post.tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}</div></div><p className="mt-4 text-lg text-muted-foreground">{post.description}</p></header><div><MarkdownRenderer content={post.content} /></div></article></div>);
}