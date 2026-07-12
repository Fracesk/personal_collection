import { BlogCard } from "@/components/blog-card";
import { SectionTitle } from "@/components/section-title";
import { blogPosts } from "@/data/blog";
export default function Blog() {
  return (<div className="px-6 pt-28"><SectionTitle title="个人博客" subtitle="记录技术与思考，分享学习心得" /><div className="grid gap-6 sm:grid-cols-2">{blogPosts.map(p => <BlogCard key={p.slug} title={p.title} description={p.description} date={p.date} slug={p.slug} tags={p.tags} />)}</div></div>);
}
