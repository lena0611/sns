<template>
  <div>
    {{ isOwner ? '나의홈' : '타인의홈' }}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: userMapGetters } = createNamespacedHelpers('user')

export default {
  computed: {
    ...userMapGetters(['isOwner'])
  },
  fetch({ params, store }) {
    store.commit('setLastHomeId', params.homeId)
  }
}
</script>
