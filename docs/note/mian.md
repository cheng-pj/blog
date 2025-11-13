# 开发总结
## dom节点匹配替换

```javascript
let domStr = "<article><h1>21211109</h1>"
const arr = domStr.match(/>.*?</g)
for (const item of arr) {
    if (item !== '><') {
        let str = item.replace('109', `<span style="color: red;">109</span>`)
        domStr = domStr.replace(item, str)
    }
}
document.querySelector('.box').innerHTML = domStr
```

## ResizeObserver 监听窗口变化

```vue
<template>
  <div ref="resizeBox">
    <!-- 你的内容 -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        // 处理尺寸变化
        this.handleResize({ width, height });
      }
    });
    this.resizeObserver.observe(document.body);
  },
  beforeUnmount() {
    this.resizeObserver.unobserve(document.body);
    this.resizeObserver.disconnect();
  },
  methods: {
    handleResize(dimensions) {
      console.log('Size changed:', dimensions);
      // 这里处理尺寸变化后的逻辑
    },
  },
};
</script>
```

## 剔除空对象

```ts
export const filterForm = (form) => {
  const obj = {};
  Object.keys(form).forEach(ele => {
    if (!validatenull(form[ele])) {
      obj[ele] = form[ele]
    }
  });
  return obj
}

// 判断是否为空
export function validatenull(val) {
  if (typeof val === 'boolean') {
    return false;
  }
  if (typeof val === 'number') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') {
      return true;
    }
    return false;
  }
  return false;
}
```

## vue2 + monaco-editor 0.30版本

安装的版本

```cmd
npm install monaco-editor --save
npm install monaco-editor-nls --save
npm install monaco-editor-webpack-plugin --save
npm install monaco-editor-esm-webpack-plugin --save-dev
```

对应版本

```tsON [package.json]
{
	"dependencies": {
		"monaco-editor": "^0.30.1",
		"monaco-editor-nls": "^1.0.4",
		"monaco-editor-webpack-plugin": "^6.0.0"
	},
	"devDependencies": {
		"monaco-editor-esm-webpack-plugin": "^2.1.0"
	}
}
```

vue.config.js

```ts [vue.config.js]
const MonacoWebpackPlugin = require('monaco-editor-esm-webpack-plugin')

configureWebpack: {
  plugins: [new MonacoWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js/,
        enforce: 'pre',
        include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
        use: MonacoWebpackPlugin.loader
      }
    ]
  }
}
```

代码层

```ts
import { setLocaleData } from 'monaco-editor-nls'
import zh_CN from 'monaco-editor-nls/locale/zh-hans'
setLocaleData(zh_CN)
const monaco = require('monaco-editor/esm/vs/editor/editor.api')

// 语言先执行
this.$nextTick(() => {
  this.monacoEditor = monaco.editor.create(this.$refs['monacoEditorRef'])
})
```

## 图片复制

> 安装 `base64toblob` `dom-to-image-more` 插件

```ts
import base64toBlob from 'base64toblob'

/**
 * 复制图片
 * @param base64Code
 * @returns {Promise<void>}
 */
export const copyImg2Clipboard = async (base64Code) => {
  // 需要是blob数据格式
  const blob = base64toBlob(base64Code.replace(/^data:image\/\w+;base64,/, ''), 'image/png')

  // 使用剪切板API进行复制
  // eslint-disable-next-line no-undef
  const data = [new ClipboardItem({ [blob.type]: blob })]

  return navigator.clipboard.write(data)
}
```

调用

```ts
import domtoimage from 'dom-to-image-more'

module.exports = {
  /**
   * 复制图片
   */
  async copyPic() {
    try {
      const dom = document.getElementById('outputPic')
      
      this.copyPicLoading = true
      const base64Str = await domtoimage.toPng(dom, {
        style: {
          'background': '#ffffff'
        }
      })
      
      copyImg2Clipboard(base64Str).then(() => {
        this.copyPicLoading = false
        this.$message.success(this.$lang('复制成功'))
      }).catch(() => {
        this.copyPicLoading = false
        this.$message.error(this.$lang('复制失败，请重试！'))
      })
    } catch (e) {
      console.error('复制失败', e)
      this.copyPicLoading = false
    }
  },
  
  /**
   * 导出图片
   */
  exportPic() {
    this.exportPicLoading = true
    domtoimage.toPng(document.getElementById('outputPic'), {
      style: {
        'background': '#ffffff'
      }
    }).then(function (dataUrl) {
      window.saveAs(dataUrl, '文件名')
    }).catch(error => {
      this.$message.error('导出失败，请重试', error)
    }).finally(() => {
      this.exportPicLoading = false
    })
  }
}
```

