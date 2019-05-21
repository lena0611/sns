if (process.env.NODE_ENV !== 'production') require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    title: 'sns',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'desc' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    token: process.env.TOKEN,
    api: process.env.API
  },
  // https://blog.lichter.io/posts/change-the-nuxtjs-server-error-page
  messages: {
    loading: 'Loading...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    nuxtjs: 'Nuxt.js',
    back_to_home: 'Back to the home page',
    server_error_details:
      'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details:
      'An error occurred while rendering the page. Check developer tools console for details.'
  },
  loading: '~/components/loading',
  css: ['~/assets/scss/main.scss'],
  plugins: ['~/plugins/axios', '~/plugins/i18n', '~/plugins/parseMessage'],
  router: {
    middleware: 'check-auth'
  },
  modules: [
    '@nuxtjs/dotenv',
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
      target: process.env.api,
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
