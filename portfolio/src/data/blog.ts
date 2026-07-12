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
    title: "Prompt Engineering 基础概念：Few-Shot 与思维链",
    description:
      "通过 LangChain + DashScope (qwen3.5-plus) 实际代码示例，深入介绍 Few-Shot Prompting 和 Chain-of-Thought Prompting 两大核心概念。",
    date: "2026-07-10",
    slug: "prompt-engineering-basics",
    tags: ["AI", "Prompt Engineering", "LangChain", "LLM"],
    content: `
> 本文档通过 **LangChain + DashScope (qwen3.5-plus)** 的实际代码示例，介绍 Prompt Engineering 中两个核心概念：**Few-Shot Prompting** 和 **Chain-of-Thought Prompting**。

---

## 目录

1. [环境准备](#1-环境准备)
2. [Few-Shot Prompting（少样本提示）](#2-few-shot-prompting少样本提示)
3. [Chain-of-Thought Prompting（思维链提示）](#3-chain-of-thought-prompting思维链提示)
4. [对比实验：同样任务，不同策略的效果](#4-对比实验同样任务不同策略的效果)
5. [总结与参考](#5-总结与参考)

---

## 1. 环境准备

### 1.1 技术栈

| 组件 | 说明 |
|------|------|
| **LangChain** | LLM 调用框架，提供 Prompt 模板等工具 |
| **DashScope** | 阿里云模型服务（百炼平台），兼容 OpenAI API |
| **qwen3.5-plus** | 千问 3.5 Plus 模型，支持 1M 上下文 |
| **Python 3.13** | 运行环境 |

### 1.2 安装依赖

\`\`\`bash
pip install langchain langchain-openai langchain-core
\`\`\`

### 1.3 环境变量

需要提前在系统环境变量中设置：

\`\`\`
DASHSCOPE_API_KEY=你的阿里云百炼API密钥
\`\`\`

### 1.4 模型初始化

\`\`\`python
import os
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from langchain_core.prompts import FewShotPromptTemplate, PromptTemplate

llm = ChatOpenAI(
    model="qwen3.5-plus",
    api_key=os.environ["DASHSCOPE_API_KEY"],
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
    temperature=0.7,
)
\`\`\`

---

## 2. Few-Shot Prompting（少样本提示）

### 2.1 概念

**Few-Shot Prompting** 是指在 prompt 中给模型提供少量「输入 → 输出」示例（shots），让模型理解任务的格式和风格，然后对新输入做出类似的回答。

\`\`\`
示例 1: 苹果 → 水果，红色或绿色，脆甜
示例 2: 香蕉 → 水果，黄色，软糯
示例 3: 西兰花 → 蔬菜，绿色，像小树
新输入: 火龙果 → ?
模型输出: 水果，红色，多汁带籽
\`\`\`

**核心思想：** 不需要微调模型，纯靠上下文学习 (In-Context Learning) 就能让模型"照猫画虎"。

### 2.2 使用 LangChain 实现

LangChain 提供了 \`FewShotPromptTemplate\` 来优雅地组织示例：

\`\`\`python
few_shot_prompt = FewShotPromptTemplate(
    examples=[
        {"input": "苹果", "output": "水果，红色或绿色，脆甜"},
        {"input": "香蕉", "output": "水果，黄色，软糯"},
        {"input": "西兰花", "output": "蔬菜，绿色，像小树"},
    ],
    example_prompt=PromptTemplate(
        input_variables=["input", "output"],
        template="输入: {input}\\n输出: {output}",
    ),
    prefix="请根据以下示例，为给定的词语生成类似的定义：",
    suffix="输入: {input}\\n输出:",
    input_variables=["input"],
)

final_prompt = few_shot_prompt.format(input="火龙果")
response = llm.invoke([HumanMessage(content=final_prompt)])
print(response.content)
\`\`\`

模型成功学到了模式——用"类别，特征"的格式来描述新词。

---

## 3. Chain-of-Thought Prompting（思维链提示）

### 3.1 概念

**Chain-of-Thought (CoT)** 引导模型在给出最终答案之前，先展示一步步的推理过程。这就像做数学题时"写过程"一样，让模型的思考透明化。

\`\`\`
无 CoT:    输入: 2, 6, 18, 54, ?
          输出: 162

有 CoT:    输入: 2, 6, 18, 54, ? 让我们一步一步思考。
          输出: 6÷2=3, 18÷6=3, 54÷18=3, 所以是等比数列×3
              54×3=162，答案是162
\`\`\`

### 3.2 两种 CoT 方式

#### 方式一：零样本 CoT (Zero-shot CoT)

只需在 prompt 末尾加上 **"让我们一步一步思考"**（或英文 "Let's think step by step"），就能触发模型的推理链。

\`\`\`python
zero_shot_cot = """问题: 小明买了 5 个苹果，每个 3 元，又买了 2 个橙子，每个 4 元。
他一共花了多少钱？
让我们一步一步思考。"""

response = llm.invoke([HumanMessage(content=zero_shot_cot)])
\`\`\`

**运行结果：**

\`\`\`
1. 计算买苹果花的钱：
   小明买了 5 个苹果，每个 3 元。
   5 × 3 = 15 元
2. 计算买橙子花的钱：
   小明买了 2 个橙子，每个 4 元。
   2 × 4 = 8 元
3. 计算总共花的钱：
   15 + 8 = 23 元
答案：他一共花了 23 元。
\`\`\`

#### 方式二：少样本 CoT (Few-shot CoT)

给出**带有推理步骤的示例**，让模型学习"如何推理"：

\`\`\`python
few_shot_cot_prompt = """以下是一些数学问题的解答，展示了逐步推理过程：

问题: 一个矩形长 8 米，宽 5 米，它的面积是多少？
推理:
  1. 矩形的面积 = 长 x 宽
  2. 面积 = 8 x 5 = 40
答案: 40 平方米

问题: 商店上午卖出 15 件衣服，下午卖出的是上午的 2 倍还多 3 件。
今天一共卖出了多少件衣服？
推理:"""

response = llm.invoke([HumanMessage(content=few_shot_cot_prompt)])
\`\`\`

---

## 4. 对比实验：同样任务，不同策略的效果

用同一个数列推理任务 \`2, 6, 18, 54, ?\` 测试 4 种策略：

### 策略 A：直接提问（无策略）

模型直接给出答案 \`162\`（虽然也附带解释了规律，但未要求它推理）

### 策略 B：Few-Shot（给示例）

输出：\`答案是 162 (每次乘以 3)\` —— 简洁准确。

### 策略 C：Chain-of-Thought（触发推理）

\`\`\`
1. 观察相邻数字之间的关系
2. 计算倍数关系：6÷2=3, 18÷6=3, 54÷18=3
3. 确定规律：等比数列，每个数是前一个的 3 倍
4. 计算下一个数：54×3=162
下一个数是 162。
\`\`\`

推理过程完整透明，适合需要"可解释性"的场景。

### 策略 D：Few-Shot + CoT 结合（最强组合）

\`\`\`
推理：2x3=6, 6x3=18, 18x3=54, 54x3=162 答案：162
\`\`\`

同时具备 Few-Shot 的格式引导和 CoT 的推理链，效果最好。

### 对比总结

| 策略 | 准确率 | 可解释性 | 适用场景 |
|------|-------|---------|---------|
| 直接提问 | 高 | 差 | 简单问题 |
| Few-Shot | 高 | 差 | 格式任务 |
| CoT | 高 | 好 | 推理/数学/逻辑 |
| Few-Shot+CoT | 最高 | 最好 | 复杂推理任务 |

---

## 5. 总结与参考

### 核心要点

| 概念 | 一句话总结 | 适用场景 |
|------|-----------|----------|
| **Few-Shot Prompting** | 给示例，让模型照猫画虎 | 格式化输出、分类、翻译 |
| **Zero-shot CoT** | 加一句"让我们一步一步思考" | 数学、逻辑推理 |
| **Few-shot CoT** | 给带推理步骤的示例 | 复杂推理、多步计算 |

### 参考文档

- LangChain ChatOpenAI 集成：https://python.langchain.com/docs/integrations/chat/openai/
- LangChain FewShotPromptTemplate：https://python.langchain.com/docs/how_to/few_shot_examples/
- 阿里云百炼平台：https://help.aliyun.com/zh/model-studio/getting-started/
- Chain-of-Thought 论文 (Wei et al., 2022)：https://arxiv.org/abs/2201.11903
- Zero-shot CoT 论文 (Kojima et al., 2022)：https://arxiv.org/abs/2205.11916
- Few-Shot / In-Context Learning (Brown et al., 2020)：https://arxiv.org/abs/2005.14165
    `.trim(),
  },
];