## 批次请求

并发请求

```ts
try {
  // 获取所有的目录下路由
  const routerList = generateRoutes.map(item => {
    if (!excludeRoutes.includes(item.path)) {
      return {
        ...item,
        pagePath: encodeURI(`${vueRouterBase}${item.linkPath || item.path}`)
      }
    }
  })
  
  // 分组每份的个数
  const num = 6
  const result = new Array(Math.ceil(routerList.length / num)).fill('').map(_ => routerList.splice(0, num))
  
  // 轮询接口
  const apiList = []
  for await (const val of result) {
    // 返回每组接口的单个接口数据
    const promiseList = val.map(async item => {
      const res = await api.get(item.pagePath)
      return Promise.resolve({
        ...item,
        duration: res.config.headers.duration || 0,
        status: res.status || ''
      })
    })
    
    const res = await Promise.all(promiseList)
    
    res.forEach(i => {
      apiList.push(i)
    })
  }
  
  console.log(apiList)
} catch (e) {
  console.error(e)
}
```

## 轮播图

```html
<div style="display: flex; justify-content: center; overflow: hidden">
  <div class="swiper">
    <div class="go-left">
      <i class="iconfont icon-icon_arrow_left"></i>
    </div>
    <div class="go-right">
      <i class="iconfont icon-icon_arrow_right"></i>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="swiper-content">
          <div class="bg"></div>
          <div class="content">
            <img src="~assets/***.png" alt="">
            <p>{{ 11111 }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="swiper-content">
          <div class="bg"></div>
          <div class="content">
            <img src="~assets/***.png" alt="">
            <p>{{ 111111 }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="swiper-content">
          <div class="bg"></div>
          <div class="content">
            <img src="~assets/***.png" alt="">
            <p>{{ 11111 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```scss
.swiper {
  width: 1200px;
  padding: 80px 0 150px 0;
  margin: 0 auto;
  position: relative;

  .go-left, .go-right {
    i {
      font-size: 36px;
      transition: all .3s;

      &:hover {
        color: #e60012;
      }
    }
  }

  .go-left {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 35%;
    left: 0;
    z-index: 999;
  }

  .go-right {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 35%;
    right: 0;
    z-index: 999;
  }

  .swiper-slide {
    width: 680px;
    height: 300px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    &.swiper-slide-active {
      .swiper-content {
        opacity: 1;
      }
    }

    .swiper-content {
      width: 680px;
      height: 100%;
      opacity: 0.0000000000001;
      transition: all 0.5s cubic-bezier(.41, .85, .67, 1);

      .bg {
        width: 100%;
        height: 100%;
      }

      .content {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        padding: 38px 90px 0 90px;
        box-sizing: border-box;

        img {
          width: 37px;
          height: 35px;
        }

        P:nth-child(2) {
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 33px;
          text-align: center;
        }

        P:nth-child(3) {
          font-size: 16px;
          font-weight: 400;
          color: #949494;
          line-height: 22px;
          text-align: center;
          margin: 7px 0 32px 0;
        }

        P:nth-child(4) {
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
        }
      }
    }
  }
}
```

```ts
new Swiper('.swiper', {
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  autoplay: {
    delay: 3000,//1秒切换一次
  },
  navigation: {
    nextEl: ".go-left",
    prevEl: ".go-right",
  },
  on: {
    progress: function () {
      for (let i = 0; i < this.slides.length; i++) {
        let slide = this.slides.eq(i);
        let slideProgress = this.slides[i].progress;
        let modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        }
        let translate = slideProgress * modify * 435 + 'px';
        let scale = 1 - Math.abs(slideProgress) / 5;
        let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
        slide.css('zIndex', zIndex);
        slide.css('opacity', 1);
        if (Math.abs(slideProgress) > 3) {
          slide.css('opacity', 0);
        }
      }
    },
    setTransition: function (transition) {
      for (let i = 0; i < this.slides.length; i++) {
        let slide = this.slides.eq(i)
        slide.transition(transition);
      }
    }
  }
})
```

## 图片转file对象使用表单提交

```ts
async function submitMemo() {
  const formData = new FormData()
  
  // memo文件
  for (const item of this.listData) {
    const memoDom = document.getElementById(item.filename)
    // 获取blob
    const toBlob = await domtoimage.toBlob(memoDom, {
      style: { 'background': '#ffffff' }
    })
    // 将数据转文件对象
    const file = new File([toBlob], item.filename + '.png', { type: 'image/png' })
    formData.append('codFiles', file)
  }
  
  // 签名文件
  const signingBlobFile = await domtoimage.toBlob(document.getElementById('signingFile'), {
    style: { 'background': '#ffffff' },
    scale: 2
  })
  // 获取blob
  const file = new File([signingBlobFile], 'sign.png', { type: 'image/png' })
  formData.append('signFile', file)
  
  console.log(formData.getAll('codFiles'))
  
  try {
    const res = await this.COM_HTTP.reqMemo(formData)
    
    if (res.code === 1) {
      console.log(res.msg)
    } else {
      console.log(res.msg)
    }
  } catch (e) {
    console.error(e)
  }
}
```

## 调用office文档预览

```tex
https://view.officeapps.live.com/op/view.aspx?src=$e_url
```

## 元素在出现在页面中触发动作

```ts
this.$nextTick(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        // observer.unobserve(entry.target)
      }
    })
  }, {
    rootMargin: '-200px 0px',
    threshold: 1
  })

  observer.observe(document.getElementById('box'))
})
```

```html
<div id="test">
  <div>123</div>
  <div>123</div>
  <div>123</div>

  <div id="scrollArea" style="padding-top: 200px; background: #333333">
    <span style="color: #ffffff;">123</span>
    <div id="box" style="background: #c53a3a">
      <div>456456</div>
      <div>456456</div>
      <div>456456</div>
    </div>
  </div>
  <div >123</div>
