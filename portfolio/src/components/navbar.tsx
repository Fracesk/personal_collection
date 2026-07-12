"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
const navLinks = [{ href: "/", label: "首页" },{ href: "/projects", label: "项目" },{ href: "/blog", label: "博客" },{ href: "/about", label: "关于" }];
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (<header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"><Link href="/" className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80">王梓杰</Link><nav className="hidden items-center gap-1 md:flex">{navLinks.map(link => (<Link key={link.href} href={link.href} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}>{link.label}</Link>))}<ThemeToggle className="ml-2" /></nav><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="菜单">{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button></div></div>{isOpen && (<div className="border-t border-border bg-background md:hidden"><nav className="flex flex-col space-y-1 px-6 py-4">{navLinks.map(link => (<Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={cn("rounded-md px-3 py-2 text-sm font-medium transition-colors", pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}>{link.label}</Link>))}</nav></div>)}</header>);
}
