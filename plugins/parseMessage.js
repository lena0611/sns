/* eslint no-new-func: "off" */
export default (context, inject) => {
  inject(
    'decodeErrorMessage',
    (errorObject, spilitOperator = '+', joinOperator = ' ') => {
      return decodeURIComponent(errorObject.response.headers['error.message'])
        .split(spilitOperator)
        .join(joinOperator)
    }
  )
}
