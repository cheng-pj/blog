## this 用法

```js
// this指指向上一级的的对象所调用
var a = '123456';

function f() {
  var b = 'abcdefg';
  alert(this.b);	// 可以直接引用b,加this是脑残
  alert(this);	// window对象
  alert(this.a);	// 能引用a
}
```

## split() 方法

### http://www.w3school.com.cn/jsref/jsref_split.asp

```js
var str = "How are you doing today?"

document.write(str.split(" ") + "<br/>");	// How,are,you,doing,today?
document.write(str.split("") + "<br/>");	// H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
document.write(str.split(" ", 3));		// How,are,you
```

## `let` 和 `const` 命令

### `let`

> 基本用法

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

```js
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```

### `const`

> 基本用法

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```

上面代码表明改变常量的值会报错。

`const`声明的变量不得改变值，这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。

```js
const foo;
// SyntaxError: Missing initializer in const declaration
```

上面代码表示，对于`const`来说，只声明不赋值，就会报错。

`const`的作用域与`let`命令相同：只在声明所在的块级作用域内有效。

```js
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
```

`const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

```js
if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}
```

上面代码在常量`MAX`声明之前就调用，结果报错。

`const`声明的常量，也与`let`一样不可重复声明。

```js
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
```

## push()追加新内容、元素

```js
push();
```

## 复制文本

```js
document.execCommand("copy")
```

`select()` 方法用于选择对象，在执行 `execCommand()` 方法

## 递归

```js
let html = '';

function getData(id, arr) {
  let childArr = GetParentArr(id, arr);
  if (childArr.length > 0) {
    html += '<ul class="nav flex-column">';
    for (let i = 0; i < childArr.length; i++) {
      html += '<li>' +
        '<a class="nav-link type_link" href="#">' + childArr[i].name + '</a>' +
        '<input type="hidden" class="img_id" value="' + childArr[i].id + '"/>';
      getData(childArr[i].id, arr);
      html += '</li>';
    }
    parentLink += '</ul>';
  }
}

function GetParentArr(id, arr) {
  let parentArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId == id && arr[i].parentId !== '')
      parentArr.push(arr[i]);
  }
  return parentArr;
}
```

## 箭头函数

> Eg：常规语法

```js
function f(a) {
  return a + 2
}

// 使用箭头函数
// a => a + 2
```

> 没有参数传递

```text
() => {...}
```

> 只有一个参数的函数，可去掉括号

```text
a => {...}
```

> 返回值仅仅只有一个表达式(`b`)，还可以省略大括号：

```js
// a => b

// 等价于:
function f(a) {
  return b;
}
```

> 没有局部 `this` 的绑定

```js

```

## 提取数字

### `parseInt()` 和 `parseFloat` 方法

```js
document.write(parseFloat("10")); 		//--> 10
document.write(parseFloat("10.00"));		//--> 10
document.write(parseFloat("10.33"));		//--> 10.33
document.write(parseFloat("34 45 66"));		//--> 34
document.write(parseFloat("   60   "));		//--> 60
document.write(parseFloat("40 years"));		//--> 40
document.write(parseFloat("He was 40"));	//--> NaN

document.write(parseInt("10"));		//--> 10
document.write(parseInt("10.00"));	//--> 10
document.write(parseInt("10.33"));	//--> 10
document.write(parseInt("34 45 66"));	//--> 34
document.write(parseInt("   60   "));	//--> 60
document.write(parseInt("40 years"));	//--> 40
document.write(parseInt("He was 40"));	//--> NaN
```

### 正则表达式

```js
// 提取数字
let str = '价格1000元';
let num = str.replace(/[^0-9]/ig, '');	// /[0-9]*/g
console.log(num);
// -- > 1000
```

```js
// 删除字符串
var str = '价格1000元';
var num = str.replace(/[^\d]/g, '');
console.log(num);
// -- > 1000
```

