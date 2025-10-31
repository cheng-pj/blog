import type { DefaultTheme } from 'vitepress'

// 开发日志
export const DevLog: DefaultTheme.NavItemWithLink[] = [
  { text: 'log', link: '/src/dev-log/' },
  { text: 'dayjs', link: '/src/dev-log/dayjs' },
  { text: 'eChart', link: '/src/dev-log/echart' },
  { text: '响应式布局', link: '/src/dev-log/响应式布局方案' },
  { text: 'element-ui', link: '/src/dev-log/element-ui' },
]

export const CssTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'css-tutorial', link: '/src/css-tutorial/' },
]

export const JsTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'js-tutorial', link: '/src/js-tutorial/' },
]
