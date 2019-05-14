<template>
  <div>
    <button v-if="info === null" @click="login">
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
const { mapState: userMapState } = createNamespacedHelpers('user')
export default {
  computed: {
    ...userMapState({
      info: state => state.info
    })
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
