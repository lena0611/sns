<template>
  <div>
    <button v-if="!isLoggedOn" @click="login">
      {{ $msg('button.login') }}
    </button>
    <template v-else>
      {{ info.name }}
      <button @click="logout">
        {{ $msg('button.logout') }}
      </button>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: userMapState,
  mapGetters: userMapGetters
} = createNamespacedHelpers('user')

export default {
  computed: {
    ...userMapState({
      info: state => state.info
    }),
    ...userMapGetters(['isLoggedOn'])
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="scss">
.center {
  font-size: $body-font-size;
  @include pos-center;
  display: flex;
}
</style>
