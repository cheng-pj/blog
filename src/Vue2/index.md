## vue生命周期

![vue生命周期图](images/lifecycle.png)

### created

> 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

### beforeDestroy

> 实例销毁之前调用。在这一步，实例仍然完全可用。

## vue-cli 3~

### 命令

> 卸载

```
npm uninstall vue-cli -g
```

> 安装

```
npm install -g @vue/cli
```

> 帮助

```cmd
vue -h
```

###  `.editorconfig` 文件配置Tab

```
root = true

[*]
charset = utf-8
indent_style = tab
indent_size = 4
tab_width = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

### 配置路由

> **man.js**

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'		// 引入路由

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,		// 添加路由组件
}).$mount('#app')
```

> **index.js**

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting 路由级代码拆分
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.	在访问路线时会被延迟加载。
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router;
```



### vue-cli-service serve

```text
用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```

>  `vue-cli-service serve` 命令会启动一个开发服务器 (基于 [webpack-dev-server](https://github.com/webpack/webpack-dev-server)) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

除了通过命令行参数，你也可以使用 `vue.config.js` 里的 [devServer](https://cli.vuejs.org/zh/config/#devserver) 字段配置开发服务器。

命令行参数 `[entry]` 将被指定为唯一入口，而非额外的追加入口。尝试使用 `[entry]` 覆盖 `config.pages` 中的 `entry` 将可能引发错误。

### vue-cli-service build

```text
用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

>  `vue-cli-service build` 会在 `dist/` 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。

这里还有一些有用的命令参数：

