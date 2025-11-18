# SvgIcon 使用
动态修改svg颜色

> 官方文档： https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md

安装 vite-plugin-svg-icons 插件

```shell
npm i vite-plugin-svg-icons -D
```
在vite配置文件中配置插件，特征：
- 预加载：在项目运行时就生成所有图标,只需操作一次 dom
-	高性能：内置缓存,仅当文件被修改时才会重新生成

```ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

plugins: [
  createSvgIconsPlugin({
    iconDirs: [
      path.resolve(process.cwd(), './src/assets/scanQrCodeOrder/goodsType'),
      path.resolve(process.cwd(), './src/assets/scanQrCodeOrder')
    ],
    symbolId: 'icon-[dir]-[name]'
  })
]
```

新建一个 SvgIcon 全局组件
```vue
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  
  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#333',
      },
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      return { symbolId }
    },
  })
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -3px;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

组件使用
```vue
<SvgIcon name="图标名称"/>
```

## 注意事项
下载的svg需要清理所有的文件内 `fill`、`stroke` 属性的默认颜色，设置为 `currentColor`
