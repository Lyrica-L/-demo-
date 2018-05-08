<template>
  <div id="app">
    <LeftNav></LeftNav>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';

export default {
  name: 'App',
  components: { LeftNav }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
