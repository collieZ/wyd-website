// import { setBaseUrl } from '../config/index'
const URLS = {
  'zh': 'baseApi',
  'en': 'enApi'
}
// import { parseCookie } from '../utils/index'
const utils = require('../utils/index')
// vuex存储全局状态数量
export const state = () => ({
  // 是否处于手机模式
  isPhone: false,
  browser: '',
  // 顶部菜单栏的激活项
  menuIndex: 0,
  pruductList: [],
  solutionList: [],
  // 底部菜单是否显示
  tabbarShow: true,
  // 顶部菜单是否显示
  topbarShow: true,
  // 画室详细信息
  paintingInfo: null,
  // 当前文章分类名
  articleCategory: '',
  user: null,
  isLogin: false,
  loginDialogShow: false,
  loginDialogType: 'login',
  locales: ['zh', 'en'],
  locale: 'zh',
  baseConfig: null,
  baseUrl: 'baseApi'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_BASEURL (state, url) {
    if (!url) {
      state.baseUrl = 'baseApi'
      return
    }
    state.baseUrl = url
  },
  changeIsPhone (state, isPhone) {
    state.isPhone = isPhone
  },
  changeBrowser (state, browser) {
    state.browser = browser
  },
  changePruductList (state, arr) {
    state.pruductList = arr
  },
  changeSolutionList (state, arr) {
    state.solutionList = arr
  },
  setBaseConfig (state, baseConfig) {
    state.baseConfig = baseConfig
  },
  // 设置当前选中菜单 index
  changeMenuIndex (state, menuIndex) {
    state.menuIndex = menuIndex
  },
  changeTabbarShow (state, show) {
    state.tabbarShow = show
  },
  changTopbarShow (state, show) {
    state.topbarShow = show
  },
  setPaintingInfo (state, paintingInfo) {
    state.paintingInfo = paintingInfo
  },
  setArticleCategory (state, category) {
    state.articleCategory = category
  },
  changeUser (state, user) {
    state.user = user
  },
  changeIsLogin (state, isLogin) {
    state.isLogin = isLogin
  },
  changeLoginDialogShow (state, show) {
    state.loginDialogShow = show
  },
  changeLoginDialogType (state, type) {
    state.loginDialogType = type
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }, { req, res, app }) {
    const baseConfig = await app.$axios({
      method: 'get',
      url: '/config.json'
    })
    // 初次加载同步浏览器端和服务端数据
    app.i18n.locale = state.locale
    const cookiesJson = utils.parseCookie(req.headers.cookie)
    const lang = cookiesJson.lang || 'zh'
    // let lang = req.ctx && req.ctx.cookies.get('lang') || 'zh'
    app.i18n.locale = lang
    // 根据当前语言切换图片服务器地址，存入store中
    // if (lang === 'zh') {
    //   baseConfig.data.ApiUrl.baseApi = baseConfig.data.ApiUrl.baseApiZh
    // } else {
    //   baseConfig.data.ApiUrl.baseApi = baseConfig.data.ApiUrl.baseApiEn
    // }
    // app.baseConfig = baseConfig.data
    // commit('setBaseConfig', baseConfig.data)
    // commit('SET_LANG', lang)
    // commit('SET_BASEURL', URLS[lang])
  }
}
