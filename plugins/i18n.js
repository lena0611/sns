/* eslint no-new-func: "off" */
export default ({ app, store }, inject) => {
  inject('msg', strObj => {
    const staticMessage = `this.state.messages.${strObj}[this.state.lang]`
    return new Function('return (' + staticMessage + ')').bind(store)()
  })
}
