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
  }
</style>
