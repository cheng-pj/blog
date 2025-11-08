<template>
  <input v-model="text" class="input"/>
  
  <p>结果：</p>
  <ResizableBox>
    <p class="title">一行超出隐藏：</p>
    <div class="text-overflow-ellipsis">{{ text }}</div>
    <p class="title">两行超出隐藏：</p>
    <div class="text-overflow-line-ellipsis">{{ text }}</div>
  </ResizableBox>
</template>

<style scoped>
.text-overflow-ellipsis {
  display: block !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
}

.text-overflow-line-ellipsis {
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis; /* 显示省略符号来代表被隐藏的文本 */
  display: -webkit-box !important; /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 设置盒子内排列顺序为纵向 */
  -webkit-line-clamp: 2; /* 限制块元素显示的文本的行数 */
}

.title {
  font-weight: bold;
  font-size: 12px;
  color: var(--vp-c-brand);
}

.input {
  width: 100%;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand);
}
</style>

<script setup>
const text = ref('超文本标记语言是一种用于建立网页的标准标记语言。 HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程式以及行动应用程式的使用者介面。 网页浏览器可以读取HTML档案，并将其彩现成视觉化网页。')
</script>
