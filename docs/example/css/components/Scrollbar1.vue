<template>
  <div class="container">
    <div class="list-wrapper">
      <ul>
        <li v-for="item in 20">item-{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  overflow: hidden;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  
  .list-wrapper {
    // 想要让滚动条出现，必须要限制容器高度
    // 当元素高度写在.container时，overflow: auto不会生效
    overflow: auto;
    height: 300px;
    
    // 定义滚动条高宽及背景高宽分别对应横竖滚动条的尺寸
    &::-webkit-scrollbar {
      width: 20px; // Y轴
      height: 15px; // X轴
    }
    
    // 定义滑块颜色+圆角
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #3e63dd;
      cursor: pointer;
    }
    
    // 定义滚动条轨道内阴影+圆角
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: #eeeeee;
      box-shadow: inset 0 0 4px 1px rgba(99, 99, 99, 0.3);
    }
    
    // 控制上面两部分按钮样式
    &::-webkit-scrollbar-button {
      //display: none;
    }
    
    // 根据实际情况进行调试
    &::-webkit-scrollbar-track-piece {
      //background-color: rgba(230, 13, 13, 0.45);
      //box-shadow: inset 0 0 6px rgba(230, 13, 13, 0.45);
    }
  }
  
  ul {
    list-style: none;
    padding: 0 15px;
    
    li {
      padding: 10px 0;
      border-bottom: 1px solid rgba(144, 147, 153, .3);
    }
  }
}
</style>
<script setup lang="ts">
</script>
