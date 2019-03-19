<template>
  <div>
    <div class="triangle" v-show="modalShow" :style="{top: top - 35 + 'px', left: left + 32 + 'px'}"></div>
    <div class="triangle-two" v-show="modalShow" :style="{top: top - 29 + 'px', left: left + 35 + 'px'}"></div>
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
        <div class="float blue-btn modal-btn-one" @click="addOS()">Add Resources</div>
        <div class="float modal-btn-two" @click="isModalShow()">Cancel</div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'

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
    updateAddOSInfo (e) {
      this.$store.commit('updateAddOSInfo', e.target.value)
    },
    ...mapActions([
      'addOS'
    ])
  }
}
</script>

<style scoped lang="scss">
  .triangle {
    /*position: fixed;*/
    position: absolute;
    /*width: 10px;*/
    /*height: 10px;*/
    /*background: transparent;*/
    border-width: 18px;
    border-style: solid;
    border-color: transparent transparent #00b4cf transparent;
    z-index: 1;

    /*top: -11px;
    left: 50%;
    margin-left: -11px;
    border-top-width: 0;
    !*border-color: transparent transparent #00b4cf transparent;*!
    border-bottom-color: #00b4cf;
    border-bottom-color: rgba(0,0,0,.25);*/
  }
  .triangle-two {
    content: '';
    /*position: fixed;*/
    position: absolute;
    width: 0;
    height: 0;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    z-index: 2;
  }

  .add-os-modal {
    .icon {
      font-size: 25px;
      color: #00B4CF;
      cursor: pointer;
    }
    box-shadow:0 4px 4px rgba(0, 0, 0, 0.3);
    /*position: fixed;*/
    position: absolute;
    padding: 0 15px;
    width: 570px;
    height: 170px;
    border: solid 1px #00b4cf;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "modal-title" "modal-input" "modal-btn";

    .modal-title {
      grid-area: modal-title;
      display: grid;
      grid-template-columns: 470px 100px;
      grid-template-rows: 1fr;
      grid-template-areas: "modal-title-one modal-title-two";

      .modal-title-one {
        grid-area: modal-title-one;
        padding-bottom: 10px;
        justify-self: start;
        align-self: end;
      }

      .modal-title-two {
        padding-top: 5px;
        justify-self: end;
        align-self: start;
      }
    }

    .modal-input {
      grid-area: modal-input;

      input {
        width: 100%;
        height: 35px;
        text-indent: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;

        &:focus {
          border-color: #66afe9;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        }
      }
    }

    .modal-btn {
      grid-area: modal-btn;

      .modal-btn-one {
        /*background: #00b4cf;
        color: #fff;
        &:hover{
          background: #01869a;
        }*/
      }

      .modal-btn-two {
        background: #2d4054;
        color: #fff;
        &:hover{
          background: #01869a;
        }
      }
    }
  }
</style>
