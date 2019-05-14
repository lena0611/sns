import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // https://blog.lichter.io/posts/change-the-nuxtjs-server-error-page
  messages: {
    error_404: '페이지를 찾을 수 없습니다.\n이용에 불편을 드려 죄송합니다.'
  },
  loading: '~/components/loading',
  css: ['~/assets/scss/main.scss'],
  plugins: ['~/plugins/axios', '~/plugins/i18n'],
  router: {
    middleware: 'check-auth'
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://github.com/nuxt-community/router-module#readme
    ['@nuxtjs/router', { path: 'router/' }]
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {
    // Doc: https://github.com/nuxt-community/proxy-module
    '/api/': {
      target: 'https://api.cyworld.co.kr',
      pathRewrite: { '^/api/': '' },
      secure: false
    }
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  build: {
    // Doc: https://github.com/nuxt/docs/blob/master/en/api/configuration-build.md
    extractCSS: process.env.NODE_ENV === 'production',
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
          browsers: [
            'last 2 versions',
            '> 1%',
            'ie >=11',
            'iOS >= 10',
            'Android >= 4.3'
          ]
        }
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