</div>
```

```scss
#test {
  > div{
    width: 100px;
    height: 500px;
    background: linear-gradient(#e66465, #9198e5);
  }
}
```

## 进程终止

> 通过端口号查找PID

```cmd
netstat -ano | findstr :9900
```

> 终止PID进程

```cmd
taskkill /PID 22980 /F
```

## element ui 日期组件和dayjs搭配进行逻辑交互

```ts
import dayjs from 'dayjs'

/**
 * 获取周开始结束时间
 * 当element-ui；周选择器开始周为周一时调用此方法
 * @param maxLimit
 * @returns {{startTime: string, endTime: string}}
 */
export function getWeek(maxLimit = 0) {
  const currentTime = dayjs().add(maxLimit, 'day') // 默认当天
  
  let baseWeek
  // 为周日时
  if (dayjs(currentTime).day() === 0) {
    baseWeek = dayjs(currentTime).subtract(1, 'day').format('YYYY-MM-DD')
  }
  
  const startTime = dayjs(baseWeek).startOf('week').add(1, 'day').format('YYYY-MM-DD')
  let endTime = dayjs(baseWeek).endOf('week').add(1, 'day').format('YYYY-MM-DD')
  
  const diff = dayjs().add(maxLimit, 'day').diff(dayjs(endTime), 'day')
  if (diff <= 0) {
    endTime = dayjs().add(maxLimit, 'day').format('YYYY-MM-DD')
  }
  
  return { startTime, endTime }
}

/**
 * 获取月的开始时间和结束时间
 * @param maxLimit
 * @returns {{startTime: string, endTime: string}}
 */
