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
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
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
})
