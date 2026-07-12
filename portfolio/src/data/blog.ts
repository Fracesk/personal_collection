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
    title: "从零搭建现代前端工程化体系",
    description:
      "分享我在实际项目中搭建前端工程化体系的经验，涵盖代码规范、构建工具、自动化测试等方面。",
    date: "2025-12-15",
    slug: "frontend-engineering",
    tags: ["前端", "工程化", "工具链"],
    content: `
## 前言

在前端项目规模不断增长的今天，良好的工程化体系是保证项目质量和开发效率的关键。

## 代码规范

首先从 ESLint + Prettier 入手，配合 Husky + lint-staged 实现提交前自动检查。

\`\`\`json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
\`\`\`

## 构建优化

使用 Vite 作为构建工具，配合 Rollup 插件实现代码分割和 Tree Shaking。

## 自动化测试

单元测试使用 Vitest，E2E 测试使用 Playwright，在 CI 流程中自动执行。

## 总结

一个好的工程化体系需要持续迭代和完善，建议根据团队实际情况逐步引入。
    `.trim(),
  },
  {
    title: "深入理解 React Server Components",
    description:
      "RSC 是 React 近年最重要的架构变革，本文深入分析其原理与最佳实践。",
    date: "2025-11-20",
    slug: "react-server-components",
    tags: ["React", "RSC", "架构"],
    content: `
## 什么是 Server Components

React Server Components (RSC) 允许组件在服务端渲染，减少客户端 JavaScript 体积。

## 核心优势

- **更小的包体积**：服务端组件不会打包到客户端
- **直接访问数据源**：无需 API 层即可读取数据库
- **自动代码分割**：按需加载客户端组件

## 使用建议

\`\`\`tsx
// 服务端组件 - 获取数据
async function PostList() {
  const posts = await db.post.findMany();
  return posts.map(post => <PostCard key={post.id} post={post} />);
}

// 客户端组件 - 交互
('use client');
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>❤️</button>;
}
\`\`\`

## 总结

RSC 不是替代 CSR，而是互补。合理搭配使用能发挥最大价值。
    `.trim(),
  },
  {
    title: "Tailwind CSS v4 新特性解读",
    description:
      "Tailwind CSS v4 带来了革命性变化，从配置驱动走向 CSS 原生驱动。",
    date: "2025-10-08",
    slug: "tailwind-v4-new-features",
    tags: ["CSS", "Tailwind", "前端"],
    content: `
## 主要变化

Tailwind CSS v4 完全重写了引擎，从 JavaScript 配置转向 CSS 原生配置。

\`\`\`css
/* 旧版 tailwind.config.js */
module.exports = {
  theme: {
    colors: { primary: '#3b82f6' }
  }
}

/* 新版 CSS 配置 */
@import "tailwindcss";
@theme {
  --color-primary: #3b82f6;
}
\`\`\`

## 性能提升

- 构建速度提升 10x+（Rust 引擎）
- 零配置即可使用
- 更小的产物体积

## 迁移建议

对于新项目直接使用 v4，旧项目建议使用 \`@tailwindcss/upgrade\` 工具迁移。
    `.trim(),
  },
  {
    title: "2025 年前端状态管理方案对比",
    description:
      "Zustand、Jotai、Valtio、Signals... 2025 年的状态管理生态如何选择？",
    date: "2025-09-15",
    slug: "state-management-2025",
    tags: ["前端", "状态管理", "架构"],
    content: `
## 主流方案

| 方案 | 类型 | 学习曲线 | 适用场景 |
|------|------|---------|---------|
| Zustand | 集中式 | 低 | 中小型项目 |
| Jotai | 原子式 | 中 | 复杂状态逻辑 |
| Signals | 响应式 | 中 | 高性能需求 |

## 我的推荐

对于大多数项目，**Zustand** 是最稳妥的选择——API 简洁、TypeScript 友好、包体积仅 1KB。

\`\`\`ts
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
\`\`\`
    `.trim(),
  },
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
