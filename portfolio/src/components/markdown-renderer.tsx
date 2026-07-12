export function MarkdownRenderer({ content }: { content: string }) {
  const blocks = parseMarkdown(content);
  return <div>{blocks.map((block, i) => {
    switch (block.type) {
      case "heading": return <h2 key={i} className="mt-10 mb-4 text-xl font-semibold tracking-tight">{block.content}</h2>;
      case "heading3": return <h3 key={i} className="mt-8 mb-3 text-lg font-semibold tracking-tight">{block.content}</h3>;
      case "paragraph": return <p key={i} className="my-4 leading-relaxed text-muted-foreground">{block.content}</p>;
      case "code": return <pre key={i} className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code>{block.content}</code></pre>;
      case "list": return <ul key={i} className="my-4 list-disc space-y-2 pl-6">{(block.content as string[]).map((item, ii) => <li key={ii} className="text-muted-foreground">{item}</li>)}</ul>;
      case "table": return <div key={i} className="my-6 overflow-x-auto"><table className="w-full border-collapse text-sm">{(block.headers && <thead><tr>{block.headers.map((h: string, hi: number) => <th key={hi} className="border border-border bg-muted px-4 py-2 text-left font-medium">{h}</th>)}</tr></thead>)}
          <tbody>{(block.rows as string[][]).map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci} className="border border-border px-4 py-2">{cell}</td>)}</tr>)}</tbody></table></div>;
      case "divider": return <hr key={i} className="my-8 border-border" />;
      default: return null;
    }
  })}</div>;
}
interface Block { type: string; content: string | string[] | string[][]; headers?: string[]; rows?: string[][] }
function parseMarkdown(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) { blocks.push({ type: "heading", content: line.slice(3) }); i++; continue; }
    if (line.startsWith("### ")) { blocks.push({ type: "heading3", content: line.slice(4) }); i++; continue; }
    if (line.startsWith("|")) {
      const tbl: string[] = []; while (i < lines.length && lines[i].startsWith("|")) tbl.push(lines[i++]);
      if (tbl.length >= 3) blocks.push({ type: "table", content: "", headers: tbl[0].split("|").filter(Boolean).map(h => h.trim()), rows: tbl.slice(2).filter(r => r.trim()).map(r => r.split("|").filter(Boolean).map(c => c.trim())) });
      continue;
    }
    if (line.startsWith("```")) {
      const code: string[] = []; i++; while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]); i++;
      blocks.push({ type: "code", content: code.join("\n") }); continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = []; while (i < lines.length && lines[i].startsWith("- ")) items.push(lines[i++].slice(2));
      blocks.push({ type: "list", content: items }); continue;
    }
    if (line.trim() === "---") { blocks.push({ type: "divider", content: "" }); i++; continue; }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].startsWith("- ") && !lines[i].startsWith("```") && !lines[i].startsWith("|") && lines[i].trim() !== "---") para.push(lines[i++]);
    blocks.push({ type: "paragraph", content: para.join(" ") });
  }
  return blocks;
}
