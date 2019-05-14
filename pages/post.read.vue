<template>
  <div>post read</div>
</template>

<script>
export default {
  fetch({ params, store }) {
    store.commit('setLastHomeId', params.homeId)
    store.commit('setLastPostId', params.postId)
  }
}
</script>
