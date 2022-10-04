<template>
  <div ref="app" class="app">
    <!-- <login-register v-show="loginDialogShow"></login-register> -->
    <top-menu @menu-open="hideSticky" @menu-close="showSticky" />
    <!-- <Affix/> -->
    <nuxt class="nuxt-content" keep-alive />
    <!-- 右侧悬浮快捷入口 -->
    <!-- <div v-if="stickyShow && !currentPath.startsWith('/about/detail')">
      <sticky v-if="hasSticky" @wechat-click="showQRCode" />
    </div> -->
    <!-- <van-popup v-model="wechatQRCodeshow">
      <template v-if="paintingInfo && paintingInfo.er_code">
        <img
          :src="paintingInfo.er_code"
          class="qr-code"
          width="150"
          height="150"
          alt
        />
      </template>
      <template v-else>
        <span>加载中...</span>
      </template>
    </van-popup> -->
    <!-- 回到顶部 -->
    <!-- <scroll-top /> -->
    <bottom-footer :painting-info="paintingInfo" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Color } from '../config/color'
import topMenu from '../components/common/topMenu'
import sticky from '../components/common/sticky'
// import scrollTop from '../components/common/scrollTop';
import BottomFooter from '../components/common/bottomFooter'

import { isPhone, myBrowser, getDateTime } from '../utils/index'
// import { Api } from '@/api/index';
import { Domain } from '../config'
// import loginRegister from '../components/common/loginDialog';
export default {
  name: 'Default',
  components: {
    topMenu,
    sticky,
    // loginRegister,
    // scrollTop,
    BottomFooter
  },
  data () {
    return {
      // paintingInfo: {},
      currentMenuIndex: 0,
      currentPath: '/',
      stickyShow: true,
      Color,
      wechatQRCodeshow: false
    }
  },
  computed: {
    ...mapState([
      'menuIndex',
      'isPhone',
      'tabbarShow',
      'paintingInfo',
      'loginDialogShow',
      'pruductList',
      'solutionList'
    ])
    // 移动端不显示 qq sticky
    // hasSticky({isPhone}) {
    //   return !isPhone
    // }
  },
  watch: {
    menuIndex (newV, oldV) {
      this.currentMenuIndex = newV
    }
  },
  created () {
    if (process.client) {
      this.currentPath = this.$route.path
      this.checkDevice()
      const paint = localStorage.getItem('paintingInfo')
      if (paint && paint !== 'undefined') {
        this.setPaintingInfo(JSON.parse(paint))
      }
      // this.getProductList()
    } else {
      // this.getProductList()
    }
  },
  mounted () {
    // const paint = localStorage.getItem('paintingInfo')
    // console.log(this.$route, 'rrrr', paint);
    // let path = this.$route.path
    // if (!paint || paint === 'undefined') {
    //   if (typeof path === 'string' && !path.startWith('/news')) {
    //     window.location.replace(Domain)
    //   }
    // }

    window.addEventListener('resize', this.checkDevice)
    window.addEventListener('unload', this.logoutStatistics)
    // this.loginStatistics();
  },
  destroyed () {
    window.removeEventListener('resize', this.checkDevice)
  },
  methods: {
    // 利用vuex的辅助函数把changeIsPhone代理到当前组件,
    ...mapMutations(['changeIsPhone', 'changeBrowser', 'setPaintingInfo', 'changePruductList', 'changeSolutionList']),
    // async getProductList () {
    //   const PREFIX_URL = this.$store.state.baseUrl;
    //   const productList = await this.$axios({
    //     method: 'get',
    //     url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=152`
    //   })
    //   // console.log(productList.data.data.rows)
    //   this.changePruductList(productList.data.data.rows)
    //   // this.$store.commit('changePruductList', productList.data.data.rows)
    //   const solutionList = await this.$axios({
    //     method: 'get',
    //     url: 'baseApi/cms/category/list.do?pageSize=999&categoryId=150'
    //   })
    //   this.changeSolutionList(solutionList.data.data.rows)
    //   // this.$store.commit('changeSolutionList', solutionList.data.data.rows)
    // },

    /**
     * @method 检查是什么设备
     */
    checkDevice () {
      // 在客户端才能获取到dom,才能判断是否是移动设备
      if (process.client) {
        const result = isPhone()
        this.changeIsPhone(result) // 将结果写入到vuex仓库里
        const Browser = myBrowser()
        this.changeBrowser(Browser) // 将结果写入到vuex仓库里
      }
    },
    // 入口统计
    // loginStatistics () {
    //   this.$axios({
    //     method: 'post',
    //     url: Api.loginCount,
    //     timeout: 10000,
    //     data: {
    //       login_time: getDateTime(),
    //       device: this.isPhone ? '手机' : '电脑'
    //     }
    //   })
    //     .then((res) => {
    //       if (res.data.resultCode === 0) {
    //         localStorage.setItem('currentId', res.data.data)
    //       } else {
    //       }
    //     })
    //     .catch(() => {})
    // },

    // async logoutStatistics () {
    //   await this.$axios({
    //     method: 'post',
    //     url: Api.userLogout,
    //     timeout: 10000,
    //     data: {
    //       id: localStorage.getItem('currentId'),
    //       logout_time: getDateTime()
    //     }
    //   })
    // },

    hideSticky () {
      this.stickyShow = false
    },
    showSticky () {
      this.stickyShow = true
    }
    // showQRCode () {
    //   if (this.wechatQRCodeshow === true) {
    //     this.wechatQRCodeshow = false
    //     return
    //   }
    //   this.wechatQRCodeshow = !this.wechatQRCodeshow
    // }
  }
}
</script>

<style scoped lang="less">
.nuxt-content {
  background: #fff;
}
.qr-code {
  padding: 1px;
  width: 150px;
  height: 150px;
}
@media screen and( min-width:720px) {
  .tabbar-menu {
    display: none;
  }
}
</style>
