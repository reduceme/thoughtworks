<template>
  <footer class="footer">
    © Copyright 2017 ThoughtWorks
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer{
  grid-area: footer;
  align-items: center;
  background: #fff;
  line-height: 40px;
  border: solid 1px #c1c4c6;
  box-shadow: 0 1px 1px #c1c4c6;
  position: fixed;
  /*position: absolute;*/
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
