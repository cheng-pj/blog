import { type DefaultTheme } from 'vitepress'

const Example: DefaultTheme.NavItemWithLink[] = [
  { text: 'Demo', link: '/docs/example/demo/index.md' },
  { text: '时间日期', link: '/docs/example/dayjs/index.md' },
  { text: '图表', link: '/docs/example/charts/index.md' },
  { text: 'Element UI', link: '/docs/example/element-ui/index.md' },
  { text: 'HTML+CSS', link: '/docs/example/css/index.md' },
  { text: 'JavaScript', link: '/docs/example/javascript/index.md' }
]

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.Sidebar = {
  '/docs/example/': [
    {
      text: '演示',
      items: Example
    }
  ]
}

// export const Sidebar: DefaultTheme.Sidebar = [
//   {
//     text: '演示',
//     collapsed: true,
//     items: Example
//   }
// ]


/**
 * 导航栏
 */
export const Nav: DefaultTheme.NavItem[] = [
  {
    text: '演示',
    items: Example
  }
]
