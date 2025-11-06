<template>
  <!--demo1-->
  <div class="main">
    <div class="box">
      <span class="name">这是一段文字，它将在超出后出现三个点</span>
      <i class="icon">删除</i>
    </div>
    <div class="box" style="flex-shrink: 0; margin-left: 20px;">
      <span class="name">这是第二个</span>
    </div>
  </div>
  
  <!--demo2-->
  <div class="main" style="margin-top: 20px;">
    <div class="box" style="flex-shrink: 0;">
      <span class="name">这是第二个</span>
    </div>
    
    <div class="box" style="margin-left: 20px;">
      <span class="name">这是一段文字，它将在超出后出现三个点</span>
      <i class="icon">删除</i>
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
  padding: 12px;
  resize: horizontal;
  max-width: 100%;
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

.icon {
  font-style: normal;
  flex-shrink: 0;
  border: 1px solid red;
  margin-left: 10px;
}
</style>
