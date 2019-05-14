<template>
  <div>
    <cy-login />
    <nuxt-link to="/home/16077990">16077990 (타인홈)</nuxt-link>
    <nuxt-link to="/home/ALG76BCH">ALG76BCH (내홈)</nuxt-link>
  </div>
</template>

<script>
import Login from '~/components/login'
export default {
  components: {
    cyLogin: Login
  }
}
</script>
