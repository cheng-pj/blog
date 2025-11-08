import { ref } from 'vue'

export function useResizableBox(elementRef) {
  const width = ref(0)
  const isResizing = ref(false)
  
  const startResize = (e) => {
    isResizing.value = true
    if (e.type === 'mousedown') {
      document.addEventListener('mousemove', doResize)
      document.addEventListener('mouseup', stopResize)
    } else {
      document.addEventListener('touchmove', doResize)
      document.addEventListener('touchend', stopResize)
    }
    e.preventDefault()
  }
  
  const doResize = (e) => {
    if (!isResizing.value) return
    
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    const rect = elementRef.value.getBoundingClientRect()
    width.value = clientX - rect.left
  }
  
  const stopResize = () => {
    isResizing.value = false
    document.removeEventListener('mousemove', doResize)
    document.removeEventListener('touchmove', doResize)
    document.removeEventListener('mouseup', stopResize)
    document.removeEventListener('touchend', stopResize)
  }
  
  return {
    width,
    startResize
  }
}
