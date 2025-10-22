import type { DefaultTheme } from 'vitepress'

// 开发日志
export const DevLog: DefaultTheme.NavItemWithLink[] = [
  { text: 'log', link: '/dev-log/' },
  { text: 'dayjs', link: '/dev-log/dayjs' },
  { text: 'eChart', link: '/dev-log/echart' },
  { text: '响应式布局', link: '/dev-log/响应式布局方案' },
]

export const CssTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'css-tutorial', link: '/css-tutorial/' },
]

export const JsTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'js-tutorial', link: '/js-tutorial/' },
]