export function getMonth(maxLimit) {
  const currentTime = dayjs(maxLimit)
  
  const startTime = dayjs(currentTime).startOf('month').format('YYYY-MM-DD')
  let endTime = dayjs(currentTime).endOf('month').format('YYYY-MM-DD')
  
  if (dayjs(endTime).isAfter(currentTime)) {
    endTime = currentTime.format('YYYY-MM-DD')
  }
  
  return { startTime, endTime }
}
```

## 数组进行分组

```ts
const records = [
  { 'name': '合计', 'parent': 'aaaaaa', 'count': 305 },
  { 'name': 'aaa', 'parent': 'aaaaaa', 'count': 287 },
  { 'name': '合计', 'parent': 'vvvv', 'count': 456 },
  { 'name': '里斯', 'parent': 'vvvv', 'count': 252 },
  { 'name': '合计', 'parent': 'bbbb', 'count': 9646 },
  { 'name': '张三', 'parent': 'bbbb', 'count': 8286 },
  { 'name': '合计', 'parent': 'ccccc', 'count': 254 },
  { 'name': '张三', 'parent': 'ccccc', 'count': 75 },
  { 'name': '合计',  'parent': '其他', 'count': 1966 },
]

const groupByTypeNameToArray = (records) => {
  const groupsMap =
    records.reduce((map, record) => {
      if (!map.has(record.parent)) {
        map.set(record.parent, {
          parent: record.parent,
          list: []
        })
      }
      map.get(record.parent).list.push(record)
      return map
    }, new Map())
  
  return Array.from(groupsMap.values())
}

console.log('按位置分组（数组形式）:', groupByTypeNameToArray(records))
```

## 树形结构数据精简

```ts
const originalData = {/*原始数据*/}

function simplifyTree(data) {
  return {
    name: data.name || '',
    menuUrl: data.menuUrl || '',
    routeName: data.routeName || '',
    children: data.children ? data.children.map(child => simplifyTree(child)) : []
  };
}

const simplifiedTree = originalData.map(child => simplifyTree(child))

console.log(simplifiedTree)
```

## 高斯双模糊效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  
  <style>
    .bg-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 0;
      min-width: 100%;
      overflow: hidden;
    }
    
    .bg {
      background: url("img.jpg") no-repeat;
      filter: blur(5px);
      transform: scale(1.1);
      background-size: cover;
      width: 100%;
      height: 100%;
    }
    
    .home-wrapper {
      box-sizing: border-box;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(10px);
      height: 300px;
      width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      border: 1px solid red;
    }
  </style>
</head>
<body>

<div>
  <div class="bg-wrapper">
    <div class="bg"></div>
  </div>
  <div class="home-wrapper">123123</div>
</div>
</body>
</html>
```

## 使用 `vue-charts` 在vue中处理legend状态时进行缓存

```javascript
// 1. 在组件中保存图例状态
export default {
  data() {
    return {
      legendSelected: {}
    }
  },

  // 2. 监听图例选择事件
  mounted() {
    const chart = this.$refs.chart.getEchartsInstance()
    chart.on('legendselectchanged', (params) => {
      this.legendSelected = params.selected
    })
  },

  // 3. 在 options 中使用保存的状态
  computed: {
    options() {
      return {
        legend: {
          selected: this.legendSelected
        }
        // ... 其他配置
      }
    }
  }
}
```

## el-form 数组校验

```vue

<template>
  <el-form :model="formData">
    <el-form-item prop="rules.0.val0" :rules="{ required: true, message: '必填', trigger: 'change' }">
      <el-input v-model.number="formData.rules[0].val0"/>
    </el-form-item>
    <el-form-item prop="rules.1.val1" :rules="{ required: true, message: '必填', trigger: 'change' }">
      <el-input v-model.number="formData.rules[1].val1"/>
    </el-form-item>
  </el-form>
</template>
```

```ts
export default {
  data() {
    return {
      formData: {
        rules: [
          { val0: '' },
          { val1: '' }
        ]
      }
    }
  }
}
```

## 根据时间获取周数
```js
/**
 * 出自element date-pick
 * getWeekNumber(new Date('2025-11-13'))
 * @param d {Date}
 * @returns {number|null}
 */
export const getWeekNumber = (d) => {
  if (!isDate(d)) return null
  const date = new Date(d.getTime())
  date.setHours(0, 0, 0, 0)
  // 本周的星期四决定一年。
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
  // 1 月 4 日总是在第 1 周。
  const week1 = new Date(date.getFullYear(), 0, 4)
  // 调整到第 1 周的星期四，并计算从日期到第 1 周的周数。
  // 对于夏令时来说，舍入应该没问题。它的轮班时间不应超过 12 小时。
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

const isDate = (date) => {
  if (date === null || date === undefined) return false
  if (isNaN(new Date(date).getTime())) return false
  if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
  return true
}
```
