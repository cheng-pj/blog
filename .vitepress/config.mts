import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '穿靴子的猫',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/note/',
  srcDir: 'src',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '我的笔记' }
    ],
    
    sidebar: [
      {
        text: '笔记',
        items: [
          { text: '开发总结', link: '开发总结' },
          { text: 'js', link: 'JavaScript基础' },
          { text: 'HTML+CSS', link: 'HTML+CSS' },
          { text: 'Vue2', link: 'Vue2' },
          { text: 'Vue3', link: 'Vue3' },
          { text: 'jQuery', link: 'jQuery' },
          { text: 'Git', link: 'Git' },
          { text: '环境搭建', link: '环境搭建' },
          { text: '软件破解教程', link: '软件破解教程' },
          { text: '小程序', link: '小程序' },
          { text: 'Flutter', link: 'Flutter' },
          { text: 'Java 核心', link: 'Java 核心' },
          { text: 'Linux', link: 'Linux' },
          { text: 'Restful 文档', link: 'Restful 文档' },
          { text: '表格类工具', link: '表格类工具' },
          { text: 'MyBatis', link: 'MyBatis' },
          { text: 'Spring', link: 'Spring' },
          { text: '视频合并', link: '视频合并' }
        ]
      }
    ],
    
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
