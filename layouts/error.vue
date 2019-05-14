<template>
  <div class="container">
    <!-- 404 Page not Found -->
    <div v-if="error.statusCode === 404" class="error-text">
      {{ error.message }}
    </div>

    <!-- 500 Server error -->
    <div v-else>
      <!-- 이곳에 500컴퍼넌트 -->
      Server error
    </div>

    <div
      v-if="
        error.statusCode === 404 &&
          error.message ===
            '페이지를 찾을 수 없습니다.\n이용에 불편을 드려 죄송합니다.'
      "
      class="error-desc"
    >
      네트워크 또는 서비스에 일시적인 오류가 발생하였거나,<br />게시글 변경,
      삭제 등에 의해 현재 이용이 불가한 상태일 수 있습니다.
    </div>
    <div class="btn-center-wrap">
      <nuxt-link to="/" class="btn-goHome">
        싸이메인으로 이동
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'notFound',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scope>
html {
  background: none;
}
.error-text {
  font-size: 34px;
  line-height: 50px;
  text-align: center;
  white-space: pre;
  letter-spacing: -2px;
  padding: 80px 0;
  color: #5d5d5d;
}
.btn-goHome {
  height: 60px;
  font-size: 20px;
  border-radius: 30px;
  padding: 0 30px;
  color: #fff;
  border: none;
  background-color: #96cddf;
  margin: 0 2px;
  display: inline-block;
  line-height: 60px;
  width: 228px;
  box-sizing: border-box;
  text-decoration: none;
}
.btn-center-wrap {
  text-align: center;
}
.error-desc {
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  width: 400px;
  letter-spacing: -1px;
  line-height: 1.5;
  margin: 0 auto 50px;
  padding-bottom: 100px;
}
</style>
