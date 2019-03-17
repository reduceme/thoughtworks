const state = {
  isDropDownShow: false
}

const mutations = {
  isDropDownShow (state, commit) {
    state.isDropDownShow = !state.isDropDownShow
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
