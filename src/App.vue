<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: auto 1200px auto;
  grid-template-rows: 80px 1000px 40px;
  grid-template-areas: "header header header"
  ".      hero   ."
  "footer footer footer";
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
