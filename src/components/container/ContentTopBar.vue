<template>
  <div class="content-top-bar">
    <div class="left-bar">
      <div class="left-bar-title title">Building</div>
      <div class="left-bar-icon cog">
        <span class="icon-cog icon-span"></span>
      </div>
      <div class="left-bar-num">{{status.building}}</div>
    </div>

    <div class="center-bar">
      <div class="left-bar-title title">Idle</div>
      <div class="left-bar-icon">
        <span class="icon-coffee icon-span"></span>
      </div>
      <div class="left-bar-num">{{status.idle}}</div>
    </div>

    <div class="right-bar">
      <div class="right-title right-bar-left-title">ALL</div>
      <div class="right-title right-bar-center-title">PHYSICAL</div>
      <div class="right-title right-bar-right-title">VIRTUAL</div>
      <div class="right-num right-bar-left-num">{{osType.allCount}}</div>
      <div class="right-num right-bar-center-num">{{osType.physical}}</div>
      <div class="right-num right-bar-right-num">{{osType.virtual}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContentTopBar',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      status: state => state.agents.status,
      osType: state => state.agents.osType
    })
  }
}
</script>

<style lang="scss">
@import "../../static/ASSETS/font icons/fonts.css";

@-webkit-keyframes rotation{
  from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
  to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}

.content-top-bar{
  grid-area: content-top-bar;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left-bar center-bar right-bar";
  grid-gap: 15px 30px;

  .title{
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    padding: 20px 0 0 10px;
  }

  .left-bar-num{
    font-size: 48px;
    color: #fff;
    align-self: end;
  }

  .left-bar {
    background-color: #ff9a2a;
    grid-area: left-bar;

    display: grid;
    grid-template-columns: 30% 50% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: "left-bar-title center-bar-icon right-bar-num";

    .left-bar-title {
      grid-area: left-bar-title;
    }

    .cog{
      animation: rotation 2s linear infinite;
      -moz-animation: rotation 2s linear infinite;
      -webkit-animation: rotation 2s linear infinite;
      -o-animation: rotation 2s linear infinite;
    }
  }

  .center-bar{
    background-color: #7fbc39;
    grid-area: center-bar;

    display: grid;
    grid-template-columns: 30% 50% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: "center-bar-title center-bar-icon center-bar-num";
    .center-bar-icon {
      grid-area: center-bar-icon;
    }
  }

  .right-bar{
    background-color: #fff;
    grid-area: right-bar;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "right-bar-left-title right-bar-center-title right-bar-right-title"
    "right-bar-left-num right-bar-center-num right-bar-right-num";

    .right-title{
      font-size: 12px;
    }

    .right-num{
      font-size: 20px;
    }

    .right-bar-left-title{
      grid-area: right-bar-left-title;
      align-self: center;
    }

    .right-bar-center-title{
      grid-area: right-bar-center-title;
      align-self: center;
    }

    .right-bar-right-title {
      grid-area: right-bar-right-title;
      align-self: center;
    }

    .right-bar-left-num {
      grid-area: right-bar-left-num;
      align-self: start;
    }

    .right-bar-center-num {
      grid-area: right-bar-center-num;
      align-self: start;
    }

    .right-bar-right-num{
      grid-area: right-bar-right-num;
      align-self: start;
    }
  }

  .icon-span{
    font-size: 144px;
    opacity: 0.2;
    color: #fff;
  }
}
</style>
