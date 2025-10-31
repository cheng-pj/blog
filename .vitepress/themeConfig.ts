import { type DefaultTheme } from 'vitepress'

const Inbox: DefaultTheme.NavItemWithLink[] = [
  { text: 'Demo', link: '/docs/inbox/demo/index.md' },
  { text: '时间日期', link: '/docs/inbox/dayjs/index.md' },
  { text: '图表', link: '/docs/inbox/charts/index.md' },
  { text: 'Element UI', link: '/docs/inbox/element-ui/index.md' },
  { text: 'HTML+CSS', link: '/docs/inbox/css/index.md' },
  { text: 'JavaScript', link: '/docs/inbox/javascript/index.md' }
]

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.Sidebar = {
  '/docs/inbox/': [
    {
      text: '收件箱',
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
