<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="a"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$width:100px;
$height:100px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a{
  width:$width;
  height:$height;
  background:red;
}
</style>
