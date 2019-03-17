<template>
  <div class="content-list">
    <div class="os-list" v-for="item in osList" :key="item.id">
      <div class="os-icon">
        <img :src="getImg(item.os)"/>
        <!--<img src="../../static/ASSETS/osIcons/windows.png">-->
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
            <div class="float add-os icon-plus" @click="getCoordinate(this, $event), getItem(item)"></div>
            <div :key="itemList" class="float delete-os icon-trash-after" v-for="itemList in item.resources" @click="deleteOSFn(item, itemList)">{{itemList}}</div>
          </div>
          <div class="os-deny self">
            <div v-show="item.status === 'building'" class="deny icon icon-deny">deny</div>
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

export default {
  name: 'ContentList',
  components: {AddOSModal},
  methods: {
    getImg (os) {
      const imgUrl = '/static/ASSETS/osIcons/'
      console.log(imgUrl + os + '.png')
      return imgUrl + os + '.png'
    },
    getCoordinate (_this, e) {
      let coordinate = e.currentTarget.getBoundingClientRect()
      this.$store.commit('isModalShow', {
        isShow: true,
        left: coordinate.x,
        top: coordinate.y
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
    /*overflow-y: scroll;*/
    /*overflow-x: hidden;*/

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
              background: #00b4cf;
              width: 25px;
              color: #fff;
              padding: 6px;
              margin-bottom: 10px;
            }

            .delete-os{
              background: #efefef;
              font-size: 14px;
              padding: 7px;
              width: 80px;
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
              background: #00b4cf;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
