<script setup lang="ts">

</script>

<template>
  <div class="demo-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.demo-container {
  margin: 16px 0;
  border-radius: 8px;
  padding: 16px 16px;
  line-height: 24px;
  font-size: var(--vp-custom-block-font-size);
  color: var(--vp-c-text-2);
  border-color: var(--vp-custom-block-details-border);
  color: var(--vp-custom-block-details-text);
  background-color: var(--vp-custom-block-details-bg);
}
</style>
