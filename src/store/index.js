import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation'
import contentful from './modules/contentful'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation,
    contentful,
  },
})
