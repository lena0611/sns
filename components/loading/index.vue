<template>
  <transition name="fade">
    <div v-if="loading" class="loading-page">
      <div class="inner" />
    </div>
  </transition>
</template>

<script>
// https://ko.nuxtjs.org/api/configuration-loading/
// 메서드	필수여부	설명
// start()	Required	경로가 변경될 때 호출되며, 그 시점에 컴포넌트가 보여집니다.
// finish()	Required	경로가 로드되었을 때(그리고 데이터가 fetch 되었을 때) 호출되며, 그 시점에 컴포넌트를 숨깁니다.
// fail()	Optional	경로가 로드되지 않았을 때 호출됩니다 (예를들어 데이터가 fetch에 실패했을 때).
// increase(num)	Optional	경로가 로딩중인 동안, num 정수가 100보다 작을 때 호출됩니다.
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  z-index: 8888;
  justify-content: center;
  align-items: center;
}
.inner {
  position: relative;
  width: 80px;
  height: 80px;
  transition: height 0.2s ease;
  background: url('http://c1img.cyworld.co.kr/img/cy_v3/svg/bangle.ani.svg')
    no-repeat 0 0;
}
</style>