- `--modern` 使用[现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#现代模式)构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。
- `--target` 允许你将项目中的任何组件以一个库或 Web Components 组件的方式进行构建。更多细节请查阅[构建目标](https://cli.vuejs.org/zh/guide/build-targets.html)。
- `--report` 和 `--report-json` 会根据构建统计生成报告，它会帮助你分析包中包含的模块们的大小。



### vue.config.js

```js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    /**
	 * 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
	 * 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
	 */
    outputDir: 'dist',
    /**
	 * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	 */
    assetsDir: 'static',
    /**
	 * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	 */
    indexPath: 'index.html',
    /** 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
	 * 设为 false 来关闭文件名哈希
	 */
    filenameHashing: true,
    /** Type: Object
	 * Default: undefined
	 * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
	 * https://cli.vuejs.org/zh/config/#pages
	 */
    pages: undefined,
    /**
	 * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
	 * 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
	 * 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
	 * 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
	 */
    lintOnSave: false,
    /** 是否使用包含运行时编译器的 Vue 构建版本。
	 * 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
	 */
    runtimeCompiler: false,
    /**
	 * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
	 * 如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
	 */
    transpileDependencies: [],
    /**
	 * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	 */
    productionSourceMap: true,
    /**
	 * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
	 * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
	 */
    crossorigin: undefined,
    /** 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
	 * 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
	 * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
	 * 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
	 */
    integrity: false,
    // configureWebpack : Object | Function
    css: {
        /**
		 * 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 HTML+CSS Modules 模块。
		 * 设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 HTML+CSS Modules 模块。
		 */
        modules: false,
        /**
		 * Type: boolean | Object
		 * Default: 生产环境下是 true，开发环境下是 false
		 * 是否将组件中的 HTML+CSS 提取至一个独立的 HTML+CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
		 * https://cli.vuejs.org/zh/config/#css-extract
		 */
        extract: false,
        /**
		 * 是否为 HTML+CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
		 */
        sourceMap: false,
        /**
		 * 向 HTML+CSS 相关的 loader 传递选项。
		 */
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        },
        /**
		 * https://cli.vuejs.org/zh/config/#devserver-proxy
		 */
        devServer: {
            proxy: {
                // 指向开发环境 API 服务器的字符串
            }
            port: 8081
        },
        configureWebpack: {
            // 在webpack的名称字段中提供应用程序的标题，以便
            // 可以在index.html中对其进行访问以注入正确的标题。
            name: name,
            resolve: {
                alias: {
                    '@': resolve('src')
                }
            }
        },
        chainWebpack(config) {
            // set preserveWhitespace
            config.module
                .rule('vue')
                .use('vue-loader')
                .loader('vue-loader')
                .tap(options => {
                    options.compilerOptions.preserveWhitespace = true
                    return options
            	})
                .end()

            config.when(process.env.NODE_ENV !== 'development', config => {
                config.plugin('ScriptExtHtmlWebpackPlugin')
                    .after('html')
                    .use('script-ext-html-webpack-plugin', [{
                        // `runtime` must same as runtimeChunk name. 
                        // default is `runtime`
                        inline: /runtime\..*\.js$/
                    }])
                    .end()
                config.optimization.splitChunks({
                    chunks: 'all',
                    cacheGroups: {
                        libs: {
                            name: 'chunk-libs',
                            test: /[\\/]node_modules[\\/]/,
                            priority: 10,
                            chunks: 'initial' // only package third parties that are initially dependent
                        },
                        elementUI: {
                            // 将elementUI拆分为一个包
                            name: 'chunk-elementUI',
                            priority: 20, // 体积需要大于libs和app，否则将打包到libs或app中
                            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                        },
                        commons: {
                            name: 'chunk-commons',
                            test: resolve('src/components'), // can customize your rules
                            minChunks: 3, //  minimum common number
                            priority: 5,
                            reuseExistingChunk: true
                        }
                    }
                })
                config.optimization.runtimeChunk('single')
            }
        }
    }
}

```

### HTML 和静态资源

#### Index 文件

`public/index.html` 文件是一个会被 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入 resource hint (`preload/prefetch`、manifest 和图标链接 (当用到 PWA 插件时) 以及构建过程中处理的 JavaScript 和 CSS 文件的资源链接。

#### 插值

因为 index 文件被用作模板，所以你可以使用 [lodash template](https://lodash.com/docs/4.17.10#template) 语法插入内容：

- `<%= VALUE %>` 用来做不转义插值；
- `<%- VALUE %>` 用来做 HTML 转义插值；
- `<% expression %>` 用来描述 JavaScript 流程控制。

除了[被 `html-webpack-plugin` 暴露的默认值](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)之外，所有[客户端环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#using-env-variables-in-client-side-code)也可以直接使用。例如，`BASE_URL` 的用法：

```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

### 环境变量和模式

>  **Vue CLI** 项目有三个模式

- `development` 模式用于 `vue-cli-service serve`
- `production` 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e`
- `test` 模式用于 `vue-cli-service test:unit`

**package.json** 文件加入

- 新建一个文件名为 .env.development
- 那么这个文件里声明过的变量就只会在 development 模式下被载入。
- 或者通过传递参数，如下：

```json
"dev-build": "vue-cli-service build --mode development",
```

### 全局配置

#### publicPath

- Type: `string`

- Default: `'/'`

~~~js
部署应用包时的基本 URL。用法和 webpack 本身的 `output.publicPath` 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以**请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath**。

默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 `https://www.my-app.com/`。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 `https://www.my-app.com/my-app/`，则设置 `publicPath` 为 `/my-app/`。

这个值也可以被设置为空字符串 (`''`) 或是相对路径 (`'./'`)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。

相对 publicPath 的限制

相对路径的 `publicPath` 有一些使用上的限制。在以下情况下，应当避免使用相对 `publicPath`:

- 当使用基于 HTML5 `history.pushState` 的路由时；
- 当使用 `pages` 选项构建多页面应用时。

这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
}
```
~~~

### 引用组件

```js
// @ is an alias to /src   @是一个别名 表示 /src
import HelloWorld from '@/components/HelloWorld.vue'
```

#### 无法识别@别名

```
webpack.config.js的模块解析规则现在用于编码帮助。
setting---Languages & Framework---JavaScript---webpack
D:\当前项目\node_modules\@vue\cli-service\webpack.config.js
```

#### 无法识别 require

> webstorm --> Node.js and NPM

## 计算属性 `computed`/监听 `watch`

### `computed`

-   计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

-   计算属性是基于它们的响应式依赖进行缓存
    
    -   缓存是为了减少性能开销，如果不需要缓存可以用 `method` 代替
        
    -   `Date.now()` 不是响应式依赖，意味着计算属性将不再更新
    
        ```javascript
        computed: {
          now: function () {
            return Date.now()
          }
        }
        ```

```html
<div id="demo">{{ fullName }}</div>
```

```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

-   现在再运行 `vm.fullName = 'John Doe'` 时，setter 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

### `watch`

```html
<div id="demo">{{ fullName }}</div>
```

```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

## [解析 DOM 模板时的注意事项](<https://cn.vuejs.org/v2/guide/components.html#%E8%A7%A3%E6%9E%90-DOM-%E6%A8%A1%E6%9D%BF%E6%97%B6%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9>)

-   有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。

-   这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：

```vue
<table>
    <blog-posts-row></blog-posts-row>
</table>
```

-   这个自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 `is` 特性给了我们一个变通的办法：

```vue
<table>
    <tr is="blog-post-row"></tr>
</table>
```

## v-model 表单修饰符

### `.lazy`

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://v3.cn.vuejs.org/guide/forms.html#vmodel-ime-tip)输入法组织文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件之后进行同步：

```vue
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" />
```

### `.number`

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="text" />
```

1

当输入类型为 `text` 时这通常很有用。如果输入类型是 `number`，Vue 能够自动将原始字符串转换为数字，无需为 `v-model` 添加 `.number` 修饰符。如果这个值无法被 `parseFloat()` 解析，则返回原始的值。

### `.trim`

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg" />
```

## `keep-alive` 缓存

### **Props**：

-   `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
-   `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
-   `max` - 数字。最多可以缓存多少组件实例。

> 用法：

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

### **include and exclude**

>   2.1.0 新增

`include` 和 `exclude` 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：

```vue
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```

匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配。

### **max**

>   2.5.0 新增

最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。

```vue
<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```

`<keep-alive>` 不会在函数式组件中正常工作，因为它们没有缓存实例。

> **参考**：[动态组件 - keep-alive](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#在动态组件上使用-keep-alive)

## 编程式的导航 `router.push(...)`

-   除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

**`router.push(location, onComplete?, onAbort?)`**

**注意：在 Vue 实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 `history` 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({
    name: 'user',
    params: {
        userId: '123'
    }
})

// 带查询参数，变成 /register?plan=private
router.push({
    path: 'register',
    query: {
        plan: 'private'
    }
})
```

**注意：如果提供了 `path`，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 `name `或手写完整的带有参数的 `path`：**

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123

// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

同样的规则也适用于 `router-link` 组件的 `to` 属性。

在 2.2.0+，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。

**注意**： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1` -> `/users/2`)，你需要使用 [`beforeRouteUpdate`](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化) 来响应这个变化 (比如抓取用户信息)。

### `router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

### `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

#例子

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

### 操作 History

你也许注意到 `router.push`、 `router.replace` 和 `router.go` 跟 [`window.history.pushState`、 `window.history.replaceState` 和 `window.history.go`](https://developer.mozilla.org/en-US/docs/Web/API/History)好像， 实际上它们确实是效仿 `window.history` API 的。

因此，如果你已经熟悉 [Browser History APIs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)，那么在 Vue Router 中操作 history 就是超级简单的。

还有值得提及的，Vue Router 的导航方法 ( `push`、 `replace`、 `go` ) 在各类路由模式 ( `history`、 `hash` 和 `abstract` ) 下表现一致。

## `Vue-Router` 组件懒加载

配合 webpack 支持的异步加载方法有如下2种：

-   `resolve => require([URL], resolve)` 支持性好
-   `() => import(URL)`

>   Eg:

```js
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/:id',
            name: 'default',
            component: resolve => require(['@/components/index.vue'], resolve),
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})
/**
 * 相当于
 * component: function(resolve){
 * 		require(['@/components/index.vue'], resolve)
 * }
 */
```

## 配置文件

### 2、css引用图片不显示 `	build\utils.js`

````js
// Extract HTML+CSS when that option is specified 	指定该选项时提取CSS
// (which is the case during production build) 	(在生产构建期间就是这种情况)
if (options.extract) {
    return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
    })
} else {
    return ['vue-style-loader'].concat(loaders)
}
````

## 访问原生事件对象 `$event` 关键字

```vue
<div @click="showPopup(id, $event)"></div>
```

## 安装 Bootstrap

> 安装

```
npm install vue bootstrap-vue bootstrap
```

> main.js

```js
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
```

## axios 请求配置

> https://axios-http.com/

这些是发出请求的可用配置选项。 只需要`url`。 如果未指定 `method` ，则请求将默认为 `GET`。

```js
{
 // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {},

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType`指示服务器将响应的数据类型
  // 选项为'arraybuffer'，'blob'，'document'，'json'，'text'，'stream'
  responseType: 'json', // default

  // `responseEncoding` 表示用于解码响应的编码
  // 注意：忽略 stream 或客户端请求的 responseType
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` 带有xsrf token value 的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 带有xsrf token value 的http标头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onuploadProgress` 允许处理上传进度事件
  onUploadProgress: function (progressEvent) {},

  // `onDownloadProgress` 允许处理下载进度事件
  onDownloadProgress: function (progressEvent) {},

  // `maxContentLength` 定义http响应内容的最大大小（以字节为单位）
  maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义了node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向。
  maxRedirects: 5, // default

  // `socketPath`定义要在node.js中使用的UNIX套接字。
  // 例如 '/var/run/docker.sock'将请求发送到Docker守护程序。
  // 只能指定`socketPath`或`proxy`。
  // 如果两者都指定，则使用`socketPath`。
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 定义了执行http时要使用的自定义代理
  // 和https请求，分别在node.js中。 这样可以添加选项，例如
  // 默认情况下未启用的“ keepAlive”。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名和端口。
  // 您还可以使用常规的 `http_proxy` 和 `https_proxy` 环境变量。 如果您使用环境变量
  // 对于您的代理配置，您还可以定义`no_proxy`环境
  // 变量，以逗号分隔的不应该被代理的域列表。
  // 使用 `false`禁用代理，忽略环境变量。
  // `auth` 指示应使用HTTP Basic auth连接到代理，并且
  // 提供凭据。
  // 这将设置 `Proxy-Authorization` 标头，覆盖所有现有标头
  // 您使用 `headers` 设置的 `Proxy-Authorization` 自定义标题。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },
      
  // `cancelToken` 指定一个取消令牌，可用于取消请求
  //（有关详细信息，请参见下面的“取消”部分）
  cancelToken: new CancelToken(function (cancel) {})
}
```

## 安装sass

通过 npm 安装 sass-loader可能会失败，需要更改镜像，安装cnpm

> 更改淘宝镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

>  安装 SASS 加载器

```
cnpm install sass-loader node-sass --save-dev
```



##  单页面方法命名

> 获取只有列表

```js
function getList() {}
```

> 获取多个列表

```js
function get_List() {}
```

> 获取详情

```js
function getDetail() {}
```

> 获取一个下拉框

```js
function getOpt() {}
```

> 获取多个下拉框

```js
function get_Opts() {}
```

> 跳转页面

```js
function to_Page() {}
```

> 处理逻辑

```js
function handle_() {}
```

## 通用项目配置

### vue.config.js 配置

```js
'use strict'
const path = require('path')
const name = '' // 页面标题

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    assetsDir: 'static',
    outputDir: 'dist',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 8000,
        open: false,
        https: false,    //是否开启https
        overlay: {
            warnings: false,
            errors: true
        }
    },
    configureWebpack: {
        // 在webpack的名称字段中提供应用程序的标题，以便
        // 可以在index.html中对其进行访问以注入正确的标题。
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        // 它可以提高第一个屏幕的速度，建议打开预加载
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // 忽略 runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])
        // 当页面很多时，将导致太多毫无意义的请求
        config.plugins.delete('prefetch')
    }
}
```

### get-page-title.js

```js
const title = ''

