<template>
  <div>
    <button v-if="$store.state.user.info === null" @click="login">
      로그인
    </button>
    <template v-else>
      {{ $store.state.user.info.name }}
      <button @click="logout">
        로그아웃
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
