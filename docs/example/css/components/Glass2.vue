<template>
  <div class="container my-root flex-center">
    <div class="box1"></div>
    <div class="box2"></div>
    
    <!--毛玻璃效果-->
    <div class="close-icon flex-center">文字</div>
  </div>
</template>

<style scoped>
/*毛玻璃效果*/
.close-icon {
  width: 200px;
  height: 200px;
  font-size: 32px;
  border-radius: 50%;
  color: #000000;
  box-shadow: 0 3px 4px 0 #0003;
  border-width: 1px;
  border-style: solid;
  border-color: color-mix(in oklab, #fff 50%, transparent);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
}

.my-root {
  --width: 300px;
  --height: 300px;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: var(--width);
  height: var(--height);
  border-width: 2px;
  border-style: solid;
  border-color: color-mix(in oklab, #fff 50%, transparent);
  background: #ffffff;
  box-shadow: 0 3px 4px 0 #0003;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.box1 {
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background: #fd4f5d;
  position: absolute;
  top: -120px;
  left: -120px;
}

.box2 {
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background: #286ed4;
  position: absolute;
  right: -120px;
  bottom: -120px;
}
</style>