export default function getPageTitle(pageTitle) {
   if (pageTitle) {
      return `${pageTitle} - ${title}`
   }
   return `${title}`
}
```

### request.js

```js
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, 	// url = base url + request url
	// withCredentials: true, 	// 跨域请求时发送Cookie
	timeout: 300000		 	// request timeout
})

// request interceptor
service.interceptors.request.use(config => {
	// 在发送请求之前做一些事情
	/*if (store.getters.token) {
		/!**
		 * 让每个请求都带有令牌
		 * ['X-Token'] 自定义 headers key
		 * 请根据实际情况进行修改
		 *!/
		config.headers['Admin-Token'] = getToken()
	}*/
	return config
}, error => {
	console.log('request -> ', error) // for debug
	return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
	// 如果要获取http信息（例如标题或状态）
	// Please return  response => response
	response => {
		/**
		 * 通过自定义代码确定请求状态
		 * 这只是一个例子
		 * 您还可以通过HTTP状态代码来判断状态
		 */
		const res = response.data
		if (res.code === 4000) {
			// 重新登录
			/*MessageBox.confirm('您已注销，可以取消以保留在该页面上，或者再次登录', '确认登出', {
				confirmButtonText: '重新登录',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// 删除 token 重新进去导航守卫加载页面
				store.dispatch('user/resetToken').then(() => location.reload())
			})*/
			console.log('response -> ', res)
		}

		// 如果自定义代码是0,则将其判断为错误
		if (res.code === 0) {
			/*Message({
				type: 'error',
				message: res.message || 'Error',
				showClose: true,
			})
			console.log('code:', res.code)*/
			// return Promise.reject(new Error(res.message || 'Error'))
			return Promise.reject(res.message || 'Error')
		} else {
			return res
		}
	}, error => {
		/*Message({
			type: 'error',
			message: error.message,
			duration: 5000
		})*/
		console.log('请求失败:', error) // for debug
		return Promise.reject(error)
	}
)

export default service
```

### index.html

```html
<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="icon" href="<%= BASE_URL %>favicon.ico">
	<title><%= webpackConfig.name %></title>
```

##  `echart` 接口请求动态加载解决方法

### 方法一

```js
export default {
    data() {
        return {
            dataList: [],
            chart: null,
            xData: [],	// x轴数据
            tooTipTimer: null,
        }
    },
	methods: {
		initChart() {
			let chartDom = document.getElementById('barChart')
			this.chart = echarts.init(chartDom, 'dark', {
				renderer: 'svg'
			})

			this.chart.setOption({
				backgroundColor: 'transparent',
				tooltip: {
					trigger: 'axis',
					backgroundColor: 'rgba(21, 49, 116, 0.8)',
					borderColor: '#47BBDC',
                    
					axisPointer: {
						// 默认为直线，可选为：'line' | 'shadow'
                        type: 'shadow'
					},
					textStyle: {
						color: '#FFFFFF'
					},
				},
				xAxis: {
					type: 'category',
					axisTick: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#3e5063',
							width: 1,
						}
					},
					axisLabel: {
						color: '#ECF0FF',
						width: 80,
						ellipsis: '...',
						overflow: 'truncate',
						fontSize: 12,
						rotate: 20,
						interval: 0
					}
				},
				yAxis: {
					name: '%',
					type: 'value',
					nameTextStyle: {
						fontSize: 12,
						color: '#ECF0FF',
						lineHeight: 26,
						align: 'right',
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#3e5063',
							width: 1,
						}
					},
					axisLabel: {
						color: '#ECF0FF'
					},
				},
				series: [
					{
						name: 'name',
						type: 'bar',
						barWidth: '11px',
						label: {
							position: 'outer',
							alignTo: 'labelLine',
							bleedMargin: 5
						},
						itemStyle: {
							color: '#41dda5'
						},
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				],
			})
		},
		loadData() {
			// 教师评价
			fetchList().then(res => {
				const {data} = res
			
				this.xData = xData
		
				this.chart.setOption({xAxis: {data: this.xData}})
				this.chart.setOption({
					tooltip: {
						formatter(params) {
							for (const item of data) {
								if (item.name === params[0].name) {
									return `HTML代码`
								}
							}
						}
					}
				})
			}).catch(err => {
				console.log(new Error(err))
			})
		},
        // 循环播放tool
        loopView() {
            let dataIndex = 0
            if (this.tooTipTimer) {
				clearInterval(this.tooTipTimer)
				this.tooTipTimer = null
			}
			this.tooTipTimer = setInterval(() => {
                const chart = this.chart
				chart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: dataIndex,
				})
            })
            dataIndex++
            if (dataIndex > this.areaDataList.length) {
                dataIndex = 0
            }
        }
	},
	mounted() {
		this.$nextTick(() => {
			this.initChart()
			this.loadData()
		})
	},
	beforeDestroy() {
		if (this.chart) {
			this.chart.dispose()
			this.chart = null
		}
		if (this.tooTipTimer) {
			console.log('清除')
			clearInterval(this.tooTipTimer)
			this.tooTipTimer = null
		}
	}
}
```



### 方法二

```js
export default {
  	data() {
		return {
			chart: null,
            tooTipTimer: null
		}
	},
    methods: {
		initChart() {
			let chartDom = document.getElementById('barChart')
			this.chart = echarts.init(chartDom, {
				renderer: 'svg'
			})
			this.loadChartData()
		},
		setOptions(xData, yData1, yData2) {
			this.chart.setOption({
				grid: {
					left: 55,
					right: 30,
					top: 50
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					},
					padding: [10, 10]
				},
				dataZoom: [
					{
						show: true,
						type: 'inside',
						startValue: 0,
						endValue: 4
					}
				],
				legend: {
					data: ['name1', 'name2'],
					textStyle: {
						color: '#FFFFFF',
						fontSize: 16
					}
				},
				xAxis: {
					data: xData,
					axisTick: {show: false},
					axisLine: {show: false},
					axisLabel: {
						color: '#FFFFFF',
						fontSize: 14,
						padding: [10, 0, 0, 0],
						interval: 0,
						rotate: 15,
						width: 100,
						overflow: 'truncate'
					}
				},
				yAxis: {
					axisTick: {show: false},
					axisLine: {show: false},
					axisLabel: {color: '#FFFFFF', fontSize: 14},
					splitLine: {
						lineStyle: {color: 'rgba(255,255,255,0.09)'},
						splitNumber: 1,
					},
				},
				series: [
					{
						name: 'name1',
						type: 'bar',
						barWidth: 17,
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
								{offset: 1, color: '#00FFC3'},
								{offset: 0, color: '#169275'}
							])
						},
						data: yData1,
						animationDuration: 1000,
						animationEasing: 'cubicInOut'
					},
					{
						name: 'name2',
						type: 'bar',
						barWidth: 17,
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
								{offset: 1, color: '#FFE258'},
								{offset: 0, color: '#6F6302'}
							]),
						},
						data: yData2,
						animationDuration: 1000,
						animationEasing: 'quadraticOut'
					}
				]
			})
		},
		loadChartData() {
			fetchChart().then(res => {
				const {data} = res
				let xData = data.map(item => item.value)
				let yData1 = data.map(item => item.value)
				let yData2 = data.map(item => item.value)
				this.setOptions(xData, yData1, yData2)
                this.loopView(xData)
			}).catch(err => {

			})
		},
        // 循环播放tool
        loopView(list) {
            let dataIndex = 0
            if (this.tooTipTimer) {
				clearInterval(this.tooTipTimer)
				this.tooTipTimer = null
			}
			this.tooTipTimer = setInterval(() => {
                const chart = this.chart
				chart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: dataIndex,
				})
            })
            dataIndex++
            if (dataIndex > list.length) {
                dataIndex = 0
            }
        }
	},
	mounted() {
		this.$nextTick(async () => {
			this.initChart()
		})
	},
	beforeDestroy() {
		if (this.chart) {
			this.chart.dispose()
			this.chart = null
		}
	}
}
```



## swiper 插件使用

> 针对vue2.X版本

### package.json

```json
"swiper": "^5.4.5",
"vue-awesome-swiper": "^4.1.1",
```

### js

```js
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

