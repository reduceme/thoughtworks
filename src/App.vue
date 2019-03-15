<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/public/Header'

export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
#app {
  display: grid;
  background: #f3f3f3;
  grid-template-columns: auto 1200px auto;
  grid-template-rows: 80px 1200px 40px;
  grid-template-areas: "header header header"
  ".      hero   ."
  "footer footer footer";

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d4054;
  font-size: 14px;
}
</style>
