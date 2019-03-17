import Vue from 'vue'
import Vuex from 'vuex'

import agents from './modules/agents'
import header from './modules/header'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    agents,
    header
  }
})
