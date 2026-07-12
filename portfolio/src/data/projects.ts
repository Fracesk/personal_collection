export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  slug: string;
  year: string;
  image?: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "灵犀",
    description: "AI 驱动的创意作品管理与智能搜索平台",
    longDescription:
      "「灵犀」是一个基于 Spring Boot + Vue 3 的全栈创意作品管理平台。项目实现了用户认证、作品 CRUD、AI 智能搜索、报告生成等核心功能。采用 JWT 令牌保障 API 安全，MyBatis Plus 实现高效数据库操作，前端融合 Vue 3 响应式框架与 Axios 网络请求库。AI 搜索模块集成大语言模型接口，支持自然语言语义检索，让创作者在海量作品中快速找到灵感。",
    tags: ["Spring Boot", "Vue 3", "AI", "全栈"],
    slug: "lingxi-creative",
    year: "2026",
    image: "/images/lingxi-creative.png",
    features: [
      "AI 智能语义搜索，支持自然语言查询作品",
      "用户注册登录与 JWT 令牌认证",
      "创意作品完整 CRUD 管理（发布/编辑/删除）",
      "报告自动生成与导出功能",
      "MyBatis Plus 高效数据持久化",
      "前后端分离架构，RESTful API 设计",
    ],
    techStack: ["Spring Boot", "Vue 3", "MyBatis Plus", "MySQL", "JWT", "Axios", "Maven"],
  },
  {
    title: "云康",
    description: "全方位健康数据追踪与分析管理平台",
    longDescription:
      "「云康」是一个功能完备的健康管理系统，涵盖体征数据、饮食记录、运动追踪、睡眠分析和目标管理等核心模块。前端采用 Vue 2 + Element UI 构建专业后台界面，ECharts 实现体重趋势和热量平衡的可视化图表。支持健康评分算法自动评估每日健康状况、饮食摄入与运动消耗的卡路里计算、深度睡眠分析等专业功能。数据可一键导出为图片或 PDF 健康报告，适合个人健康管理和医疗辅助场景。",
    tags: ["Vue", "Element UI", "ECharts", "健康"],
    slug: "youkang-health",
    year: "2026",
    image: "/images/youkang-health.png",
    features: [
      "智能健康评分算法（综合睡眠/运动/饮食维度）",
      "体征数据管理（身高/体重/血压/血糖/胆固醇）",
      "饮食记录与卡路里追踪（内置食物数据库）",
      "睡眠记录分析（时长/质量评分/深度睡眠占比）",
      "运动记录与热量消耗计算",
      "减肥/增肌目标管理与进度追踪",
      "健康提醒管理（用药/健身提醒）",
      "数据可视化图表（ECharts）",
      "健康报告导出为图片或 PDF",
    ],
    techStack: ["Vue 2", "Element UI", "ECharts", "Axios", "HTML2Canvas", "jsPDF", "Sass"],
  },
  {
    title: "音爆",
    description: "AI 音轨分离与人声变声系统，基于 Demucs 深度学习模型",
    longDescription:
      "「音爆」是一款基于 Meta Research Demucs Hybrid Transformer 深度学习模型的 AI 音乐源分离系统，能将任意音乐精确分离为人声、鼓、贝斯、吉他、钢琴和其他伴奏 6 个独立音轨。采用 React 19 + TypeScript 构建现代化前端界面，结合 Ant Design 组件库和 ECharts 频谱可视化；Python FastAPI 后端驱动 Demucs 推理引擎。人声与伴奏分离相关系数低于 0.1，达到业界领先水平。支持音轨在线试听、变声效果处理和 WAV/MP3 导出。",
    tags: ["AI", "Demucs", "React", "FastAPI"],
    slug: "motone-audio",
    year: "2026",
    image: "/images/motone-audio.png",
    features: [
      "AI 六音轨分离：人声/鼓/贝斯/吉他/钢琴/其他伴奏",
      "基于 Demucs Hybrid Transformer 深度学习模型",
      "实时 12 平均律频谱可视化",
      "人声变声效果处理（多种音色变换）",
      "分离音轨在线试听播放",
      "WAV/MP3 音频导出",
      "相关系数 < 0.1，接近完美分离",
      "Electron 桌面应用支持",
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "Demucs", "React 19", "TypeScript", "Vite", "Ant Design", "Zustand", "Electron"],
  },
];
