<template>
  <div class="drop-down" v-show="isDropDown">
    <div class="profile">
      <i class="icon-id-card"></i>
      <div class="profile-title">Profile</div>
    </div>
    <div class="sign-out">
      <i class="icon-sign-in"></i>
      <div class="sign-out-title">Sign Out</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DropDown',
  computed: {
    ...mapState({
      isDropDown: state => state.agents.isDropDownShow
    })
  }
}
</script>

<style scoped lang="scss">
.drop-down{
  position: fixed;
  width: 150px;
  height: 80px;
  background: #fff;
  border: solid 1px #c1c4c6;
  box-shadow: 0 1px 1px #c1c4c6;
  top: 90px;
  left: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px;
  grid-template-areas: "profile"
  "sign-out";
  padding: 10px 0;

  .profile{
    grid-area: profile;
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "profile-icon profile-title";
    cursor: pointer;

    .icon-id-card {
      grid-area: profile-icon;
      font-size: 20px;
      align-self: center;
    }

    .profile-title{
      grid-area: profile-title;
      justify-self: start;
      align-self: center;
    }

    &:hover{
      background: #efefef;
    }
  }
  .sign-out{
    grid-area: sign-out;
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "icon-sign-in sign-out-title";
    cursor: pointer;

    .icon-sign-in {
      grid-area: icon-sign-in;
      font-size: 20px;
      align-self: center;
    }

    .sign-out-title{
      grid-area: sign-out-title;
      justify-self: start;
      align-self: center;
    }

    &:hover{
      background: #efefef;
    }
  }
}
</style>
