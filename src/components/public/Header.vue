<template>
  <header class="header">
    <div class="picture">
    </div>
    <div class="nav-bar">
      <img class="nav-img" src="../../static/ASSETS/img/timg.jpg" alt="">
      <i class="nav-down icon" :class="isDropDown === true ? 'icon-angle-up' : 'icon-angle-down'"
         @click="isDropDownShow()"></i>
    </div>
    <DropDown></DropDown>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import DropDown from './DropDown'

export default {
  name: 'Header',
  components: {DropDown},
  methods: {
    isDropDownShow () {
      this.$store.commit('isDropDownShow', {})
    }
  },
  computed: {
    ...mapState({
      isDropDown: state => state.header.isDropDownShow
    })
  }
}
</script>

<style scoped lang="scss">
  .header {
    grid-area: header;
    -ms-grid-column: 1; /*确定该元素所在列*/
    -ms-grid-row: 1;    /*确定该元素所在行*/
    background: #ffffff;
    display: grid;
    display: -ms-grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: ".  picture  nav-bar";

    -ms-grid-columns: 20% 60% 20%;
    -ms-grid-rows: 1fr;

    border-bottom: solid 1px #c1c4c6;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 2;

    .picture {
      grid-area: picture;
      background: url("../../static/ASSETS/logo/logo.svg") no-repeat 50%;
      background-size: 150px;
    }

    .nav-bar {
      grid-area: nav-bar;
      align-self: center;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "nav-img nav-down";

      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr;

      .nav-img {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        overflow: hidden;
        grid-area: nav-img;
        align-self: center;
        justify-self: end;
      }

      .nav-down {
        font-size: 20px;
        grid-area: nav-down;
        align-self: center;
        justify-self: start;
        padding-left: 15px;
        cursor: pointer;
      }
    }
  }
</style>
