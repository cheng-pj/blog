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

const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'DevLog',
    items: DevLog,
    activeMatch: '^/dev-log/'
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

const SidebarDevLog: DefaultTheme.SidebarItem[] = [
  {
    text: 'DevLog',
    items: DevLog
  },
  {
    text: 'CssTutorial',
    items: CssTutorial
  }
]

const SidebarCssTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'CssTutorial',
    items: CssTutorial
  }
]

const SidebarJsTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'JsTutorial',
    items: JsTutorial
  }
]

export default defineAdditionalConfig({
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: Nav,
    sidebar: {
      '/dev-log/': SidebarDevLog,
      '/css-tutorial/': SidebarCssTutorial,
      '/js-tutorial/': SidebarJsTutorial
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
