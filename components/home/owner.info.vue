<template>
  <div v-if="!error" class="home-owner-info">
    {{ isOwner ? '나의홈' : '타인의홈' }}
    <div>
      {{ homeInfo }}
    </div>
    <hr />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: userMapGetters } = createNamespacedHelpers('user')
const { mapState: homeMapState } = createNamespacedHelpers('home')

export default {
  computed: {
    ...userMapGetters(['isOwner']),
    ...homeMapState({
      homeInfo: state => state.ownerInfo,
      error: state => state.error.ownerInfo
    })
  }
}
</script>
