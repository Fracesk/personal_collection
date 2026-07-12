export interface BlogPost { title: string; description: string; date: string; slug: string; tags: string[]; content: string; }
export const blogPosts: BlogPost[] = [
{ title: "从零搭建现代前端工程化体系", description: "分享前端工程化体系建设经验", date: "2025-12-15", slug: "frontend-engineering", tags: ["前端","工程化"], content: "## 前言\n\n良好的工程化体系是保证项目质量和开发效率的关键。\n\n## 代码规范\n\n从 ESLint + Prettier 入手，配合 Husky 实现提交前自动检查。\n\n## 总结\n\n工程化体系需要持续迭代和完善。" },
{ title: "深入理解 React Server Components", description: "RSC 原理与最佳实践", date: "2025-11-20", slug: "react-server-components", tags: ["React","RSC","架构"], content: "## 什么是 Server Components\n\nRSC 允许组件在服务端渲染，减少客户端 JS 体积。\n\n## 核心优势\n\n- 更小的包体积\n- 直接访问数据源\n- 自动代码分割\n\n## 总结\n\nRSC 不是替代 CSR，而是互补。" },
{ title: "Tailwind CSS v4 新特性解读", description: "从配置驱动走向 CSS 原生驱动", date: "2025-10-08", slug: "tailwind-v4-new-features", tags: ["CSS","Tailwind","前端"], content: "## 主要变化\n\nTailwind CSS v4 完全重写了引擎。\n\n## 性能提升\n\n- 构建速度提升 10x+\n- 零配置即可使用\n\n## 迁移建议\n\n新项目直接使用 v4。" },
{ title: "2025 年前端状态管理方案对比", description: "Zustand、Jotai、Signals 如何选择？", date: "2025-09-15", slug: "state-management-2025", tags: ["前端","状态管理"], content: "## 主流方案\n\n| 方案 | 类型 | 适用场景 |\n|------|------|---------|\n| Zustand | 集中式 | 中小型项目 |\n| Jotai | 原子式 | 复杂状态 |\n| Signals | 响应式 | 高性能需求 |\n\n## 推荐\n\n大多数项目选 Zustand 最稳妥。" },
];
