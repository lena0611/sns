import { messages } from '~/i18n/messages.js'
// export const strict = false
export const state = () => ({
  lang: 'ko',
  messages
})

export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('-----nuxtServerInit------')
    let lang
    if (!req.headers.lang) {
      lang = req.headers['accept-language'].split(',')[0].split('-')[0]
    } else {
      lang = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('lang='))
    }
    lang = lang === 'ko' ? 'ko' : 'en'
    // Cookie.set('lang', lang, { expires: 7 })
    commit('setLang', lang)
  }
}
