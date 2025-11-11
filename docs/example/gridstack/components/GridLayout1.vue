<template>
  <div>
    <!-- 外部小部件模板区 -->
    <div class="sidebar">
      <div class="widget-template" data-widget-type="chart">
        📊 图表小部件
      </div>
      <div class="widget-template" data-widget-type="table">
        📋 表格小部件
      </div>
    </div>
    
    <!-- GridStack网格容器 -->
    <div ref="gridContainer" class="grid-stack"></div>
    
    <!-- 动态小部件显示区 -->
    <div class="widgets-container">
      <component
        v-for="(widget, index) in widgets"
        :key="index"
        :is="widget.type"
        :style="widget.style"
        :data="widget.data"
        @remove="removeWidget(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'

// 动态小部件列表
const widgets = ref([])

// GridStack实例引用
const gridContainer = ref(null)
let grid = null

// 初始化GridStack
onMounted(() => {
  grid = GridStack.init({
    column: 12,
    cellHeight: '70px',
    acceptWidgets: true, // 允许接受外部拖拽的小部件
    float: true
  }, gridContainer.value)
  
  // 设置外部元素拖拽
  GridStack.setupDragIn('.widget-template', {
    revert: 'invalid',
    scroll: false
  }, (el, targetGrid) => {
    const widgetType = el.dataset.widgetType
    addWidget(widgetType)
  })
})

// 动态添加小部件
const addWidget = (type) => {
  const newWidget = {
    type: type,
    style: {
      backgroundColor: getRandomColor(),
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      minHeight: '100px'
    },
    data: {} // 可以传递props数据
  }
  
  widgets.value.push(newWidget)
  
  // 下一个tick确保DOM更新后GridStack可以正确布局
  nextTick(() => {
    grid.makeWidget('.grid-stack-item:last-child')
  })
}

// 移除小部件
const removeWidget = (index) => {
  widgets.value.splice(index, 1)
}

// 生成随机颜色
const getRandomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`
}

// 组件卸载时清理
onUnmounted(() => {
  if (grid) {
    grid.destroy()
  }
})
</script>
