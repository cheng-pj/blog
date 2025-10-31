import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { CssTutorial, DevLog, JsTutorial } from './module'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'DevLog',
    items: DevLog,
    activeMatch: '^/dev-log/',
  },
  {
    text: 'CssTutorial',
    items: CssTutorial,
    activeMatch: '^/css-tutorial/',
  },
  {
    text: 'JsTutorial',
    items: JsTutorial,
    activeMatch: '^/js-tutorial/',
  },
]

const SidebarDevLog: DefaultTheme.SidebarItem[] = [
  {
    text: 'DevLog',
    items: DevLog,
  }
]

const SidebarCssTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'CssTutorial',
    items: CssTutorial,
  }
]

const SidebarJsTutorial: DefaultTheme.SidebarItem[] = [
  {
    text: 'JsTutorial',
    items: JsTutorial,
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'cat',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/note/',
  vite: {
    configFile: 'vite.config.ts'
  },
  markdown: {
    // 代码块高亮主题
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark',
    // },
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
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
    skipToContentLabel: '跳转到内容'
  }
})
