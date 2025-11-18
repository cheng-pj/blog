<template>
  <div class="progress-dashboard__wrap progress-blue">
    <div class="progress-dashboard__container">
      
      <!--进度条-->
      <div :id="chartId" class="progress-chart"></div>
      
      <div class="progress-dashboard__pointer" :style="{'transform': `rotate(${deg}deg)`}">
        <img src="./pointer_b.png" class="pointer" alt="指针"/>
      </div>
      
      <div class="progress-dashboard__title">{{ title }}</div>
    </div>
    
    <div class="progress-dashboard__value">
      <div class="value-text">
        <span>{{ value }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    chartId: {
      type: String,
      default: 'dashboardId'
    },
    value: {
      type: Number,
      default: 70
    },
    title: String,
    type: String
  },
  data() {
    return {
      deg: 0,
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loadData()
      }, 500)
    })
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  watch: {
    value: {
      immediate: false,
      handler() {
        this.$nextTick(() => {
          setTimeout(() => {
            this.loadData()
          }, 500)
        })
      }
    }
  },
  methods: {
    loadData() {
      const maxDeg = 180
      const curDeg = this.value / 100 * maxDeg
      this.deg = curDeg > 180 ? 180 : curDeg
      
      this.$nextTick(() => this.initChart())
    },
    
    initChart() {
      const chartDom = document.getElementById(this.chartId)
      this.chart = echarts.init(chartDom, 'light', {
        renderer: 'svg'
      })
      
      this.chart.setOption({
        series: [
          {
            center: ['50%', '93%'],
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            radius: '153%',
            progress: {
              show: true,
              roundCap: true,
              width: 5,
              itemStyle: {
                color: this.handleProgressColor()
              }
            },
            pointer: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            detail: { show: false },
            emphasis: { disabled: true },
            data: [this.value]
          }
        ]
      })
    },
    
    /**
     * 处理进度条颜色
     * @returns {null}
     */
    handleProgressColor() {
      return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: '#00DCB2' },
        { offset: 1, color: '#136BF0' }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-blue {
  .progress-dashboard__container {
    background: url("./bg_b.png") no-repeat center;
  }
  
  .value-text {
    color: #136bf0;
    border: 1px solid #5694f1;
  }
}

.progress-dashboard__wrap {
  width: 176px;
  
  .progress-dashboard__container {
    position: relative;
    width: 176px;
    height: 94px;
    background-size: cover;
    
    .progress-chart {
      width: 100%;
      height: 94px;
    }
  }
  
  .progress-dashboard__title {
    font-size: 12px;
    font-weight: bold;
    color: #666666;
    line-height: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
  }
  
  .progress-dashboard__pointer {
    width: 72px;
    height: 11px;
    position: absolute;
    bottom: 0;
    left: 16px;
    transform-origin: right;
    transform: rotate(0deg);
    transition: transform 0.5s cubic-bezier(0.45, 0.23, 0.22, 1);
    
    .pointer {
      display: block;
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }
}

.progress-dashboard__value {
  text-align: center;
  margin-top: 5px;
  
  .value-text {
    font-size: 16px;
    font-weight: bolder;
    line-height: 27px;
    height: 27px;
    border-radius: 17px;
    padding: 0 10px;
    display: inline-block;
    text-align: center;
  }
}
</style>
