<template>
  <input placeholder="请输入...">
</template>

<style scoped lang="scss">
input {
  border: 2px solid var(--vp-c-divider);
  padding: 10px;
  border-radius: 8px;
  
  &::-webkit-input-placeholder {
    color: var(--vp-c-brand-1);
  }
  
  /* Firefox 18- */
  &:-moz-placeholder {
    color: var(--vp-c-brand-1);
  }
  
  /* Firefox 19+ */
  &::-moz-placeholder {
    color: var(--vp-c-brand-1);
  }
  
  &:-ms-input-placeholder {
    color: var(--vp-c-brand-1);
  }
}
</style>
