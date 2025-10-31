import { type DefaultTheme } from 'vitepress'

const Inbox: DefaultTheme.NavItemWithLink[] = [
  { text: 'Main', link: '/docs/main' },
  { text: 'Demo', link: '/docs/demo' },
  { text: '时间日期', link: '/docs/main/dayjs' },
  { text: '图表', link: '/docs/main/visual/index.md' },
  { text: '响应式布局', link: '/docs/main/响应式布局方案' },
  { text: 'Element UI', link: '/docs/main/element-ui' },
  { text: 'HTML+CSS', link: '/docs/css' },
  { text: 'JavaScript', link: '/docs/javascript' }
]

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.SidebarMulti = {
  '/docs/inbox/': [
    {
      text: '收件箱',
      items: Inbox
    }
  ]
}

/**
 * 导航栏
 */
export const Nav: DefaultTheme.NavItem[] = [
  {
    text: '收件箱',
    items: Inbox
  }
]
