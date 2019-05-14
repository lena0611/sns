import { cookieExpireOption } from '~/utils/cookie'

export const state = () => ({
  token: null,
  info: null
})

export const getters = {
  isLoggedOn(state) {
    return state.info !== null
  },
  isOwner(state, getters, rootState, rootGetters) {
    if (state.info !== null) {
      return state.info.identity === rootState.lastHomeId
    } else {
      return false
    }
  }
}

export const mutations = {
  setInfo(state, info) {
    state.info = info
  },
  setToken(state, token) {
    state.token = token
  },
  unsetInfo(state) {
    state.info = null
  },
  unsetToken(state) {
    state.token = null
  }
}

export const actions = {
  login({ dispatch, commit }) {
    const res = 'c2be5b67081388523cfc9db350205ddb845a9ce1'
    commit('setToken', res)
    localStorage.setItem('token', res)
    this.$cookies.set('jwt', res, cookieExpireOption)
    dispatch('getInfo')
  },
  logout({ commit }) {
    commit('unsetToken')
    commit('unsetInfo')
    this.$cookies.removeAll()
    localStorage.clear()
  },
  async getInfo({ commit }) {
    const { loginUser } = await this.$axios.$get('/api/app')
    commit('setInfo', loginUser)
    localStorage.setItem('userInfo', JSON.stringify(loginUser))
    this.$cookies.set('userInfo', JSON.stringify(loginUser), cookieExpireOption)
    return loginUser
  },
  initAuth({ commit }, { app, req }) {
    let token, userInfo
    // sever-side
    if (req) {
      token = app.$cookies.get('jwt')
      userInfo = app.$cookies.get('userInfo')
    }
    // client-side
    else {
      token = localStorage.getItem('token')
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
    if (token && userInfo) {
      commit('setToken', token)
      commit('setInfo', userInfo)
    }
  }
}
