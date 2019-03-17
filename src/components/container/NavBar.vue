<template>
  <ul class="content-nav-bar">
    <li class="all active">All</li>
    <li class="physical">Physical</li>
    <li class="virtual">Virtual</li>
    <li class="search">
      <i class="icon icon-search"></i>
      <input type="text"/>
    </li>
    <li class="icon icon-th-card"></li>
    <li class="icon icon-th-list"></li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
  .content-nav-bar {
    grid-area: content-nav-bar;

    li {
      position: relative;
      cursor: pointer;
    }

    list-style: none;
    line-height: 50px;
    background: #fff;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 100px 100px 100px 1fr 40px 40px;
    grid-template-areas: "all physical virtual search icon-th-card icon-th-list";

    .all {
      grid-area: all;
    }

    .physical {
      grid-area: physical;
    }

    .virtual {
      grid-area: virtual;
    }

    .icon {
      font-size: 20px;
    }

    .search {
      grid-area: search;

      position: relative;
      padding: 0 30px;
      .icon-search {
        position: absolute;
        top: 15px;
        left: 35px;
        color: #2d405f;
      }
      input {
        background: #efefef;
        height: 30px;
        width: 170px;
        border: solid 1px #e1e4e6;
        text-indent:30px;
      }
    }

    .icon-th-card {
      grid-area: icon-th-card;
    }

    .icon-th-list {
      grid-area: icon-th-list;
      color: #00b4cf;
    }

    .icon-th-list, .icon-th-card, .search {
      align-self: center;
      justify-self: start;
    }

    .virtual, .physical, .all {
      align-self: stretch;
      border-right: solid 1px #e1e4e6;
    }

    .active {
      color: #00b4cf;
      &:after{
        display: block;
        content: '';
        width: 100%;
        height: 3px;
        background: #00b4cf;
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>
