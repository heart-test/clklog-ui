import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  // cologStyle:{
  //   $pv : "#215cac",
  //   $uv: "#fe547b",
  //   $visitCount : "#619cec",
  //   $ipCount: "#96bdf2",
  //   $bounceRate : "#cadef9",
  // }
  cologStyle:{
    $pv : "#fe547b",
    $uv: "#cd0835",
    $visitCount : "#ffde84",
    $ipCount: "#fe547b",
    $bounceRate : "#e4b2d8",
  }
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

