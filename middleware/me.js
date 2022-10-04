const utils = require('../utils/index')
export default async function ({ isHMR, app, store, route, params, error, redirect, req }) {
  // If the user is not authenticated
  // if (!store.state.isLogin) {
  //   store.commit('changeLoginDialogShow', true);
  //   return redirect('/');
  // }

  // console.log('ip==>', req.headers['x-forwarded-for'], req.headers['x-real-ip'], '\r\n');
  // const detailInfoData = await app.$axios({
  //   method: 'get',
  //   url: '/config.json'
  // })
  // app.baseConfig = detailInfoData.data
  // store.commit('setBaseConfig', detailInfoData.data)

  
  // if(process.client) {
  //   console.log('store ====>', store.state.locale);
  // }
  // const defaultLocale = app.i18n.fallbackLocale
  // const locale = app.$cookies.get('lang') || defaultLocale
  // const locale = defaultLocale
  // ignore if called from hot module replacement
  if (isHMR) {
    return
  }
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"

  // 国际化中间件处理
  if(process.server) {
    let cookiesJson = utils.parseCookie(req.headers.cookie)
    let lang = cookiesJson.lang || 'zh'
    // let lang = req.ctx.cookies.get('lang') || 'zh'
    store.commit('SET_LANG', lang) // set store
    app.i18n.locale = lang
  }
}
