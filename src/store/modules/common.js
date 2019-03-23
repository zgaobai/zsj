const state = {
  community: {}, // 社区信息
  userInfo: {},
  openId: ''
  // openId: 'owR0l1iwXQ3-VFaCbs1tDn3M8qoU' // 用户标识
}

const mutations = {
  set_community (state, obj) {
    state.community = obj
  },
  set_userInfo(state, obj) {
    state.userInfo = obj
  },
  set_openId(state, str) {
    state.openId = str
  }
}

export default {
  state,
  mutations
}