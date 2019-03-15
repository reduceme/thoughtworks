<template>
    <aside class="aside"></aside>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style scoped lang="scss">
.aside{
  grid-area: aside;
  background: #2d4054;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50% 50%;
  grid-template-areas: "aside-bar"
    "aside-history"
}
</style>