data() {
    const _this = this
    const swiperOptions = {
        autoplay: {
            disableOnInteraction: false,	//可选选项,自动滑动
            delay: 5000,
        },
        lazy: {
            loadPrevNext: true,
        },
        effect: 'fade',		// 动画方式
        observer: true,
        observeSlideChildren: true,		j
        loopAdditionalSlides: 5,
        navigation: {
            prevEl: '.pre',		// 自定义的按钮
            nextEl: '.next',
        },
        on: {
            // 初始化加载显示数据
            init: function (swiper) {
                fetchCommonList({
                    typeid: 30,
                    limit: 10,
                    field: 'id|title|link|image|create_time|content',
                    contentlength: 50,
                }).then(res => {
                    const {data, msg} = res
                    if (!data) {
                        return message.info(msg)
                    }
                    _this.dataList = data.list
                    const {id, title, create_time, content} = _this.dataList[0]
                    _this.indexContent = {id, title, create_time, content}
                }).catch(err => {
                    console.log('fetchCommonList8 -> ' + err)
                })
            },
            // 循环展示时显示数据
            slideChangeTransitionStart() {
                const {id, title, create_time, content} = _this.dataList[this.realIndex]
                _this.indexContent = {id, title, create_time, content}
            },
        },
    }
    return {
        swiperOptions: swiperOptions,
        dataList: [],
        indexContent: {}
    }
}
```

### template

```vue
<swiper :options="swiperOptions" class="swiper">
   <swiper-slide v-for="item  in dataList" :key="item.id" class="swiper-slide swiper-no-swiping">
      <div @click="toDetail(item.id)" class="item-container pointer d-flex">
         <el-image fit="cover" :src="item.image" class="item-image swiper-lazy"/>
      </div>
   </swiper-slide>
