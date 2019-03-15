<template>
  <header class="header">
    <div class="picture">
    </div>
    <div class="nav-bar">
      nav-bar
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header{
    grid-area: header;
    background: #ffffff;

    display: grid;
    grid-template-columns: auto 1200px auto;
    grid-template-rows: auto;
    grid-template-areas: ".  picture  nav-bar";

    border-bottom: solid 1px #c1c4c6;
    box-shadow: 0 1px 1px #c1c4c6;
  }

  .picture{
    grid-area: picture;
    background: url("../../static/ASSETS/logo/logo.svg") no-repeat 50%;
    background-size: 10%;
  }

  .nav-bar{
    grid-area: nav-bar;
  }
</style>
