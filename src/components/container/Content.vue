<template>
  <section class="content">
    <ContentTopBar></ContentTopBar>
    <NavBar></NavBar>
  </section>
</template>

<script>
import ContentTopBar from './ContentTopBar'
import NavBar from './NavBar'
export default {
  name: 'Content',
  components: {NavBar, ContentTopBar}
}
</script>

<style scoped lang="scss">
.content {
  padding: 15px 25px;
  grid-area: content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 144px 50px 1fr;
  grid-template-areas: "content-top-bar"
  "content-nav-bar"
  "content-list";
  grid-gap: 15px 0;
}
</style>
