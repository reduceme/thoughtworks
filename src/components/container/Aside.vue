<template>
  <aside class="aside">
    <ul class="aside-ul">
      <li v-for="(item, index) in menuList" :key="index" :class="$route.path===item.path?'active':''"
          @click="linkTo(item.path)">
        <span :class="item.icon"></span>
        <a>{{item.name}}</a>
      </li>
    </ul>

    <ul class="history-ul">
      <li class="history-title">History</li>
      <li class="list-li" v-for="(item, index) in historyData" :key="index">{{item.name}}</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      loginUser: '',
      menuList: this.$router.options.routes[0].children,
      historyData: [{
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '111111111111111111111111111111111111111111111111'
      }, {
        name: '222222222222222222222222'
      }, {
        name: '333333333333333333333333'
      }, {
        name: '444444444444444444444444'
      }, {
        name: '555555555555555555555555'
      }, {
        name: '666666666666666666666666'
      }, {
        name: '777777777777777777777777'
      }, {
        name: '888888888888888888888888'
      }, {
        name: '999999999999999999999999'
      }, {
        name: '111111111111111111111111'
      }, {
        name: '222222222222222222222222'
      }]
    }
  },
  methods: {
    linkTo (url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped lang="scss">
  @import '../../static/ASSETS/font icons/fonts.css';

  .aside {
    grid-area: aside;
    background: #2d4054;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 50% 50%;
    grid-template-areas: "aside-bar" "aside-history"
  }

  .aside-ul {
    grid-area: aside-bar;
    padding-top: 10px;

    .active {
      background: #435466;
      color: #00B4CF;

      a {
        color: #00B4CF;
      }
    }

    li:hover {
      background: #435466;
      color: #00B4CF;
    }

    li:hover a {
      color: #00B4CF;
    }

    li {
      cursor: pointer;
      display: grid;
      grid-template-columns: 33% 67%;
      grid-template-rows: 45px;
      grid-template-areas: "icon fonts";

      list-style: none;
      color: #ffffff;

      span {
        grid-area: icon;
        justify-self: end;
        align-self: center;
        font-size: 20px;
        padding-right: 15px;
      }

      a {
        grid-area: fonts;
        justify-self: start;
        align-self: center;
        font-size: 14px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }

  .history-ul {
    grid-area: aside-history;
    align-self: end;
    text-align: left;
    padding: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: calc(100% - 30px);

    .history-title {
      font-size: 24px;
      color: #ccc;
      list-style: none;
    }

    .list-li {
      width: 100%;
      cursor: pointer;
      padding: 2px;
      color: #ccc;
      font-size: 12px;
      list-style-position: inside;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .list-li:hover {
      color: #00B4CF;
    }
  }
</style>
