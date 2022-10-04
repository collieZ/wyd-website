<template>
  <div class="lunbo">
    <div class="swiper-containerSolution" style="width:100%;overflow:hidden;transform:translate3d(0,0,0);">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in list" :key="index" class="swiper-slide">
          <div class="banner-item">
            <div 
            class="tc-progressive-image"
            v-progressive="[baseConfig.ApiUrl.baseApi + item.url]"
            style="transform:translate3d(0,0,0);"
             :style="{height:bannerHeight+'px'}">
              <div class="mid mid1200">
                <h3>{{ item.h3 }}</h3>
                <h4>{{ item.h4 }}</h4>
                <a :href="item.routerUrl">{{$t('solution.banner')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-banner swiper-button-next" />
      <div class="swiper-button-banner swiper-button-prev" />
      <!-- Add Pagination -->
      <div class="swiper-paginationSolution swiper-pagination-bullets" />
    </div>
    <!-- <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in list" :key="index" class="swiper-slide">
          <div class="banner-item">
            <div :style="{height:bannerHeight+'px',backgroundImage:'url('+item.url+')'}">
              <div class="mid">
                <h3>智慧应急<span>⋄</span>工业互联网<span>⋄</span>安全+</h3>
                <h4>致力于为政企客户提供高效、丰富的产品集与解决方案</h4>
                <a href="">申请试用</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-paginationSolution swiper-pagination-bullets"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
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
      timer: false,
      bannerHeight: '1080',
      // list: [
      //   {
      //     url: require('../../assets/images/solution/banner1.jpg'),
      //     routerUrl: '/sdetail/162',
      //     h3: '工业互联网平台',
      //     h4: '以工业大数据使能来驱动创新和变革'
      //   },
      //   {
      //     url: require('../../assets/images/solution/banner2.jpg'),
      //     routerUrl: '/sdetail/252',
      //     h3: '自然灾害风险普查解决方案',
      //     h4: '自然灾害风险，致灾防灾的基石'
      //   },
      //   {
      //     url: require('../../assets/images/solution/banner3.jpg'),
      //     routerUrl: '/sdetail/177',
      //     h3: '智能运维解决方案',
      //     h4: '运维管控端到端解决方案领导者'
      //   }
      // ],
      swiperOption: {
        // simulateTouch: false, // 防止左滑右滑造成翻页
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-paginationSolution'
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
      // console.log(jQuery(window).height())
      this.bannerHeight = jQuery(window).height()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mySwiper = new this.$Swiper('.swiper-containerSolution', {
        loop: false,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-paginationSolution',
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
  beforeDestroy () {
  },
  methods: {
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

</style>
