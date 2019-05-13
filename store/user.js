export const state = () => ({
  token: null,
  info: null
})

export const mutations = {
  setInfo(state, info) {
    state.info = info
  },
  setToken(state, token) {
    state.token = token
  },
  unsetInfo(state, info) {
    state.info = null
  },
  unsetToken(state, token) {
    state.token = null
  }
}

export const actions = {
  login({ dispatch, commit }) {
    const res = 'c2be5b67081388523cfc9db350205ddb845a9ce1'
    commit('setToken', res)
    dispatch('getInfo')
  },
  logout({ commit }) {
    commit('unsetToken')
    commit('unsetInfo')
  },
  async getInfo({ commit }) {
    const res = await this.$axios.$get('/api/app')
    commit('setInfo', res.loginUser)
  }
}
