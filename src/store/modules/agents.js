import axios from 'axios'

const state = {
  osList: [],
  status: {
    building: 0,
    idle: 0
  },
  osType: {
    allCount: 0,
    physical: 0,
    virtual: 0
  },
  modalInfo: {
    modalShow: false,
    left: 0,
    top: 0,
    tmpTop: 0,
    position: true
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
    state.modalInfo.position = commit.position
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
  getOSList () {
    for (let i in state.osType) {
      state.osType[i] = 0
    }
    for (let i in state.status) {
      state.status[i] = 0
    }
    axios.get('http://localhost:3001/agents')
      .then(function (res) {
        if (res.status === 200) {
          state.osList = res.data
          state.osType.allCount = state.osList.length
          for (let i = 0; i < state.osList.length; i++) {
            let item = state.osList[i]
            if (item.type === 'physical') {
              state.osType.physical++
            } else {
              state.osType.virtual++
            }
            if (item.status === 'building') {
              state.status.building++
            } else {
              state.status.idle++
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
  deleteOS () {
    state.osInfo.resources.splice(state.osInfo.resources.findIndex(item => item === state.addOSInfo), 1)
    axios.put('http://localhost:3001/agents/' + state.osId, state.osInfo)
      .then(function (res) {
        if (res.status === 200) {
          actions.getOSList({})
          state.addOSInfo = ''
        } else {
          console.log('操作失败')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  addOS () {
    let addOSInfoArr = state.addOSInfo.split(',').filter(item => item !== '')
    state.osInfo.resources = (Array.from(new Set(state.osInfo.resources.concat(addOSInfoArr))))
    console.log(state.osInfo.resources)
    axios.put('http://localhost:3001/agents/' + state.osId, state.osInfo)
      .then(function (res) {
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
