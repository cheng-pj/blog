<template>
  <div style="text-align: center;">
    <div class="text">404</div>
    <button style="margin-top: 20px">渐变按钮</button>
  </div>
</template>

<style scoped>
.text {
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  font-weight: bold;
  height: 100px;
}

button {
  background:
  radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00),
  radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00);
  
  padding: 10px;
  font-size: 32px;
  border-radius: 12px;
  transition: all 0.3s;
  color: #ffffff;
}
</style>
