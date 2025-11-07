import { type DefaultTheme } from 'vitepress'

const Example: DefaultTheme.NavItemWithLink[] = [
  { text: '时间日期', link: '/docs/example/dayjs/index.md' },
  { text: '图表', link: '/docs/example/charts/index.md' },
  { text: 'Element UI', link: '/docs/example/element-ui/index.md' },
  { text: 'HTML+CSS', link: '/docs/example/css/index.md' },
  { text: 'JavaScript', link: '/docs/example/javascript/index.md' }
]

const Note: DefaultTheme.NavItemWithLink[] = [
  { text: '全部笔记', link: '/docs/note/mian.md' },
  { text: '样式类', link: '/docs/note/css.md' },
  { text: 'Element UI', link: '/docs/note/响应式布局方案.md' },
]

/**
 * 侧边栏
 */
export const Sidebar: DefaultTheme.Sidebar = {
  '/docs/example/': [
    {
      text: '演示案例',
      link: '/docs/example/',
      items: Example
    }
  ],
  '/docs/note/': [
    {
      text: '存档',
      items: Note
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
  },
  {
    text: '存档',
    items: Note
  }
]
