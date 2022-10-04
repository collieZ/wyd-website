// const webpack = require('webpack')
module.exports = {
  telemetry: false,
  mode: 'universal',
  /*
   ** Headers of the page
   */

  head: {
    script: [
      {
        src: 'https://hm.baidu.com/hm.js?3Fad1a448e5862eee34e6f799e76cd303c'
      },
      { src: '/jquery.min.js', defer: true }
    ],
    title: 'WYD International Technology Company',
    meta: [
      {
        charset: 'utf-8'
      },
      { name: 'renderer', content: 'webkit' },
      { name: 'referrer', content: 'no-referrer' },
      { name: 'force-renderer', content: 'webkit' },
      {
        name: 'keywords',
        content: 'WYD International Technology Company,巴基斯坦,巴基斯坦签证服务,巴基斯坦市场考察服务,商务考察接待服务,陆运双清关服务,wyd,WYD'
      },
      { name: 'format-detection', content: 'telephone=yes' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '本公司可以对接国内所有企业工厂！有效达成互利共赢的商业合作模式！'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#43863b'
  },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/index.less',
    'assets/css/indexmedia.less',
    'assets/css/color.less'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/map.js', ssr: false },
    { src: '~/plugins/progressive.js', ssr: false },

    { src: '~/plugins/baidupush.js', ssr: false },
    {
      src: '~/plugins/i18n.js'
    },
    {
      src: '~/plugins/localstorage.js',
      ssr: false
    },
    // {
    //   src: '~/plugins/pathConfig.js'
    // },
    // {
    //   src: '~plugins/scrollreveal.js',
    //   ssr: false
    // },
    {
      src: '~plugins/vant',
      ssr: true
    },
    {
      src: '~plugins/swiper.js',
      ssr: false
    },
    {
      src: '~plugins/viewer.js',
      ssr: false
    },
    // {
    //   src: '~plugins/jquery.min.js',
    //   ssr: false
    // },
    {
      src: '~plugins/antd',
      ssr: true
    },
    // {
    //   src: '~plugins/vue-amap.js',
    //   ssr: false
    // },
    // {
    //   src: '~plugins/share.js',
    //   ssr: false
    // },
    // { src: '~plugins/baidu.js', ssr: true },
    // { src: '~plugins/google.js', ssr: true },
    '~/plugins/axios',
    '~/plugins/pathConfig.js'
  ],
  // generate: {
  //   routes: ['/', '/about', '/zh', '/zh/about']
  // },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt', ['cookie-universal-nuxt',
      { parseJSON: true }],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://elpsycongroo7.cn:3000/',
    cacheTime: 1000 * 60 * 60 * 12, // 1天 更新频率,只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    exclude: [
      '/404',
      '/aboutUs/history'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    // {
    //   path: '/sitemapindex.xml',
    //   routes: [
    //       '/',
    //       '/aboutUs',
    //       '/solution',
    //       '/product',
    //       '/apply'
    //   ],
    // },
    sitemaps: [
      {
        path: '/sitemap-home.xml',
        routes: [
          '/'
          // '/aboutUs',
          // '/solution',
          // '/product',
          // '/apply'
        ],
        gzip: true,
        exclude: ['/aboutUs/history']
      }
      // {
      //   path: '/sitemap-sdetail.xml',
      //   routes: [
      //     '/sdetail/306',
      //     '/sdetail/298',
      //     '/sdetail/252',
      //     '/sdetail/285',
      //     '/sdetail/240',
      //     '/sdetail/248',
      //     '/sdetail/314',
      //     '/sdetail/265',
      //     '/sdetail/162',
      //     '/sdetail/177'
      //   ],
      //   gzip: true,
      //   exclude: ['/aboutUs/history']
      // },
      // {
      //   path: '/sitemap-pdetail.xml',
      //   routes: [
      //     '/pdetail/264',
      //     '/pdetail/234',
      //     '/pdetail/228',
      //     '/pdetail/215',
      //     '/pdetail/198',
      //     '/pdetail/192',
      //     '/pdetail/186',
      //     '/pdetail/154',
      //     '/pdetail/171',
      //     '/pdetail/205',
      //     '/pdetail/315'
      //   ],
      //   gzip: true,
      //   exclude: ['/aboutUs/history']
      // }
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/baseApi': {
      target: 'http://192.168.11.132:8081', // api请求路径
      // target: 'http://112.126.62.107:8081', // api请求路径 云环境
      // changeOrigin: true,
      pathRewrite: {
        '^/baseApi': '/'
      } // 重定向请求路径,防止路由、api路径的冲突
    },
    '/enApi': {
      target: 'http://192.168.11.132:8081/', // 英文后台api请求路径
      // target: 'http://112.126.62.107:8081', // 英文后台api请求路径 云环境
      // changeOrigin: true,
      pathRewrite: {
        '^/enApi': '/'
      } // 重定向请求路径,防止路由、api路径的冲突
    }
  },
  cssModules: {
    modules: true,
    localIdentName: '[local]_[hash:base64:8]'
  },
  router: {
    base: '/wyd/',
    // customize nuxt.js router (vue-router).
    middleware: 'me' // middleware all pages of the application
  },
  /*
   ** Build configuration
   */
  server: {
    host: '0.0.0.0', // default: localhost,
    port: 3000
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['ant-design-vue', /vant.*?less/],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: 'css' // 如果需要使用 less 方式去按需加载的话,则需要改为 true ,并且添加下面loaders 配置
          },
          'ant-design-vue'
        ],
        [
          'import',
          {
            libraryName: 'vant',
            'style': (name) => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ]
      ]
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
          // modifyVars 可用来自定义主题
          // modifyVars: {
          //   "primary-color": "#41b883",
          //   "layout-body-background": "#fff"
          // }
        }
      }
    },
    publicPath: '',
    vendor: ['vue-apexchart', 'vue-i18n'],
    // css文件外部引入
    extractCSS: true,
    extend (config, ctx) {
      // const vueLoader = config.module.rules.find(
      //   rule => rule.loader === 'vue-loader'
      // )
      // vueLoader.options.transformToRequire = {
      //   img: 'src',
      //   image: 'xlink:href',
      //   'b-img': 'src',
      //   'b-img-lazy': ['src', 'blank-src'],
      //   'b-card': 'img-src',
      //   'b-card-img': 'img-src',
      //   'b-carousel-slide': 'img-src',
      //   'b-embed': 'src'
      // }
    }
  }
}
