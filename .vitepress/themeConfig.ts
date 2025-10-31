import { type DefaultTheme, defineAdditionalConfig } from 'vitepress'
// 开发日志
const DevLog: DefaultTheme.NavItemWithLink[] = [
  { text: 'log', link: '/dev-log/' },
  { text: 'dayjs', link: '/dev-log/dayjs' },
  { text: 'eChart', link: '/dev-log/echart' },
  { text: '响应式布局', link: '/dev-log/响应式布局方案' },
  { text: 'element-ui', link: '/dev-log/element-ui' },
]

const CssTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'css-tutorial', link: '/css-tutorial/' },
]

const JsTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'js-tutorial', link: '/js-tutorial/' },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'DevLog',
    items: DevLog,
  },
  {
    text: 'CssTutorial',
    items: CssTutorial,
    activeMatch: '^/css-tutorial/'
  },
  {
    text: 'JsTutorial',
    items: JsTutorial,
    activeMatch: '^/js-tutorial/'
  }
]

export const SidebarDevLog: DefaultTheme.SidebarItem[] = [
  {
    text: 'DevLog',
    items: DevLog
  },
  {
    text: 'CssTutorial',
    items: CssTutorial
  }
]

export const SidebarCssTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'CssTutorial',
    items: CssTutorial
  }
]

export const SidebarJsTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'JsTutorial',
    items: JsTutorial
  }
]
