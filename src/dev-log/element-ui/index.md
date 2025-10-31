---
title: element el-select
---

# 下拉框变态全选

::: code-group
```vue [demo1.vue]
<el-select v-model="orderSource" @change="onChangeOrderSource" filterable clearable multiple collapse-tags>
  <el-option v-for="item in orderSourceList" :key="item.code" :label="item.name" :value="item.code"/>
</el-select>
```

```ts [demo1.ts]
export default {
  data() {
    return {
      orderSource: [],
      // 订单来源列表
      orderSourceList: [],
      oldOrderSourceList: [],
    }
  },
  
  methods: {
    /**
     * 监听订单来源选择
     * @param val 返回当前选择的所有值
     */
    onChangeOrderSource(val) {
      const isAll = val.includes('')
      
      const allVal = this.orderSourceList.map(item => item.code)
      // 拿到上一次的值，可以进行对比
      const oldVal = this.oldOrderSourceList
      
      // 已选中全部
      if (isAll) this.orderSource = allVal
      
      // 取消全部选中 上次有 当前没有 表示取消全选
      if (oldVal.includes('') && !val.includes('')) this.orderSource = []
      
      // 点击非全部选中 需要排除全部选中 以及 当前点击的选项
      // 新老数据都有全部选中
      if (oldVal.includes('') && val.includes('')) {
        this.orderSource = val.filter(v => v !== '')
      }
      
      // 全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
      if (!oldVal.includes('') && !val.includes('') && val.length === this.orderSourceList.length - 1) {
        this.orderSource = allVal
      }
      
      this.oldOrderSourceList = [...this.orderSource]
    }
  }
}
```

<DemoElSelectMul/>
