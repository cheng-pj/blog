![lifecycle_zh](.\images\lifecycle_zh.png)

## defineProps()

### js写法

```js
const props = defineProps({
	foo: {type: String, required: true},
	bar: Number
})
```

### ts写法

```typescript
interface propType {
	foo: string
	bar?: number
}

const props = defineProps<propsType>()

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

## defineEmits()

### js写法

```javascript
// 运行时
const emit = defineEmits(['change', 'update'])
```

### ts写法

```typescript
interface emitType {
	(e: 'change', id: number): void

	(e: 'update', value: string): void
}

// 基于类型
const emits = defineEmits<emitType>()
emits('change', 1)
emits('update', '父组件定义@update')
```

> 

