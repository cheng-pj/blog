<script setup lang="ts">
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'

const isDrag = ref(false)
const grid = ref<GridStack>()
const cellHeight = ref('50px')

onMounted(() => {
  grid.value = GridStack.init({
    // handle: '.card-header', 指定触发拖拽事件的类名
    column: 12,
    margin: '5px',
    cellHeight: cellHeight.value,
    /*
    'list'将项目视为已排序列表，保持其顺序不变（除非列表过大）。
    'compact'类似于列表，但使用 compact() 方法通过重新排序来填充空位。
    'moveScale'按新列数/旧列数的比例缩放和移动项目
    'move'只移动物品，保持其尺寸不变。
    'scale'仅缩放物品，保持其位置不变
    'none'除非项目不适合新的列数，否则请保持项目不变
     */
    layout: 'move',
    // disableResize: true,
    float: true,
  })
  
  grid.value.on('dragstart', function (event, el) {
    isDrag.value = true
  })
  
  grid.value.on('dragstop', function (event, el) {
    isDrag.value = false
  })
  
  grid.value.on('resizestart', function (event, el) {
    isDrag.value = true
  })
  
  grid.value.on('resizestop', function (event, el) {
    isDrag.value = false
  })
})
</script>

<template>
  <div class="container-container">
    <div class="grid-stack-wrapper" :class="{ 'drag-edit': isDrag }">
      <div class="grid-stack">
        <div
          class="grid-stack-item ui-resizable-autohide"
          gs-w="3"
          gs-h="3"
          min-w="3"
          min-h="3"
        >
          <div class="grid-stack-item-content">
            <div class="card-header">滑动到标题拖拽</div>
            <div class="card-content">面板的其余内容不会拖动</div>
          </div>
        </div>
        
        <div
          class="grid-stack-item ui-resizable-autohide"
          gs-h="3"
          gs-w="6"
          gs-x="1"
          gs-y="3"
        >
          <div class="grid-stack-item-content">
            <div class="card-header">滑动到标题拖拽</div>
            <div class="card-content">面板的其余内容不会拖动</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div>
  
  </div>
</template>

<style scoped lang="scss">
.container-container {
  --gutter: 10px; /*间隔10px*/
  --cell-height: v-bind(cellHeight); /*行高*/
  
  min-width: 500px;
  height: 500px;
  overflow: auto;
  position: relative;
  background-color: #f7f8fa;
}

.grid-stack-wrapper {
  background: #f7f8fa;
  min-height: 100%;
  padding: 5px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #edeff2;
    background-image: linear-gradient(0deg, #f7f8fa var(--gutter), transparent 0.1em),
    linear-gradient(90deg, #f7f8fa var(--gutter), transparent 0.1em);
    background-size: calc((100% / 12) - calc(10px / 12)) var(--cell-height);
    background-attachment: local, scroll;
    background-position-y: 10px;
    transition: all 0.3s ease-in-out;
    z-index: 0;
    opacity: 0;
  }
  
  &.drag-edit:after {
    opacity: 1;
  }
}

.grid-stack {
  .grid-stack-item {
    z-index: 1;
  }
}


.grid-stack-item-content {
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 #2d2d2e33, 0 0 2px 0 #2d2d2e0d;
  transition: box-shadow .2s ease;
  cursor: move;
  color: #333333;
  
  &:hover {
    box-shadow: 0 12px 10px 0 rgba(31, 31, 31, .1), 0 0 2px 0 rgba(31, 31, 31, .2);
  }
}

:deep(.grid-stack-animate) {
  .grid-stack-item.grid-stack-placeholder {
    z-index: 1;
    transition: left .2s, top .2s, height .2s, width .2s !important;
  }
}

/*自定义*/
.card-header {
  margin: 0;
  cursor: move;
  min-height: 25px;
  border-bottom: 1px solid #edeff2;
  padding: 10px 15px;
}

.card-content {
  padding: 15px;
}
</style>
