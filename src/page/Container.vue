<template>
  <div class="hero">
    <Aside></Aside>
    <Content></Content>
  </div>
</template>

<script>
import Aside from '../components/container/Aside'
import Content from '../components/container/Content'
export default {
  name: 'Container',
  components: {Content, Aside}
}
</script>

<style scoped lang="scss">
  .hero {
    grid-area: hero;

    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    grid-template-areas: "aside content"
  }
</style>
