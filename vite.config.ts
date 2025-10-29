import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
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
    Components({
      dirs: [
        '.vitepress/theme/components'
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/
      ]
    }),
    groupIconVitePlugin({
      customIcon: {
        postcss: 'vscode-icons:file-type-postcss'
      }
    }),
    AutoImport({
      imports: ['vue'],
      // 设置为在'src/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
      dts: 'src/auto-import.d.ts',
      // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
      eslintrc: {
        enabled: true
      }
    })
  ]
})
