

<script setup lang="ts">
import { useData } from 'vitepress'
import * as echarts from 'echarts';

const props = defineProps({
  chartId: String
})

const resizeObserver = reactive({})
let chart = reactive({})
const { isDark } = useData()

onUnmounted(() => {
  resizeObserver.unobserve(document.getElementById('chartContainer'))
  resizeObserver.disconnect()
  
  chart?.dispose()
})

onMounted(() => {
  this.$nextTick(async () => {
    await initChart()
    await handleResizeObserver()
  })
})

/**
 * 响应式处理
 */
const handleResizeObserver=()=> {
  this.resizeObserver = new ResizeObserver(entries => {
    chart?.resize()
  })
  resizeObserver.observe(document.getElementById('chartContainer'))
}

/**
 * 初始化图表
 */
const initChart = ()=> {
  const chartDom = this.$refs[this.chartId]
  

  
  chart = echarts.init(chartDom,isDark ? 'dark' : '', {
    renderer: 'svg'
  })
  
  chart.setOption(this.option)
}
</script>

<template>
  <div class="chartContainer">
    <div :ref="chartId"></div>
  </div>
</template>

<style scoped>
.chartContainer {
  resize: both;
}
</style>
