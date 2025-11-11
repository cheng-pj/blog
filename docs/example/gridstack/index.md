---
title: grid stack
---

# grid stack 网格布局demo
该案例全部基于 vue3 开发

## 在线案例
::: demo
  <GridLayout/>
:::

::: details 点击查看代码
<<< ./components/GridLayout.vue
:::

```js
function addEvents(grid, id) {
  let g = (id !== undefined ? 'grid' + id : '')
  
  grid.on('added removed change', function (event, items) {
    let str = ''
    items.forEach(function (item) {
      str += ' (' + item.x + ',' + item.y + ' ' + item.w + 'x' + item.h + ')'
    })
    console.log((g || items[0].grid.opts.id) + ' ' + event.type + ' ' + items.length + ' items (x,y w h):' + str)
  })
  grid.on('enable', function (event) {
    let el = event.target
    console.log((g || el.gridstackNode.grid.opts.id) + ' enable')
  })
  grid.on('disable', function (event) {
    let el = event.target
    console.log((g || el.gridstackNode.grid.opts.id) + ' disable')
  })
  grid.on('dragstart', function (event, el) {
    let n = el.gridstackNode
    let x = el.getAttribute('gs-x') // verify node (easiest) and attr are the same
    let y = el.getAttribute('gs-y')
    console.log((g || el.gridstackNode.grid.opts.id) + ' dragstart ' + (n.content || '') + ' pos: (' + n.x + ',' + n.y + ') = (' + x + ',' + y + ')')
  })
  grid.on('drag', function (event, el) {
    let n = el.gridstackNode
    let x = el.getAttribute('gs-x') // verify node (easiest) and attr are the same
    let y = el.getAttribute('gs-y')
    console.log((g || el.gridstackNode.grid.opts.id) + ' drag ' + (n.content || '') + ' pos: (' + n.x + ',' + n.y + ') = (' + x + ',' + y + ')');
  })
  grid.on('dragstop', function (event, el) {
    let n = el.gridstackNode
    let x = el.getAttribute('gs-x') // verify node (easiest) and attr are the same
    let y = el.getAttribute('gs-y')
    console.log((g || el.gridstackNode.grid.opts.id) + ' dragstop ' + (n.content || '') + ' pos: (' + n.x + ',' + n.y + ') = (' + x + ',' + y + ')')
  })
  grid.on('dropped', function (event, previousNode, newNode) {
    if (previousNode) {
      console.log((g || previousNode.grid.opts.id) + ' dropped - Removed widget from grid:', previousNode)
    }
    if (newNode) {
      console.log((g || newNode.grid.opts.id) + ' dropped - Added widget in grid:', newNode)
    }
  })
  grid.on('resizestart', function (event, el) {
    let n = el.gridstackNode
    let rec = el.getBoundingClientRect()
    console.log(`${g || el.gridstackNode.grid.opts.id} resizestart ${n.content || ''} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)
  })
  grid.on('resize', function (event, el) {
    let n = el.gridstackNode
    let rec = el.getBoundingClientRect()
    console.log(`${g || el.gridstackNode.grid.opts.id} resize ${n.content || ''} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)
  })
  grid.on('resizestop', function (event, el) {
    let n = el.gridstackNode
    let rec = el.getBoundingClientRect()
    console.log(`${g || el.gridstackNode.grid.opts.id} resizestop ${n.content || ''} size: (${n.w}x${n.h}) = (${Math.round(rec.width)}x${Math.round(rec.height)})px`)
  })
}
```

## 出现的问题

```
Cannot find module 'D:\Workspace\cpj_vite_press\node_modules\gridstack\dist\gridstack-engine' imported from D:\Workspace\cpj_vite_press\node_modules\gridstack\dist\gridstack.js
Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'D:\Workspace\cpj_vite_press\node_modules\gridstack\dist\gridstack-engine' imported from D:\Workspace\cpj_vite_press\node_modules\gridstack\dist\gridstack.js
    at finalizeResolution (node:internal/modules/esm/resolve:283:11)
    at moduleResolve (node:internal/modules/esm/resolve:952:10)
    at defaultResolve (node:internal/modules/esm/resolve:1188:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:708:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:657:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:640:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:264:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:168:49)
```

### 解决方案 1：配置您的 VitePress 项目以获得更好的兼容性

问题很可能是在 Vite 构建过程（VitePress 使用的）试图在它本不应该的 Node.js 上下文中处理 GridStack 文件。您可以配置 Vite 在其服务端渲染或构建时处理过程中忽略这些依赖。

在您的 Vite 配置文件（通常是 docs/.vitepress/config.ts 或 vite.config.ts）中添加或修改 ssr 配置：
```js {vite.config.ts}
// vite.config.ts 或 docs/.vitepress/config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ... 您现有的配置
  ssr: {
    // 将这些依赖标记为在 SSR 期间不进行处理
    noExternal: ['gridstack'] // 首先尝试包含 'gridstack'
    // 如果错误仍然存在，尝试使用替代方案：
    // noExternal: [] // 这将排除所有依赖项，使其不参与 SSR 处理。
  }
})
```

::: tip
这为什么有效：`ssr.noExternal` 配置告诉 Vite 不要尝试为服务端渲染捆绑某些包。这可以防止构建工具错误地尝试在 Node.js 环境中解析仅适用于浏览器的模块。
:::

### 解决方案 2：使用 TypeScript 验证模块解析（如果适用）

如果您正在使用 TypeScript，它的模块解析方式可能会加剧这个问题。您可以调整您的 `tsconfig.json` 以使用与 Vite 等构建工具工作方式更兼容的解析策略。

```json {tsconfig.json}
{
	"compilerOptions": {
		"moduleResolution": "bundler"
	}
}
```

::: tip
`bundler` 设置旨在模拟现代打包器（如 Vite）的模块解析行为，并且比 Node.js 的原生解析限制更少，这有助于避免此类路径问题。
:::

### 理解核心问题

- 环境不匹配：像 gridstack 这样的库主要是为浏览器构建的。当服务端工具（如 Vite 用于预渲染或优化的工具）尝试加载它们时，会使用 Node.js 的模块解析，这可能会导致某些文件引用失败。
- 模块系统：Node.js 从 CommonJS 向原生 ES 模块的转变引入了更严格的规则，例如在导入中需要显式的文件扩展名，而一些旧的包结构可能没有完全遵守这些规则。