</swiper>
```

## 子向父组件数据双向同步 `v-model`

> 父组件

```vue
<div>
	<c v-model:num="count"></c>
</div>
```

```js
export default{
	data() {
        return {
            count: 0		// 子组件调用方法可更改父组件的值
        }
    },
}
```

> 子组件

```js
export default{
	porp: ['num'],
    emits: ['update:num'],
    methods: {
        add() {
            this.$emit('update:num', this.num++)
        }
    }
}
```

## 自定义事件传参(`@custom=""`)

> 父组件

```vue
<c @num="add"></c>
```

```js
export default{
    methods: {
        add() {
            console.log('子组件触发了事件')
        }
    }
}
```

> 子组件

```vue
<button @click="add"></button>
```

```js
export default{
    emits: ['num'],
    methods: {
        add() {
            this.$emit('num', this.num++)
        }
    }
}
```

## 验证抛出的事件

与 prop 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以对它进行验证。要添加验证，请为事件分配一个函数，该函数接收传递给 `$emit` 调用的参数，并返回一个布尔值以指示事件是否有效。

```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证 submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
})
```

## 验证类工具

```js
export function isFunction(val) {
  return typeof val === 'function';
}
export function isPlainObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}
export function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
}
export function isDef(value) {
  return value !== undefined && value !== null;
}
export function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
export function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
export function isBoolean(value) {
  return typeof value === 'boolean';
}
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
export function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
export function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}
```

## element ui

### 表单验证定位

```js
this.$nextTick(() => {
  let isError = document.getElementsByClassName('is-error')
  isError[0].scrollIntoView({
    // 滚动到指定节点
    // 值有start,center,end，nearest，当前显示在视图城市中间
    block: 'center',
    // 值有auto、instant,smooth，缓动动画（当前是慢速的）
    behavior: 'auto',
  })
})
```

### 父子组件dispatch

```js
dispatch(componentName, eventName, params) {
  let parent = this.$parent || this.$root
  let name = parent.$options.componentName

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.componentName
    }
  }
  if (parent) {
    console.log(parent, [eventName].concat(params))
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}
```

element ui 日期选择

```js
const defaultTime = dayjs().subtract(1, 'day')
 
