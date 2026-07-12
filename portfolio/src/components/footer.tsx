import Link from "next/link";
export function Footer() {
  return (<footer className="border-t border-border"><div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row"><p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} 王梓杰</p><div className="flex items-center gap-4"><Link href="https://github.com/Fracesk" target="_blank" className="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</Link><Link href="mailto:wzj@example.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">邮箱</Link></div></div></footer>);
}
