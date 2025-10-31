import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { Nav, Sidebar } from './themeConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'cat',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/blog/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: Nav,
    sidebar: Sidebar,
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
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true  // 所有图片自动懒加载
    },
    // 代码块高亮主题
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark',
    // },
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    ssr: {
      noExternal: ['element-plus'],
    },
    server: {
      hmr: {
        overlay: false
      }
    },
    plugins: [
      // 由于vite.themeConfig.ts 是被 .vitepress/themeConfig.ts 所包含，所以dirs的目录需要从config.ts中进行查找
      Components({
        dts: true,
        dirs: [
          '.vitepress/theme/components',
          'docs'
        ],
        include: [
          /\.vue$/,
          /\.vue\?vue/,
          /\.md$/
        ],
        resolvers: [
          ElementPlusResolver(),
        ],
      }),
      AutoImport({
        imports: ['vue'],
        dts: '../auto-import.d.ts',
        eslintrc: {
          enabled: true
        }
      }),
      groupIconVitePlugin({
        customIcon: {
          postcss: 'vscode-icons:file-type-postcss'
        }
      })
    ]
  }
})
