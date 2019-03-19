<template>
  <div class="content-list">
    <div class="os-list" v-for="item in osList" :key="item.id">
      <div class="os-icon">
        <img :src="baseImg[item.os]">
      </div>
      <div class="os-info">
        <div class="os-detail">
          <div class="name self">
            <i class="icon icon-desktop"></i>
            <span class="os-name">{{item.name}}</span>
          </div>
          <div class="status self" :class="item.status === 'building' ? 'orange' : 'green'">{{item.status}}</div>
          <div class="ip self">
            <i class="icon icon-info"></i>
            <span class="os-ip">{{item.ip}}</span>
          </div>
          <div class="location self">
            <i class="icon icon-folder"></i>
            <span class="os-ip">{{item.location}}</span>
          </div>
        </div>
        <div class="os-function">
          <div class="os-btn self">
            <div class="float blue-btn add-os icon-plus" @click="getCoordinate(this, $event), getItem(item)"></div>
            <div :key="itemList" class="float delete-os icon-trash-after" v-for="itemList in item.resources" @click="deleteOSFn(item, itemList)">{{itemList}}</div>
          </div>
          <div class="os-deny self">
            <div v-show="item.status === 'building'" class="deny blue-btn icon icon-deny">deny</div>
          </div>
        </div>
      </div>
    </div>
    <AddOSModal></AddOSModal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddOSModal from './AddOSModal'

import windows from '../../static/assets/osIcons/windows.png'
import ubuntu from '../../static/assets/osIcons/ubuntu.png'
import suse from '../../static/assets/osIcons/suse.png'
import debian from '../../static/assets/osIcons/debian.png'
import centos from '../../static/assets/osIcons/centos.png'

export default {
  name: 'ContentList',
  components: {AddOSModal},
  data () {
    return {
      baseImg: {
        centos: centos,
        debian: debian,
        suse: suse,
        ubuntu: ubuntu,
        windows: windows
      }
    }
  },
  methods: {
    getCoordinate (_this, e) {
      let coordinate = e.currentTarget.getBoundingClientRect()
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let scroll = document.body.scrollHeight - scrollTop - coordinate.y - 177
      if (scroll < 150) {
        this.$store.commit('isModalShow', {
          isShow: true,
          left: coordinate.x,
          top: coordinate.y + scrollTop - 177 - 80,
          position: false
        })
        return
      }
      this.$store.commit('isModalShow', {
        isShow: true,
        left: coordinate.x,
        top: coordinate.y + scrollTop,
        position: true
      })
    },
    getItem (item) {
      this.$store.commit('getItem', {
        id: item.id,
        osInfo: item
      })
    },
    deleteOSFn (item, itemDetail) {
      this.$store.commit('getItem', {
        id: item.id,
        osInfo: item
      })
      this.$store.commit('updateAddOSInfo', itemDetail)
      this.deleteOS()
    },
    ...mapActions([
      'deleteOS'
    ])
  },
  computed: {
    ...mapState({
      osList: state => state.agents.osList
    })
  }
}
</script>

<style scoped lang="scss">
  .orange{
    background: #ff9a2a;
    width: 70px;
  }

  .green{
    background: #7fbc39;
    width: 50px;
  }

  .content-list {
    grid-area: content-list;

    .os-list {
      height: auto;
      background: #fff;

      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 110px 1fr;
      grid-template-areas: "os-icon os-info";
      margin-bottom: 20px;

      .os-icon {
        grid-area: os-icon;
        align-self: center;

        img{
          width: 80px;
          height: 80px;
        }
      }

      .os-info {
        grid-area: os-info;
        display: grid;
        grid-template-rows: 55px 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "os-detail"
        "os-function";
        font-size: 14px;

        .os-detail{
          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: 40% 10% 20% 30%;
          grid-template-areas: "name status ip location";

          .icon {
            font-size: 16px;
          }

          .self{
            align-self: center;
            justify-self: start;
          }
          .name{
            grid-area: name;
            .os-name{
              color: #00b4cf;
            }
          }

          .status{
            grid-area: status;
          }

          .ip{
            grid-area: ip;
          }
        }

        .os-function{
          grid-area: os-function;
          display: grid;
          grid-template-columns: 80% 20%;
          grid-template-rows: 1fr;
          grid-template-areas: "os-btn os-deny";

          .os-btn{
            grid-area: os-btn;
            .add-os{
              font-size: 18px;
              width: 25px;
              padding: 6px;
              margin-bottom: 10px;
            }

            .delete-os{
              background: #efefef;
              font-size: 14px;
              padding: 7px;
              min-width: 80px;
              display: block;
              margin-bottom: 10px;
            }
          }

          .os-deny{
            grid-area: os-deny;

            .deny{
              width: 72px;
              padding: 8px;
              text-align: left;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
