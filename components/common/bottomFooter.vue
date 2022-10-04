<template>
  <div class="footer-wrap">
    <div class="footer">
      <div v-if="false" class="left-box">
        <div class="foot-logo">
          <a href="/"><van-image lazy-load src="../../assets/images/logo/logo-bt.png" /></a>
        </div>
        <div class="ewm">
          <p>{{ $t('footer.desc') }}</p>
        </div>
      </div>
      <div v-if="false" class="rmenu">
        <ul v-if="false">
          <template v-for="(nav, index) in navbarOptions.menuOptions">
            <li :key="index" :class="{'li-two':index==1||index==2}">
              <p class="t">
                {{ nav.text }}
              </p>
              <div class="list">
                <a
                  v-for="(item, idx) in nav.subMenuOptions"
                  :key="idx"
                  :href="item.path"
                >
                  {{ item.text }}
                </a>
              </div>
            </li>
          </template>
          <li v-if="isMacOS === false || true">
            <!-- <p class="t">
              {{ $t('footer.contactUs') }}
            </p> -->
            <!-- <div class="line-to"> -->
            <!-- <a href=""><img src="../../assets/images/common/icon-wechat.png" alt=""></a> -->
            <!-- <a href="" @click="gotoQQ">
                <img src="../../assets/images/common/icon-qq.png" alt="">
              </a> -->
            <!-- </div> -->
            <img :src="wxQRCode" style="width: 65%; height: 270px; margin-bottom: 20px;" alt="微信联系方式"></img>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <img :src="wxQRCode" style="width: 150px; height: 150px; margin-bottom: 20px;" alt="微信联系方式"></img>
      <div>
        Copyright © WYD International Technology Company
      </div>
      <!-- <a class="icp-link" href="https://beian.miit.gov.cn">京ICP备05021348号</a> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},
  props: {
    paintingInfo: {
      type: Object,
      default () {
        return {
          address: '重庆·沙坪坝区·大学城'
        }
      }
    }
  },
  data () {
    return {
      wxQRCode: require('@/assets/images/company/wxqrcode.jpeg'),
      isMacOS: undefined,
      phoneUrl: '',
      /* 电脑端导航栏 */
      navbarOptions: {
        menuOptions: [
          {
            type: 'link',
            text: this.$t('menus.AboutUs'),
            path: '/aboutUs',
            icon: '&#xe616;',
            subMenuOptions: [
              {
                type: 'link',
                text: this.$t('menus.introduction'),
                path: '/aboutUs',
                icon: '&#xe60d;'
              }
              // {
              //   type: 'link',
              //   text: '发展历程',
              //   path: '/aboutUs/history',
              //   icon: '&#xe60d;'
              // }
              // {
              //   type: 'link',
              //   text: '新闻动态',
              //   path: '/aboutUs',
              //   icon: '&#xe60d;'
              // },
              // {
              //   type: 'link',
              //   text: '荣誉资质',
              //   path: '/aboutUs',
              //   icon: '&#xe60d;'
              // }
            ]
          },
          {
            // type: 'link',
            // text: this.$t('menus.solution'),
            // path: '/solution',
            // icon: '&#xe60d;',
            // subMenuOptions: [
            // {
            //   type: 'link',
            //   text: '应急解决方案集',
            //   path: '/solution',
            //   icon: '&#xe60d;'
            // },
            // {
            //   type: 'link',
            //   text: '公共安全解决方案集',
            //   path: '/solution',
            //   icon: '&#xe60d;'
            // },
            // {
            //   type: 'link',
            //   text: 'DNS解决方案集',
            //   path: '/solution',
            //   icon: '&#xe60d;'
            // }
            // ]
          },
          {
            // type: 'link',
            // text: this.$t('menus.product'),
            // path: '/product',
            // icon: '&#xe60d;',
            // subMenuOptions: [
            // {
            //   type: 'link',
            //   text: 'DNS产品集',
            //   path: '/product',
            //   icon: '&#xe60d;'
            // },
            // {
            //   type: 'link',
            //   text: '一体化产品集',
            //   path: '/product',
            //   icon: '&#xe60d;'
            // },
            // {
            //   type: 'link',
            //   text: '工业互联网产品集',
            //   path: '/product',
            //   icon: '&#xe60d;'
            // }
            // ]
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'isPhone',
      'topbarShow',
      'isLogin',
      'pruductList',
      'solutionList'
    ]) // 加载设备类型;
  },
  watch: {
    solutionList () {
      this.navbarOptions.menuOptions[1].subMenuOptions = this.solutionList.map(
        (item) => {
          return {
            type: 'link',
            text: item.typetitle,
            path: '/sdetail/' + item.id
          }
        }
      )
      this.navbarOptions.menuOptions[2].subMenuOptions = this.pruductList.map(
        (item) => {
          return {
            type: 'link',
            text: item.typetitle,
            path: '/pdetail/' + item.id
          }
        }
      )
    }
  },
  created () {
    if (process.client) {
      // this.phoneUrl = `tel:${this.paintingInfo.phone}`
      this.isMacOS = /macintosh|mac os x/i.test(navigator.userAgent)
    }
  },
  mounted () {},
  methods: {
    gotoQQ () {
      const u = navigator.userAgent
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
          window.open(
            'http://wpa.qq.com/msgrd?v=3&uin=' +
              '305218267' +
              '&site=qq&menu=yes'
          )
        } else {
          window.open(
            'mqqwpa://im/chat?chat_type=wpa&uin=' +
              '305218267' +
              '&version=1&src_type=web&web_src=oicqzone.com'
          )
        }
      } else if (
        u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
      ) {
        window.open(
          'http://wpa.qq.com/msgrd?v=3&uin=' + '305218267' + '&site=qq&menu=yes'
        )
      } else {
        window.open(
          'http://wpa.qq.com/msgrd?v=3&uin=' + '305218267' + '&site=qq&menu=yes'
        )
      }
    }
  }
}
</script>
<style scoped lang="less">
@import url('../../assets/css/color.less');
.icp-link {
  text-decoration: none;
}

@media screen and (max-width: 720px) {
}
</style>