```js
// 多个数值
var str = '大米:2.57元/斤, 白菜:3.65元/斤';
var arr = str.match(/\d+(.\d+)?/g);
console.log(arr);
// -- > ["2.57", "3.65"]
```

## 存储 `sessionStorage` && `localStorage`

```js
/** 存储本地缓存
 *  @param {string} key 键
 *  @param {string} value 值
 */
function saveToSessionStorage(key, value) {
  if (value != null && value != undefined) {
    sessionStorage.setItem(key, value)
  } else {
    sessionStorage.removeItem(key)
  }
}

/** 查询本地缓存
 *  @param {string} key 键
 *  @param {string} def 默认值(如果没有值时返回)
 */
function loadFromSessionStorage(key, def) {
  var vResult = sessionStorage.getItem(key)
  return vResult || def
}

/**
 * 存储本地数据
 * @param {any} key 键
 * @param {any} value 值
 */
function saveToLocalStorage(key, value) {
  if (value != null && value != undefined) {
    localStorage.setItem(key, value)
  } else {
    localStorage.removeItem(key)
  }
}

/**
 * 读取本地数据
 * @param {any} key 键
 * @param {any} def 默认值(如果没有值时返回)
 */
function loadFromLocalStorage(key, def) {
  let vResult = localStorage.getItem(key)
  return vResult || def
}
```

## `innerHTML` 、 `outerHTML` 、 `innerText` 、 `outerText` 的区别及兼容性问题

> 获取元素内容

```html

<div id="test">这是div中的文字<span>这是span中的文字</span></div>

<script type="text/javascript">
  console.log('innerHTML:' + test.innerHTML);
  console.log('outerHTML:' + test.outerHTML);
  console.log('innerText:' + test.innerText);
  console.log('outerText:' + test.outerText);
  
  // innerHTML:这是div中的文字<span>这是span中的文字</span>
  // outerHTML:<div id="test1">这是div中的文字<span>这是span中的文字</span></div>
  // innerText:这是div中的文字这是span中的文字
  // outerText:这是div中的文字这是span中的文字
</script>
```

> **兼容性区别**
>
> > **innerHTML** 和 **outHTML** 显示效果
> >
> > > **innerHTML** 在获取的时候：IE和Opera会将获取到的标签全部转换为大写形式。而苹果、谷歌、火狐会将内容按照原来的格式返回HTML，包括空格和缩进。（这也就意味着返回后的不同内容的DOM树结构截然不同）
> > >
> > > **outHTML** 新建元素时： 会替换掉调用元素，如调用元素是div则会被替换

## ES6 语法

### 模块的整体加载

除了指定加载某个输出值，还可以使用整体加载，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个`circle.js`文件，它输出两个方法`area`和`circumference`。

```javascript
// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
```

现在，加载这个模块。

```javascript
// main.js

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
```

上面写法是逐一指定要加载的方法，整体加载的写法如下。

```js
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```

注意，模块整体加载所在的那个对象（上例是`circle`），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

```js
import * as circle from './circle';

// 下面两行都是不允许的
circle.foo = 'hello';
circle.area = function () {
};
```

## export default 命令

```js
const foo = {
  // 对象：函数
}
export default foo;
```

## 数组转集合

```js
list: []
states:["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"]

this.list = this.states.map(item => {
  return { label: `${item}`, value: `${item}` };
});

// 打印
list: [
  {
    label: 'Alabama',
    value: 'Alabama'
  }, {
    label: 'Alaska',
    value: 'Alaska'
  }
]
```

## 时间加减

```js
let date = new Date()
date.setDate(date.getDate() + 1)
```

## 字符串排序

```js
const sortName = (a, b) => {
  const nameA = a.orderSourceName ? a.orderSourceName.toUpperCase() : '-'
  const nameB = b.orderSourceName ? b.orderSourceName.toUpperCase() : '-'
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}
```

