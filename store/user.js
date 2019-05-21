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
  async login({ dispatch, commit }) {
    const res = process.env.token
    commit('setToken', res)
    localStorage.setItem('token', res)
    this.$cookies.set('jwt', res, cookieExpireOption)
    await dispatch('getInfo')
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

  // 미들웨어 함수에 의해 호출(~/middleware/check-auth.js)
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
