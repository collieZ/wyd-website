<template>
  <div class="lunbo">
    <div class="swiper-containerIndex" style="width:100%;overflow:hidden;transform:translate3d(0,0,0);" :style="{height:bannerHeight+'px'}">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in list" :key="index" class="swiper-slide">
          <div class="banner-item">
            <div
              ref="carouselImg"
              v-progressive="item.url"
              class="tc-progressive-image"
              style="transform:translate3d(0,0,0);"
              :style="{height:bannerHeight+'px'}"
              @load="onImgLoad(item, index)"
            >
              <div class="mid">
                <h3>
                  <!-- {{  }} -->
                  W Y D
                </h3>
                <h4 v-if="item.h4">
                  {{ item.h4 }}
                </h4>
                <!-- <a href="">申请试用</a> -->
                <!-- <a @click="gotoMao">{{ $t('banner.apply') }}</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-banner swiper-button-next" />
      <div class="swiper-button-banner swiper-button-prev" />
      <!-- Add Pagination -->
      <div class="swiper-paginationIndex swiper-pagination-bullets" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      carouselImg: null,
      timer: false,
      bannerHeight: '1080',
      // list: [
      //   {
      //     url: require('../../assets/images/index/banner-01.jpg'),
      //     routerUrl: '',
      //     h3: '域名解析系统',
      //     h4: '国内首家商用DNS解析方案提供者'
      //   },
      //   {
      //     url: require('../../assets/images/index/banner-02.jpg'),
      //     routerUrl: '',
      //     h3: '工业互联网平台',
      //     h4: '聚焦价值，以工业大数据使能来驱动创新和变革，加速企业数字化转型升级'
      //   },
      //   {
      //     url: require('../../assets/images/index/banner-03.jpg'),
      //     routerUrl: '',
      //     h3: '智能运维解决方案',
      //     h4: '运维管控端到端解决方案领导者'
      //   }
      // ],
      swiperOption: {
        // simulateTouch: false, // 防止左滑右滑造成翻页
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-paginationIndex'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      titmer1: '',
      titmer2: null,
      currentIndex: 1 // 当前的index
    }
  },
  computed: {
    ...mapState(['isPhone', 'baseConfig'])
  },
  watch: {
    // bannerHeight (val) {
    //   if (!this.timer) {
    //     this.bannerHeight = val
    //     this.timer = true
    //     const _this = this
    //     setTimeout(function () {
    //       _this.timer = false
    //     }, 500)
    //   }
    //   // 这里可以添加修改时的方法
    //   // this.windowHeight(val);
    // }
  },
  created () {
    // console.log(process)
    if (process.browser) {
      // console.log(jQuery(window).height());
      this.bannerHeight = jQuery(window).height()
    }
  },
  mounted () {
    // console.log("domdomdomd");
    this.$nextTick(() => {
      this.mySwiper = new this.$Swiper('.swiper-containerIndex', {
        loop: false,
        autoplay: {
          delay: 8000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-paginationIndex',
          clickable: true
        }
      })
      // console.log(this.mySwiper)
    })
    // window.onresize = () => {
    //   return (() => {
    //     this.bannerHeight = `${document.documentElement.clientHeight}`;
    //   })();
    // };
    this.bannerHeight = document.documentElement.clientHeight
    // console.log(document.documentElement.clientHeight)
  },
  beforeDestroy () {},
  methods: {
    onImgLoad (item, index) {
      // console.log(this.$refs.carouselImg, 'domsss');
      // console.log('zzzzww load');
      // console.log(item, 'img loaded', this.$refs["carouselImg"][index].src);
      // this.$refs["carouselImg"][index].src = baseConfig.ApiUrl.baseApi + item.url
    },
    gotoMao () {
      window.scrollTo({
        top: jQuery('.contactUsBox').offset().top,
        behavior: 'smooth'
      })
      // contactUsBox
    },

    navTo (url) {
      if (url) {
        this.$router.push({ path: url })
      }
    }
  }
}
</script>
<style lang="less">
</style>
<style scoped lang="less">
  .mid {
    h3 {
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      // font-size: 38px;
      font-weight: 600;
      background-image:-webkit-linear-gradient(bottom,#471e70,#960e6d,#05378a,#009de9);

      -webkit-background-clip:text;

      -webkit-text-fill-color:transparent;
    }
  }
// img {
//   background-image: url('~@/assets/images/about/banner.jpg');
//   background-repeat: no-repeat;
//   z-index: 999;
// }
</style>
