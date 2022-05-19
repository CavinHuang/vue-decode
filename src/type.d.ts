// 事件
interface Emit {
  name: string;
  notes?: string;
}

// 参数
export interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  notes?: string;
}

// ref 可调用方法
export interface Method {
  name: string;
  // 描述
  desc: string;
  // 参数
  params?: Prop[];
  // {name: string, age: number}
  return?: string;
}

export interface Slot {
  name: string;
  desc: string;
  params?: string[];
}

export interface RenderData {
  name: string;
  props?: {
    h3: string;
    table: {
      headers: string[];
      rows: Array[keyof Prop];
    };
  };
  emits?: {
    h3: string;
    table: {
      headers: string[];
      rows: Array[keyof Emit];
    };
  };
  methods?: {
    h3: string;
    table: {
      headers: string[];
      rows: Array[keyof Emit];
    };
  };
  slots?: {
    h3: string;
    table: {
      headers: string[];
      rows: Array[keyof Slot];
    };
  };
}

// 组件信息
export interface Component {
  name: string;
  emits?: Emit[];
  props?: Prop[];
  methods?: Method[];
  slots?: Slot[];
}

// 可自定义的配置
export interface CustomConfig {
  // 文档路由地址
  base: string;
  // 组件路径 相对于 src
  componentDir: string;
  // router实例名称
  vueRoute?: string;
  // 显示使用指南
  showUse?: boolean;
  // header
  header?: ConfigHeader;
}

interface ConfigHeader {
  // 网站header标题
  title?: string;
}

export interface Config extends CustomConfig {
  // 组件绝对路径
  root: string;
  // 组件正则匹配
  fileExp: RegExp;
  // 缓存路径
  cacheDir: string;
  // vite
  viteConfig?: UserConfig;
  // 模板路径
  templateDir?: string;
  // 用户项目地址
  userProjectDir: string;
}