<template>
  <ResizableBox>
    <p>DEMO 1:</p>
    <div class="main">
      <div class="box">
        <span class="name">这是一段文字，它将在超出后出现三个点</span>
        <i class="icon">删除</i>
      </div>
      <div class="box" style="flex-shrink: 0; margin-left: 20px;">
        <span class="name">》</span>
      </div>
    </div>
    
    <hr/>
    <p>DEMO 2:</p>
    <div class="main">
      <div class="box" style="flex-shrink: 0;">
        <span class="name">图标</span>
      </div>
      
      <div class="box" style="margin-left: 20px;">
        <span class="name">这是一段文字，它将在超出后出现三个点</span>
        <i class="icon">删除</i>
      </div>
    </div>
  </ResizableBox>
</template>

<style scoped>
.main {
  overflow: hidden;
  border: 1px solid #fd4f5d;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}

.box {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fd4f5d;
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
  font-size: 12px;
  flex-shrink: 0;
  border: 1px solid #fd4f5d;
  margin-left: 10px;
  padding: 2px 5px;
}
</style>
