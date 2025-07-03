### jQuery 选择器

请使用我们的 [jQuery 选择器检测器](http://www.runoob.com/try/trysel.php) 来演示不同的选择器。

| **选择器**                                                   | **实例**                       | **选取**                                                     |
| :----------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| [*](http://www.runoob.com/jquery/jq-sel-all.html)            | `$("*")`                       | 所有元素                                                     |
| [#*id*](http://www.runoob.com/jquery/jq-sel-id.html)         | `$("#lastname")`               | `id="lastname"` 的元素                                       |
| [.*class*](http://www.runoob.com/jquery/jq-sel-class.html)   | `$(".intro")`                  | `class="intro"` 的所有元素                                   |
| [.*class,*.*class*](http://www.runoob.com/jquery/sel-multiple-classes.html) | `$(".intro,.demo")`            | class 为   "intro" 或 "demo" 的所有元素                      |
| [*element*](http://www.runoob.com/jquery/jq-sel-element.html) | `$("p")`                       | 所有 `<p>` 元素                                              |
| [*el1*,*el2*,*el3*](http://www.runoob.com/jquery/sel-multiple-elements.html) | `$("h1,div,p")`                | 所有  ` <h1>`、`<div>` 和 `<p>` 元素                         |
| [:first](http://www.runoob.com/jquery/sel-first.html)        | `$("p:first")`                 | 第一个 `<p>` 元素                                            |
| [:last](http://www.runoob.com/jquery/sel-last.html)          | `$("p:last")`                  | 最后一个 `<p>` 元素                                          |
| [:even](http://www.runoob.com/jquery/sel-even.html)          | `$("tr:even")`                 | 所有偶数 `<tr>` 元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 |
| [:odd](http://www.runoob.com/jquery/sel-odd.html)            | `$("tr:odd")`                  | 所有奇数 `<tr>`   元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 |
| [:first-child](http://www.runoob.com/jquery/jq-sel-firstchild.html) | `$("p:first-child")`           | 属于其父元素的第一个子元素的所有 `<p>` 元素                  |
| [:first-of-type](http://www.runoob.com/jquery/sel-firstoftype.html) | `$("p:first-of-type")`         | 属于其父元素的第一个 `<p>` 元素的所有 `<p>` 元素             |
| [:last-child](http://www.runoob.com/jquery/sel-lastchild.html) | `$("p:last-child")`            | 属于其父元素的最后一个子元素的所有 `<p>` 元素                |
| [:last-of-type](http://www.runoob.com/jquery/sel-lastoftype.html) | `$("p:last-of-type")`          | 属于其父元素的最后一个 `<p>` 元素的所有 `<p>` 元素           |
| [:nth-child(*n*)](http://www.runoob.com/jquery/sel-nthchild.html) | `$("p:nth-child(2)")`          | 属于其父元素的第二个子元素的所有 `<p>` 元素                  |
| [:nth-last-child(*n*)](http://www.runoob.com/jquery/sel-nthlastchild.html) | `$("p:nth-last-child(2)")`     | 属于其父元素的第二个子元素的所有 `<p>` 元素，从最后一个子元素开始计数 |
| [:nth-of-type(*n*)](http://www.runoob.com/jquery/sel-nthoftype.html) | `$("p:nth-of-type(2)")`        | 属于其父元素的第二个 `<p>` 元素的所有 `<p>` 元素             |
| [:nth-last-of-type(*n*)](http://www.runoob.com/jquery/sel-nthlastoftype.html) | `$("p:nth-last-of-type(2)")`   | 属于其父元素的第二个 `<p>` 元素的所有 `<p>` 元素，从最后一个子元素开始计数 |
| [:only-child](http://www.runoob.com/jquery/sel-onlychild.html) | `$("p:only-child")`            | 属于其父元素的唯一子元素的所有 `<p>` 元素                    |
| [:only-of-type](http://www.runoob.com/jquery/sel-onlyoftype.html) | `$("p:only-of-type")`          | 属于其父元素的特定类型的唯一子元素的所有  `<p>` 元素         |
| [parent > child](http://www.runoob.com/jquery/sel-parent-child.html) | `$("div > p")`                 | `<div>` 元素的直接子元素的所有 `<p>` 元素                    |
| [parent descendant](http://www.runoob.com/jquery/sel-parent-descendant.html) | `$("div p")`                   | `<div>` 元素的后代的所有 `<p>` 元素                          |
| [element + next](http://www.runoob.com/jquery/sel-previous-next.html) | `$("div + p")`                 | 每个`<div>` 元素相邻的下一个 `<p>` 元素                      |
| [element ~ siblings](http://www.runoob.com/jquery/sel-previous-siblings.html) | `$("div ~ p")`                 | `<div>` 元素同级的所有 `<p>` 元素                            |
| [:eq(*index*)](http://www.runoob.com/jquery/sel-eq.html)     | `$("ul  li:eq(3)")`            | 列表中的第四个元素（index 值从 0 开始）                      |
| [:gt(*no*)](http://www.runoob.com/jquery/sel-gt.html)        | `$("ul  li:gt(3)")`            | 列举 index 大于 3 的元素                                     |
| [:lt(*no*)](http://www.runoob.com/jquery/sel-lt.html)        | `$("ul  li:lt(3)")`            | 列举 index 小于 3 的元素                                     |
| [:not(*selector*)](http://www.runoob.com/jquery/jq-sel-not.html) | `$("input:not(:empty)")   `    | 所有不为空的输入元素                                         |
| [:header](http://www.runoob.com/jquery/sel-header.html)      | `$(":header")`                 | 所有标题元素 `<h1>`,   `<h2>` ...                            |
| [:animated](http://www.runoob.com/jquery/sel-animated.html)  | `$(":animated")`               | 所有动画元素                                                 |
| [:focus](http://www.runoob.com/jquery/jq-sel-focus.html)     | `$(":focus")`                  | 当前具有焦点的元素                                           |
| [:contains(*text*)](http://www.runoob.com/jquery/sel-contains.html) | `$(":contains('Hello')")`      | 所有包含文本 "Hello" 的元素                                  |
| [:has(*selector*)](http://www.runoob.com/jquery/sel-has.html) | `$("div:has(p)")`              | 所有包含有 `<p>`   元素在其内的 `<div>` 元素                 |
| [:empty](http://www.runoob.com/jquery/jq-sel-empty.html)     | `$(":empty")`                  | 所有空元素                                                   |
| [:parent](http://www.runoob.com/jquery/sel-parent.html)      | `$(":parent")`                 | 匹配所有含有子元素或者文本的父元素。                         |
| [:hidden](http://www.runoob.com/jquery/sel-hidden.html)      | `$("p:hidden")`                | 所有隐藏的 `<p>` 元素                                        |
| [:visible](http://www.runoob.com/jquery/sel-visible.html)    | `$("table:visible")`           | 所有可见的表格                                               |
| [:root](http://www.runoob.com/jquery/jq-sel-root.html)       | `$(":root")`                   | 文档的根元素                                                 |
| [:lang(*language*)](http://www.runoob.com/jquery/jq-sel-lang.html) | `$("p:lang(de)")`              | 所有 lang 属性值为   "de" 的 <p> 元素                        |
| [[*attribute*]](http://www.runoob.com/jquery/jq-sel-attribute.html) | `$("[href]")`                  | 所有带有 href 属性的元素                                     |
| [[*attribute*=*value*]](http://www.runoob.com/jquery/sel-attribute-equal-value.html) | `$("[href='default.htm']")`    | 所有带有 href 属性且值等于   "default.htm" 的元素            |
| [[*attribute*!=*value*]](http://www.runoob.com/jquery/sel-attribute-notequal-value.html) | `$("[href!='default.htm']")`   | 所有带有 href 属性且值不等于   "default.htm" 的元素          |
| [[*attribute*$=*value*]](http://www.runoob.com/jquery/sel-attribute-end-value.html) | `$("[href$='.jpg']")`          | 所有带有 href 属性且值以   ".jpg" 结尾的元素                 |
| [[*attribute*\|=*value*]](http://www.runoob.com/jquery/sel-attribute-prefix-value.html) | `$("[title|='Tomorrow']")`     | 所有带有 title 属性且值等于   'Tomorrow' 或者以 'Tomorrow' 后跟连接符作为开头的字符串 |
| [[*attribute*^=*value*]](http://www.runoob.com/jquery/sel-attribute-beginning-value.html) | `$("[title^='Tom']")`          | 所有带有 title 属性且值以   "Tom" 开头的元素                 |
| [[*attribute*~=*value*]](http://www.runoob.com/jquery/sel-attribute-contains-value.html) | `$("[title~='hello']")`        | 所有带有 title 属性且值包含单词   "hello" 的元素             |
| [[*attribute**=*value*]](http://www.runoob.com/jquery/sel-attribute-contains-string-value.html) | `$("[title*='hello']")`        | 所有带有 title 属性且值包含字符串   "hello" 的元素           |
| [[*name*=*value*][*name2*=*value2*]](http://www.runoob.com/jquery/sel-multipleattribute-equal-value.html) | `$("input[id][name$='man']" )` | 带有 `id` 属性，并且 `name` 属性以   man 结尾的输入框        |
| [:input](http://www.runoob.com/jquery/sel-input.html)        | `$(":input")`                  | 所有 `input` 元素                                            |
| [:text](http://www.runoob.com/jquery/sel-input-text.html)    | `$(":text")`                   | 所有带有 `type="text"` 的 `input` 元素                       |
| [:password](http://www.runoob.com/jquery/sel-input-password.html) | `$(":password")`               | 所有带有 `type="password"` 的 `input` 元素                   |
| [:radio](http://www.runoob.com/jquery/sel-input-radio.html)  | `$(":radio")`                  | 所有带有 `type="radio"` 的 `input `元素                      |
| [:checkbox](http://www.runoob.com/jquery/sel-input-checkbox.html) | `$(":checkbox")`               | 所有带有 `type="checkbox"` 的 `input`元素                    |
| [:submit](http://www.runoob.com/jquery/sel-input-submit.html) | `$(":submit")`                 | 所有带有 `type="submit"` 的 `input` 元素                     |
| [:reset](http://www.runoob.com/jquery/sel-input-reset.html)  | `$(":reset")`                  | 所有带有 `type="reset"` 的 `input` 元素                      |
| [:button](http://www.runoob.com/jquery/sel-input-button.html) | `$(":button")`                 | 所有带有 `type="button"` 的 `input` 元素                     |
| [:image](http://www.runoob.com/jquery/sel-input-image.html)  | `$(":image")`                  | 所有带有 `type="image"` 的 `input` 元素                      |
| [:file](http://www.runoob.com/jquery/sel-input-file.html)    | `$(":file")`                   | 所有带有 `type="file"` 的 `input` 元素                       |
| [:enabled](http://www.runoob.com/jquery/sel-input-enabled.html) | `$(":enabled")`                | 所有启用的元素                                               |
| [:disabled](http://www.runoob.com/jquery/sel-input-disabled.html) | `$(":disabled")`               | 所有禁用的元素                                               |
| [:selected](http://www.runoob.com/jquery/sel-input-selected.html) | `$(":selected")`               | 所有选定的下拉列表元素                                       |
| [:checked](http://www.runoob.com/jquery/sel-input-checked.html) | `$(":checked")`                | 所有选中的复选框选项                                         |
| .selector                                                    | `$(selector).selector`         | 在jQuery 1.7中已经不被赞成使用。返回传给jQuery()的原始选择器 |
| [:target](http://www.runoob.com/jquery/jq-sel-target.html)   | `$("p:target")`                | 选择器将选中ID和URI中一个格式化的标识符相匹配的 `<p>` 元素   |

### 注册多个事件时 不同时触发

```js
$(':text, :radio').on('change', function () {
  $(this).val()
})
```

### $.each() 遍历

```js
var json = [
  { 'id': '1', 'tagName': 'apple' },
  { 'id': '2', 'tagName': 'orange' },
  { 'id': '3', 'tagName': 'banana' },
  { 'id': '4', 'tagName': 'watermelon' },
  { 'id': '5', 'tagName': 'pineapple' }
]

$.each(json, function (idx, obj) {
  alert(obj.tagName)
})
```

### input 选择器

```js
const property = 'property'
$('input[name=' + property + ']')
```

### prop() 方法

**定义和用法**

prop() 方法设置或返回被选元素的属性和值。

当该方法用于**返回**属性值时，则返回第一个匹配元素的值。

当该方法用于**设置**属性值时，则为匹配元素集合设置一个或多个属性/值对。

**注意：**prop() 方法应该用于检索属性值，例如 DOM 属性（如 selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked, 和 defaultSelected）。

**提示：**如需检索 HTML 属性，请使用 [attr()](http://www.runoob.com/jquery/html-attr.html) 方法代替。

**提示：**如需移除属性，请使用 [removeProp()](http://www.runoob.com/jquery/html-removeprop.html) 方法。

来自 <http://www.runoob.com/jquery/html-prop.html> 

### attr() 方法

**定义和用法**

attr() 方法设置或返回被选元素的属性和值。

当该方法用于**返回**属性值，则返回第一个匹配元素的值。

当该方法用于**设置**属性值，则为匹配元素设置一个或多个属性/值对。

 

来自 <http://www.runoob.com/jquery/html-attr.html> 

### 全选/取消全选

```js
$(function () {
  $('#select').on('click', function () {
    $('input[name=\'checkbox\']').prop('checked', this.checked)
  })
  
  两种均可使用
  $('#select').on('click', function () {
    $('input[name=\'checkbox\']').prop('checked', this.length == this.filter(':checked').length ? true : false)
  })
})
```

### MDUI 过度动画

```css
.transition {
  transition: all .3s cubic-bezier(0, 0, 0.2, 1);
}
```