pickerOptionsStart: {
   disabledDate: time => {
     const space = 365

     // minTime 最小一年
     const minTime = dayjs().subtract(space, 'day').endOf('day')
     const maxTime = dayjs(defaultTime)

     return dayjs(time).isBefore(minTime) || dayjs(time).isAfter(maxTime)
   }
 },
pickerOptionsEnd: {
  disabledDate: time => {
    const space = 30

    const { startTime } = this.searchForm

    const minTime = dayjs(startTime).startOf('day')
    let maxTime = dayjs(defaultTime)

    // 开始时间和结束时间间隔一个月
    if (dayjs(startTime) < defaultTime.subtract(space, 'day')) {
      maxTime = minTime.add(space, 'day').endOf('day')
    }

    return dayjs(time).isBefore(minTime) || dayjs(time).isAfter(maxTime)
  }
},
  
  
  // 日
    dayChange(val, type) {
      if (type === 'start') {
        const { endTime } = this.timeForm
        const space = 7 * 24 * 3600 * 1000
        if (new Date(val).getTime() + space < new Date(endTime).getTime() || new Date(val).getTime() > new Date(endTime).getTime()) {
          this.timeForm.startTime = dayjs(val).format('YYYY-MM-DD 23:59:59')
        }

        this.searchForm.startTime = val
      }

      if (type === 'end') {
        this.timeForm.endTime = dayjs(val).format('YYYY-MM-DD 23:59:59')
      }

      this.searchForm.endTime = this.timeForm.endTime
    },

      
      // 月的开始和结束时间
      
      this.searchForm.startTime = dayjs().startOf('month')
      this.searchForm.startTime = dayjs().endOf('month')
```

```js
provide() {
  return {
    chartMode: () => this.showChartMode
  }
}

// 子组件
inject: ['chartMode'],

    // 计算数据拿到 provide中 chartMode()的值,生成新的变量
computed: {
  chartLazy()
  {
    return this.chartMode()
  }
}

// 监听新变量
watch: {
    chartLazy(val) {
        console.log(val)
    }
}
```

## webpack扫描router和store

```
// TODO 对应页面模块目录下的 router.js

const routes = []
const files = require.context('@/views', true, /router\.js$/)

files.keys().forEach(key => {
  if (files(key).default) {
    if (files(key).default instanceof Array) {
      routes.push(...files(key).default)
    } else {
      routes.push(files(key).default)
    }
  }
})

// 基础路由路径
const baseUrl = `/app/${process.env.VUE_APP_SYS_NAME}`
export default routes.map(item => ({
  path: baseUrl + item.path,
  name: item.name,
  component: item.component,
  meta: item.meta
}))
```

## element ui 源码分析

 webpack.common.js
