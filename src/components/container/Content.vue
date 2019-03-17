<template>
  <section class="content">
    <ContentTopBar></ContentTopBar>
    <NavBar></NavBar>
    <ContentList></ContentList>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

import ContentTopBar from './ContentTopBar'
import NavBar from './NavBar'
import ContentList from './ContentList'
export default {
  name: 'Content',
  components: {ContentList, NavBar, ContentTopBar},
  methods: {
    ...mapActions([
      'getOSList'
    ])
  },
  created () {
    this.getOSList()
  }
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
  color: #2d4054;
  overflow-x: scroll;
  overflow: hidden;
}
</style>
