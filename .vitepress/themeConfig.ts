import { type DefaultTheme } from 'vitepress'

const Inbox: DefaultTheme.NavItemWithLink[] = [
  { text: 'Main', link: '/docs/main' },
  { text: 'Demo', link: '/docs/demo' },
  { text: '时间日期', link: '/docs/main/time' },
  { text: '图表', link: '/docs/main/visual/index.md' },
  { text: '响应式布局', link: '/docs/main/响应式布局方案' },
  { text: 'Element UI', link: '/docs/main/element-ui' }
]

const CssTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'CSS', link: '/docs/css' }
]

const JsTutorial: DefaultTheme.NavItemWithLink[] = [
  { text: 'JavaScript', link: '/docs/javascript' }
]

export const SidebarDevLog: DefaultTheme.SidebarItem[] = [
  {
    text: '收件箱',
    items: Inbox
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

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.SidebarMulti = {
  '/docs/main/': SidebarDevLog,
  '/docs/css-tutorial/': SidebarCssTutorial,
  '/docs/js-tutorial/': SidebarJsTutorial
}

/**
 * 导航栏
 */
export const Nav: DefaultTheme.NavItem[] = [
  {
    text: '收件箱',
    items: Inbox
  },
  {
    text: 'CssTutorial',
    items: CssTutorial,
    activeMatch: '^/css/'
  },
  {
    text: 'JsTutorial',
    items: JsTutorial,
    activeMatch: '^/javascript/'
  }
]
