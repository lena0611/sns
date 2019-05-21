export default {
  methods: {
    objectDeepCopy(obj) {
      let clone = {}
      for (let i in obj) {
        if (typeof obj[i] == 'object' && obj[i] != null) {
          clone[i] = cloneObject(obj[i])
        } else {
          clone[i] = obj[i]
        }
      }
      return clone
    }
  }
}
