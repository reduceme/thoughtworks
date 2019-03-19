<template>
  <div class="hero">
    <Content></Content>
  </div>
</template>

<script>
import Content from '../components/container/Content'

export default {
  name: 'Container',
  components: {Content}
}
</script>

<style scoped lang="scss">
  .hero {
    grid-area: content;
    -ms-grid-column: 1;
    -ms-grid-row: 2;
    -ms-grid-columns: 1fr 1200px 1fr;
    -ms-grid-rows: 1fr;
  }
</style>
