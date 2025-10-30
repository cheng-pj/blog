import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

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
      dts: true,
      dirs: [
       'src'
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
})
