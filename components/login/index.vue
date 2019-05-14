<template>
  <div>
    <button v-if="$store.state.user.info === null" @click="login">
      {{ $msg('button.login') }}
    </button>
    <template v-else>
      {{ $store.state.user.info.name }}
      <button @click="logout">
        {{ $msg('button.logout') }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
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
