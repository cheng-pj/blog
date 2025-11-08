<script setup lang="ts">
import { useData } from 'vitepress'
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption
type ECharts = echarts.ECharts

interface Props {
  chartId: string
}

const { chartId = '' } = defineProps<Props>()

const chartContainer = useTemplateRef<HTMLDivElement>('chartContainer')
let resizeObserver = reactive(<ResizeObserver>{})
let chart = reactive(<ECharts>{})
const { isDark } = useData()

onUnmounted(() => {
  if (chartContainer.value) {
    resizeObserver.unobserve(chartContainer.value)
  }
  resizeObserver.disconnect()
  
  chart?.dispose()
})

onMounted(() => {
  nextTick(async () => {
    initChart()
    handleResizeObserver()
  })
})

/**
 * 响应式处理
 */
const handleResizeObserver = () => {
  resizeObserver = new ResizeObserver(entries => {
    chart?.resize()
  })
  
  if (chartContainer.value) {
    resizeObserver.observe(chartContainer.value)
  }
}

const chartDom = useTemplateRef<HTMLElement>(chartId || '')

/**
 * 初始化图表
 */
const initChart = () => {
  chart = echarts.init(chartDom.value, isDark ? 'dark' : '', {
    renderer: 'svg'
  })
  
  chart.setOption(options.value)
}

const options = computed((): EChartsOption => {
  return {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    grid: {
      left: '12%',
      right: '5%'
    },
    legend: [
      {
        icon: 'circle',
        data: ['数量1', '数量2'],
        top: 300,
        itemGap: 30,
        textStyle: {
          padding: [0, 0, 0, -8]
        }
      }
    ],
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          show: true,
          margin: 16
        },
        // 刻度线
        axisTick: {
          alignWithLabel: true,
          length: 10
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: true,
        axisLabel: {
          show: true,
          margin: 20
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '数量1',
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#fa5561'
        },
        data: [150, 230, 224, 218, 135, 147, 260]
      },
      {
        name: '数量2',
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#698bf9'
        },
        data: [20, 100, 124, 318, 235, 207, 360]
      }
    ]
  }
})
</script>

<template>
  <div class="chartContainer" ref="chartContainer">
    <div :ref="chartId" style="width: 100%; height: 100%"></div>
  </div>
</template>

<style scoped>
.chartContainer {
  border: 1px dashed #ddd;
  resize: horizontal;
  max-width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>
