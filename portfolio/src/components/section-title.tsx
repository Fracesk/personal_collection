import { cn } from "@/lib/utils";
export function SectionTitle({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (<div className={cn("mb-12", className)}><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}</div>);
}
