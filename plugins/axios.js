import { mapState } from 'vuex'
function axios({ $axios, redirect, store, error: nuxtError }) {
  $axios.onResponse((res) => {
    const { status, data } = res
    const url = res.request.res ? res.request.res.responseUrl : ''
    if (status === 200 && data && typeof data === 'string') {
      redirect(url)
    }
  })

  $axios.onRequest((request) => {
    // console.log(process.env.NODE_ENV)
    // console.log(request.url, 'req url===>', request.baseURL)
    
    // if (process.env.NODE_ENV === 'production') {
    //   for (const key in store.state.baseConfig.ApiUrl) {
    //     if (request.url.indexOf('/' + key) === 0) {
    //       request.url = request.url.replace(
    //         '/' + key,
    //         store.state.baseConfig.ApiUrl[key]
    //       )
    //     } else if (request.url.indexOf(key) === 0) {
    //       request.url = request.url.replace(
    //         key,
    //         store.state.baseConfig.ApiUrl[key]
    //       )
    //     }
    //   }
    // }
    return request
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 401) {
      localStorage.setItem('token', '')
      store.commit('changeIsLogin', false)
      store.commit('changeUser', null)
      store.commit('changeLoginDialogShow', true)
    }
    if (code === 404) {
      console.log('数据请求失败!!!!')
    }
    return Promise.resolve(false)
  })

  $axios.onRequestError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    })
    return Promise.resolve(false)
  })
  
  $axios.onResponseError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    })
    return Promise.resolve(false)
  })

}


export default axios
