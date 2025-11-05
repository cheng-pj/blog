<template>
  <div class="main">
    <div class="box">
      <span class="name">这是第一个这是第一个这是第一个</span>
      <i style="font-style: normal; flex-shrink: 0; border: 1px solid red;">删除</i>
    </div>
    <div class="box" style="flex-shrink: 0; margin-left: 20px;">
      <span class="name">这是第二个</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  overflow: hidden;
  display: flex;
  position: relative;
  border: 1px solid red;
  align-items: center;
  padding: 5px;
}

.box {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 5px;
}

.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
</style>
