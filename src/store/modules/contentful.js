import { client } from '@/helpers/api'
export default {
  namespaced: true,
  state: {
    actionBar: [],
    navbar: [],
    mainCard: [],
    secondCard: [],
    secondCardImage: [],
    helpSection: [],
    aboutUs: [],
  },
  actions: {
    async fetchActionBarContent({ commit }) {
      let { fields } = await client.getEntry('ZsVnPlHfE6D5zfCq2rVoT')
      commit('setActionBarContent', fields)
    },
    async fetchNavbarContent({ commit }) {
      let { fields } = await client.getEntry('6rZKL6twRhjfmZdlD9Qvub')
      commit('setNavbarContent', fields)
    },
    async fetchMainCardContent({ commit }) {
      let { fields } = await client.getEntry('YYmxU1WWVAfo5NKyFkxVW')
      commit('setMainCardContent', fields)
    },
    async fetchSecondCardContent({ commit }) {
      let { fields } = await client.getEntry('2L3NkcEG4R6gsESQJgqKRE')
      commit('setSecondCardContent', fields)
    },
    async fetchSecondCardImage({ commit }) {
      let { fields } = await client.getEntry('419DCOAQy71CLXIbpjNAsb')
      commit('setSecondCardContentImage', fields)
    },
    async fetchHelpSectionContent({ commit }) {
      let { fields } = await client.getEntry('hYNbeu9yhoLnPvQ1IZBsN')
      commit('setHelpSectionContent', fields)
    },
    async fetchAboutUsContent({ commit }) {
      let { fields } = await client.getEntry('tbgRM8phn8sYySFCQJ5tc')
      console.log(fields)
      commit('setAboutUsContent', fields)
    },
  },
  mutations: {
    setActionBarContent(state, content) {
      state.actionBar = content
    },
    setNavbarContent(state, content) {
      state.navbar = content
    },
    setMainCardContent(state, content) {
      state.mainCard = content
    },
    setSecondCardContent(state, content) {
      state.secondCard = content
    },
    setSecondCardContentImage(state, content) {
      state.secondCardImage = content
    },
    setHelpSectionContent(state, content) {
      state.helpSection = content
    },
    setAboutUsContent(state, content) {
      state.aboutUs = content
    },
  },
  getters: {
    getActionBarContent: state => {
      return state.actionBar
    },
    getNavbarContent: state => {
      return state.navbar
    },
    getMainCardContent: state => {
      return state.mainCard
    },
    getSecondCardContent: state => {
      return state.secondCard
    },
    getSecondCardContentImage: state => {
      return state.secondCardImage
    },
    getHelpSectionContent: state => {
      return state.helpSection
    },
    getAboutUsContent: state => {
      return state.aboutUs
    },
  },
}
