export interface Project { title: string; description: string; longDescription: string; tags: string[]; slug: string; year: string; features: string[]; techStack: string[]; }
export const projects: Project[] = [
{ title: "智能助手平台", description: "基于 AI 的智能对话系统", longDescription: "基于大语言模型构建的智能对话平台，支持多轮对话、上下文记忆、知识库 RAG 检索。", tags: ["React","Node.js","AI","RAG"], slug: "ai-assistant", year: "2025", features: ["多轮对话与上下文记忆","知识库文档检索","对话历史管理"], techStack: ["React","Tailwind CSS","Node.js","Python"] },
{ title: "电商管理后台", description: "全功能电商后台管理系统", longDescription: "面向中小商家的电商后台管理系统，包含商品、订单、用户管理、数据分析。", tags: ["Next.js","TypeScript","PostgreSQL","Prisma"], slug: "ecommerce-admin", year: "2024", features: ["商品管理","订单流转","权限控制","数据可视化"], techStack: ["Next.js","TypeScript","Prisma","PostgreSQL"] },
{ title: "实时协作白板", description: "支持多人实时协作的在线白板工具", longDescription: "基于 WebSocket 的实时协作白板，支持多人在线同时绘图、便签、流程图。", tags: ["WebSocket","Canvas","CRDT","React"], slug: "collaborative-whiteboard", year: "2024", features: ["多人实时同步","多样化工具","历史版本回溯"], techStack: ["React","Canvas API","WebSocket","Y.js"] },
{ title: "个人博客系统", description: "基于 MDX 的全栈博客系统", longDescription: "功能完整的个人博客系统，使用 MDX 编写内容，支持自定义主题、全文搜索。", tags: ["Next.js","MDX","ISR","Full-stack"], slug: "blog-system", year: "2023", features: ["MDX 内容管理","全文搜索","标签分类"], techStack: ["Next.js","MDX","Tailwind CSS","Vercel"] },
];
