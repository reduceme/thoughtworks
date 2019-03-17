import axios from 'axios'

// const imgUrl = '../../static/ASSETS/osIcons/'

const state = {
  osList: [],
  building: 0,
  idle: 0,
  osType: {
    all: 0,
    physical: 0,
    virtual: 0
  },
  modalInfo: {
    modalShow: false,
    left: 0,
    top: 0,
    tmpTop: 0
  },
  osId: undefined,
  osInfo: {},
  addOSInfo: ''
}

const mutations = {
  isModalShow (state, commit) {
    state.modalInfo.modalShow = commit.isShow
    state.modalInfo.left = commit.left - 20
    state.modalInfo.top = commit.top + 55
    state.modalInfo.tmpTop = commit.top + 55
  },
  changeTop (state, commit) {
    state.modalInfo.top = state.modalInfo.tmpTop - commit.top
  },
  getItem (state, commit) {
    state.osId = commit.id
    state.osInfo = commit.osInfo
  },
  updateAddOSInfo (state, commit) {
    state.addOSInfo = commit
  }
}

const actions = {
  getOSList ({commit, state}) {
    axios.get('http://localhost:3001/agents')
      .then(function (res) {
        if (res.status === 200) {
          state.osList = res.data
          state.osList.all = state.osList.length
          for (let i = 0; i < state.osList.length; i++) {
            let item = state.osList[i]
            if (item.type === 'physical') {
              state.osType.physical++
            } else {
              state.osType.virtual++
            }
            if (item.status === 'building') {
              state.building++
            } else {
              state.idle++
            }
          }
        } else {
          console.log(('获取数据失败'))
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  deleteOS ({commit, state}) {
    state.osInfo.resources.splice(state.osInfo.resources.findIndex(item => item === state.addOSInfo), 1)
    // state.osInfo.resources.splice(state.osInfo.resources.findIndex(item => item.id === 8), 1)
    axios.put('http://localhost:3001/agents/' + state.osId, state.osInfo)
      .then(function (res) {
        if (res.status === 200) {
          actions.getOSList()
          state.addOSInfo = ''
        } else {
          console.log('操作失败')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  addOS ({commit, state}) {
    state.osInfo.resources = Array.from(new Set(state.osInfo.resources.concat(state.addOSInfo.split(','))))
    axios.put('http://localhost:3001/agents/' + state.osId, state.osInfo)
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          actions.getOSList()
          state.modalInfo.modalShow = false
          state.addOSInfo = ''
        } else {
          console.log('操作失败')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
