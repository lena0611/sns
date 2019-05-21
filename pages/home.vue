<template>
  <div>
    <cy-home-owner-info />
    <cy-home-post-list />
    <nuxt-link to="/">인덱스로 가기</nuxt-link>
  </div>
</template>

<script>
import HomeOwnerInfo from '~/components/home/owner.info'
import HomePostList from '~/components/home/post.list'

export default {
  components: {
    cyHomeOwnerInfo: HomeOwnerInfo,
    cyHomePostList: HomePostList
  },
  async fetch({ app, params, store }) {
    const homeId = params.homeId
    try {
      await store.dispatch('home/getOwnerInfo', { homeId })
      store.commit('setLastHomeId', homeId)
    } catch (e) {
      store.commit('home/setErrorOwnerInfo', {
        code: e.response.status,
        type: e.response.headers['error.code'],
        message: app.$decodeErrorMessage(e)
      })
    }
  }
}
</script>
