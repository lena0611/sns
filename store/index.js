import { messages } from '~/i18n/messages'
import { cookieExpireOption } from '~/utils/cookie'

// export const strict = false

export const state = () => ({
  lang: 'ko',
  lastHomeId: null,
  lastPostId: null,
  messages
})

export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  },
  setLastHomeId(state, homeId) {
    state.lastHomeId = homeId
  },
  setLastPostId(state, postId) {
    state.lastPostId = postId
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req, app }) {
    let lang
    if (!req.headers.lang) {
      lang = req.headers['accept-language'].split(',')[0].split('-')[0]
    } else {
      lang = app.$cookies.get('lang')
    }
    lang = lang === 'ko' ? 'ko' : 'en'
    app.$cookies.set('lang', lang, cookieExpireOption) // 7days
    commit('setLang', lang)
  }
}
