const pkg = require('./package');
const config = require('./_config/app');

module.exports = {
  mode: 'hash',
  srcDir: __dirname,
  // cache: true,
  router: {
    middleware: 'i18n'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Главная',
    titleTemplate: 'ProExchanger | %s',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&amp;subset=cyrillic'
      }
    ],
    script: [

    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00bfa5',
    height: '2px'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/font-awesome.min.css',
    '~assets/css/main.css',
    '~assets/css/check_order.css',
    '~assets/css/proexchange_main.css',
    '~assets/css/fonts.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/airbrake.js',
    '~/plugins/rest-api.js',
    {
      src: '~/plugins/vue-notifications.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-carousel.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-to.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-highcharts.js',
      ssr: false
    },
    {
      src: '~/plugins/v-tabs.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-select.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-editor.js',
      ssr: false
    },
    '~/plugins/i18n.js'
  ],


  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },


  proxy: {
    // Simple proxy
    '/service/': {
      target: config.serviceUrl,
      pathRewrite: {
        '^/service/': '/'
      }
    },
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    vendor: ['vue-i18n', 'izitoast', 'vue-notifications', 'vue-carousel', 'vue-highcharts', '~/components/v-tabs', 'vue-select', 'vue2-editor']
  },
  generate: {
    routes: ['/', '/ru', '/en']
  }
};
