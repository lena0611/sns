export default ({ $axios, store }) => {
  $axios.onRequest(config => {
    config.headers.lang = store.state.lang
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
  })
}
