import { type DefaultTheme, defineAdditionalConfig } from 'vitepress'
// 开发日志
const DevLog: DefaultTheme.NavItemWithLink[] = [
  { text: 'log', link: '/docs/dev-log/' },
  { text: 'dayjs', link: '/docs/dev-log/dayjs' },
  { text: 'eChart', link: '/docs/dev-log/echart' },
  { text: '响应式布局', link: '/docs/dev-log/响应式布局方案' },
  { text: 'element-ui', link: '/docs/dev-log/element-ui' },
]

const CssTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'css-tutorial', link: '/docs/css-tutorial/' },
]

const JsTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'js-tutorial', link: '/docs/js-tutorial/' },
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
