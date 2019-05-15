<template>
  <div>
    <div v-if="error">
      {{ error.message }}
    </div>
    <div v-else>
      {{ posts }}
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: homeMapState } = createNamespacedHelpers('home')

export default {
  computed: {
    ...homeMapState({
      error: state => state.error.ownerInfo,
      posts: state => state.posts
    })
  }
}
</script>
