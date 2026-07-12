export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Prompt Engineering 入门：Few-Shot 与思维链实战指南",
    description:
      "从零掌握 Prompt Engineering 两大核心技巧，附 LangChain + 阿里云千问模型完整代码示例。",
    date: "2026-07-10",
    slug: "prompt-engineering-basics",
    tags: ["AI", "Prompt Engineering", "LangChain", "LLM"],
    content: `
📖 **阅读完整文章：** [Prompt Engineering 基础概念：Few-Shot 与思维链 - CSDN](https://blog.csdn.net/m0_74093303/article/details/162771164)
    `.trim(),
  },
];
