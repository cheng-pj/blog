<script setup lang="ts">
import { useResizableBox } from './useResizableBox'

const resizableDiv = useTemplateRef('resizableDiv')

const {
  width,
  startResize
} = useResizableBox(resizableDiv)

// 组件挂载时设置初始宽度
onMounted(() => {
  nextTick(() => {
    if (resizableDiv.value) {
      width.value = resizableDiv.value.getBoundingClientRect().width
    }
  })
})

</script>

<template>
  <div
    ref="resizableDiv"
    class="resizable-box"
    :style="{ width: width? width + 'px': '' }"
  >
    <!--蓝色手柄-->
    <div
      class="resizable-btn"
      @mousedown="startResize"
      @touchstart="startResize"
      @touchmove.prevent></div>
    
    <slot/>
  </div>
</template>

<style scoped>
.resizable-box {
  background: var(--vp-c-bg);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  min-width: 200px;
  transition: box-shadow 0.3s ease;
  touch-action: none; /* 防止触摸默认行为 */
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
}

.resizable-btn {
  position: absolute;
  top: 0;
  right: -5px;
  width: 10px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 100%;
    height: 40px;
    background: #3498db;
    border-radius: 24px;
    transition: all 0.2s ease;
  }
  
  &:hover::after {
    background: #2980b9;
    width: 20px;
  }
  
  &:active::after {
    background: #1a5276;
    width: 20px;
  }
}
</style>
