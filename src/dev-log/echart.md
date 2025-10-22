# EChart

## resize()
> 监听父级元素大小时响应效果明显，没有报错

```ts
export default {
  beforeDestroy() {
    this.resizeObserver.unobserve(document.getElementById('chartContainer'))
    this.resizeObserver.disconnect()
    
    this.chart?.dispose()
  },
  mounted() {
    this.$nextTick(async () => {
      await this.initChart()
      await this.handleResizeObserver()
    })
  },
  methods: {
    /**
     * 响应式处理
     */
    handleResizeObserver() {
      this.resizeObserver = new ResizeObserver(entries => {
        this.chart?.resize()
      })
      this.resizeObserver.observe(document.getElementById('chartContainer'))
    },
  }
}
```
