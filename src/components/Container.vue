<template>
  <div class="hero">
    <Aside></Aside>
  </div>
</template>

<script>
import Aside from './Aside'
export default {
  name: 'Container',
  components: {Aside}
}
</script>

<style scoped lang="scss">
  .hero{
    grid-area: hero;

    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    grid-template-areas: "aside contain"
  }
</style>
