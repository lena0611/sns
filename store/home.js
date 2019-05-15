export const state = () => ({
  ownerInfo: null,
  posts: {
    postList: [],
    totalCount: 0
  },
  error: {
    ownerInfo: null,
    postList: null
  }
})

export const mutations = {
  setOwnerInfo(state, info) {
    state.ownerInfo = info
  },
  setErrorOwnerInfo(state, error) {
    state.error.ownerInfo = error
    state.ownerInfo = null
    state.posts = { postList: [], totalCount: 0 }
  },
  setClearErrorOwnerInfo(state) {
    state.error.ownerInfo = null
  },
  setPosts(state, { postList, totalCount }) {
    state.posts = { postList, totalCount }
  },
  setErrorPosts(state, error) {
    state.error.posts = error
    state.ownerInfo = null
    state.posts = { postList: [], totalCount: 0 }
  },
  setClearErrorPosts(state) {
    state.error.posts = null
  }
}

export const actions = {
  // 마이홈 유저의 정보
  async getOwnerInfo({ commit, dispatch }, { homeId }) {
    const res = await this.$axios.$get(`/api/home/${homeId}`)
    await dispatch('getPosts', { homeId })
    commit('setOwnerInfo', res)
    commit('setClearErrorOwnerInfo')
  },
  // 마이홈 포스트 리스트
  async getPosts({ commit }, { homeId }) {
    const res = await this.$axios.$get(`/api/mashup/${homeId}/lastest`)
    commit('setPosts', res)
    commit('setClearErrorPosts')
  }
}
