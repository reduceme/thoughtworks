<template>
  <div class="add-os-modal" v-show="modalShow" :style="{top: top + 'px', left: left + 'px'}">
    <div class="modal-title">
      <div class="modal-title-one">Separate multiple resource name with commas</div>
      <div class="modal-title-two">
        <i class="icon icon-close" @click="isModalShow()"></i>
      </div>
    </div>
    <div class="modal-input">
      <input type="text" placeholder="e.g.Chrome,Firefox" :value="addOSInfo" @input="updateAddOSInfo">
    </div>
    <div class="modal-btn">
      <div class="float modal-btn-one" @click="addOS()">Add Resources</div>
      <div class="float modal-btn-two" @click="isModalShow()">Cancel</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddOSModal',
  computed: {
    ...mapState({
      modalShow: state => state.agents.modalInfo.modalShow,
      top: state => state.agents.modalInfo.top,
      left: state => state.agents.modalInfo.left,
      addOSInfo: state => state.agents.addOSInfo
    })
  },
  methods: {
    isModalShow () {
      this.$store.commit('isModalShow', {
        isShow: false,
        left: 0,
        top: 0
      })
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.$store.commit('changeTop', {
        top: scrollTop
      })
    },
    updateAddOSInfo (e) {
      this.$store.commit('updateAddOSInfo', e.target.value)
    },
    ...mapActions([
      'addOS'
    ])
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  .add-os-modal {
    .icon{
      font-size: 25px;
      color: #00B4CF;
      cursor: pointer;
    }
    position: fixed;
    padding: 0 15px;
    width: 600px;
    height: 170px;
    border: solid 1px #00b4cf;
    z-index: 9999;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "modal-title"
    "modal-input"
    "modal-btn";

    .modal-title{
      grid-area: modal-title;
      display: grid;
      grid-template-columns: 500px 100px;
      grid-template-rows: 1fr;
      grid-template-areas: "modal-title-one modal-title-two";

      .modal-title-one{
        grid-area: modal-title-one;
        padding-bottom: 10px;
        justify-self: start;
        align-self: end;
      }

      .modal-title-two{
        padding-top: 5px;
        justify-self: end;
        align-self: start;
      }
    }

    .modal-input{
      grid-area: modal-input;
      input{
        width: 100%;
        height: 35px;
        text-indent: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        &:focus{
          border-color: #66afe9;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        }
      }
    }

    .modal-btn{
      grid-area: modal-btn;

      .modal-btn-one{
        background: #00b4cf;
        color: #fff;
      }

      .modal-btn-two{
        background: #2d4054;
        color: #fff;
      }
    }
  }
</style>
