import { type DefaultTheme } from 'vitepress'

const Inbox: DefaultTheme.NavItemWithLink[] = [
  { text: 'Demo', link: '/docs/demo/index.md' },
  { text: '时间日期', link: '/docs/dayjs/index.md' },
  { text: '图表', link: '/docs/charts/index.md' },
  { text: 'Element UI', link: '/docs/element-ui/index.md' },
  { text: 'HTML+CSS', link: '/docs/css/index.md' },
  { text: 'JavaScript', link: '/docs/javascript/index.md' }
]

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.Sidebar = {
  '/docs/': [
    {
      text: '收件箱',
      collapsed: true,
      items: Inbox
    }
  ]
}

// export const Sidebar: DefaultTheme.Sidebar = [
//   {
//     text: '收件箱',
//     collapsed: true,
//     items: Inbox
//   },
//   {
//     text: '收件箱',
//     collapsed: true,
//     items: Inbox
//   }
// ]


/**
 * 导航栏
 */
export const Nav: DefaultTheme.NavItem[] = [
  {
    text: '收件箱',
    items: Inbox
  }
]
