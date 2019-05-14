export default context => {
  context.store.dispatch('user/initAuth', context)
}
