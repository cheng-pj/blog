import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'cat',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/blog/',
  srcDir: 'doc',
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
    optimizeDeps: {
      exclude: [
        'vitepress'
      ]
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
          '../doc'
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
        dts: 'auto-import.d.ts',
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
