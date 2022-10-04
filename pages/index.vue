<template>
  <div class="app-container">
    <!-- 顶部通知栏 -->
    <!-- <div class="phone-notice">
      <van-notice-bar
        :color="Color.colorbrand"
        :speed="50"
        background="rgba(244,205,205,1)"
        left-icon="volume-o"
        :scrollable="true"
      >
        公司重要公告
      </van-notice-bar>
    </div> -->

    <!-- 轮播图 -->
    <carousel :list="banner1" />

    <!-- 产品优势 -->
    <productAadvantage :product-list="productListData" />
    <!-- 解决方案 -->
    <!-- <solution :solution-list="solutionListData" /> -->

    <!-- <div class="productInfo infoBox infoBg2">
      <h3>客户案例</h3>
      <div class="bd">
        <ul class="solutionAppList">
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="img">
                <img src="http://iph.href.lu/400x200" alt="">
              </div>
              <div class="desc">
                <span>应急通信管理</span>
                <a href="">查看详情</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->

    <!-- 联系我们 -->
    <!-- <contactUs /> -->
    <!-- 联系我们 -->
    <div class="aboutUsBox">
      <div class="infoBox map">
        <div class="bd">
          <div class="mapFlex">
            <div class="mapFlex-info">
              <dl>
                <dt style="font-size: 30px">
                  {{ $t("about.contactUs.title") }}
                </dt>
              </dl>
              <dl>
                <dt>{{ $t("about.contactUs.addr.title") }}</dt>
                <dd>{{ $t("about.contactUs.addr.info") }}</dd>
              </dl>
              <dl>
                <dt>微信二维码</dt>
                <div class="wx-pic">
                  <img :src="wxQRCode2" style="width: 65%; height: 270px" alt="微信联系方式员工">
                </div>
              </dl>
              <dl>
                <dt> 邮箱 </dt>
                <dd>Wydinternationaltechnology.com@gmail.com</dd>
              </dl>
              <dl>
                <!-- <dt>{{ $t("about.contactUs.fax.title") }}</dt> -->
                <!-- <dd>{{ $t("about.contactUs.fax.info") }}</dd> -->
              </dl>
            </div>
            <div class="mapFlex-map">
              <div id="map">
                <baidu-map
                  ak="KAgCuCGdTnAjuSGWBYgxnZ6jn8aEmpIA"
                  :center="center"
                  :zoom="zoom"
                  style="height: 100%"
                  class="baiduMap"
                  :scroll-wheel-zoom="true"
                  @ready="handler"
                >
                  <bm-info-window
                    :position="center"
                    title="WYD Office"
                    :show="true"
                  >
                    <p>地址：Office no 501/502 5th floor AI hafeez Busniess center Gulberg 111 Lahore</p>
                  </bm-info-window>
                </baidu-map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
import carousel from '../components/banner/carousel'
import productAadvantage from '../components/index/productAadvantage'
import solution from '../components/index/solution'
import contactUs from '../components/index/contactUs'

import { Color } from '../config/color'

// import { Api } from '../api/index';
export default {
  components: {
    carousel,
    BaiduMap,
    BmInfoWindow,
    productAadvantage,
    // solution,
    contactUs
  },
  /**
   * 获取服务端渲染数据
   */
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      wxQRCode: require('@/assets/images/company/wxqrcode.jpeg'),
      wxQRCode2: require('@/assets/images/company/wxqrcode2.jpeg'),
      banner1: [
        {
          url: [require('@/assets/images/company/c1.jpeg')]
        },
        {
          url: [require('@/assets/images/company/c2.jpeg')]
        },
        {
          url: [require('@/assets/images/company/c3.jpeg')]
        },
        {
          url: [require('@/assets/images/company/c4.jpeg')]
        },
        {
          url: [require('@/assets/images/company/c5.jpeg')]
        }
      ],
      productListData: [
        {
          title: '巴基斯坦签证服务',
          desc: '提供巴基斯坦签证办理',
          url: require('@/assets/images/company/qianzheng1.png')
        },
        {
          title: '商务考察接待服务',
          desc: '提供巴基斯坦机场接送、住宿、餐食、市场考察等服务',
          url: require('@/assets/images/company/jiedai.png')
        },
        {
          title: '巴基斯坦当地市场考察、分析、企划方案服务',
          desc: '根据委托人要求，通过专业调查，给予最真实的当地分析报告。',
          url: require('@/assets/images/company/qihua.png')
        },
        {
          title: '国内对接服务',
          desc: '本公司可以对接国内所有企业工厂！有效达成互利共赢的商业合作模式！',
          url: require('@/assets/images/company/hezuo.png')
        },
        {
          title: '巴基斯坦陆运双清关服务',
          desc: '专业从事中国到巴基斯坦任何城市提供门到门的陆运双清关服务',
          url: require('@/assets/images/company/luyun.png')
        }
      ],
      carouselList: [
        {
          url: '../../assets/images/index/banner-bg.jpg',
          routerUrl: '',
          h3: '智慧应急',
          h4: '跨软件系统的横向数据融合'
        },
        {
          url: '../../assets/images/index/banner-bg.jpg',
          routerUrl: '',
          h3: '工业互联网',
          h4: '聚焦价值，以工业大数据使能来驱动创新和变革，加速企业数字化转型升级'
        },
        {
          url: '../../assets/images/index/banner-bg.jpg',
          routerUrl: '',
          h3: '公共安全',
          h4: '让情况更清晰，让情报更精准，让决策更智能'
        }
      ],
      paintingInfo: {},
      Color
    }
  },
  created () {
    if (process.client) {
      localStorage.setItem('paintingInfo', JSON.stringify(this.paintingInfo))
      this.setPaintingInfo(this.paintingInfo)
      const token = localStorage.getItem('token')
      if (token) {
        const user = JSON.parse(localStorage.getItem('user'))
        this.changeUser(user)
        this.changeIsLogin(true)
      } else {
        this.changeUser(null)
        this.changeIsLogin(false)
      }
      // console.log(this.plist, 'l');
    }
  },
  mounted () {
    this.changeTabbarShow(true)
    this.changTopbarShow(true)
  },
  methods: {
    ...mapMutations(['setPaintingInfo', 'changeTabbarShow', 'changTopbarShow', 'changeUser', 'changeIsLogin']),
    handler () {
      this.center.lng = 74.3466050976263
      this.center.lat = 31.50359992383621
      this.zoom = 15
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and(min-width: 720px) {
  .phone-notice {
    display: none;
  }
}
.wx-pic {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
