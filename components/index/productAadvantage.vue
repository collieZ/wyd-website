<template>
  <div class="productBox">
    <div class="tc-title" style="margin-bottom:60px;">
      <h3><span>{{ $t('home.product.title') }}</span></h3>
      <!-- <h4>{{$t('home.product.desc')}}</h4> -->
    </div>
    <div class="swiper-container2" style="width:100%;overflow:hidden;position:relative;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul class="product-show">
            <li v-for="(item, index) in productList" :key="index">
              <div out>
                <!-- <a :href="'/pdetail/'+item.id"> -->
                <van-image fit="scale-down" lazy-load :src="item.url" alt="" />
                <strong>{{ item.title }}</strong>
                <span>{{ item.desc }}</span>
                <!-- </a> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination2 swiper-pagination-bullets" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'DetailSwiper',
  components: {
  },
  props: {
    productList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['isPhone', 'baseConfig'])
    // imgUrls () {
    // }
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      // this.mySwiper1 = new this.$Swiper('.swiper-container2', {
      //   loop: true,
      //   autoplay: {
      //     delay: 3000
      //   },
      //   navigation: {
      //   },
      //   pagination: {
      //     el: '.swiper-pagination2',
      //     clickable: true
      //   }
      // })
      this.init()
    })
  },
  methods: {
    init () {
      // console.log(this.isPhone)
    },
    navToPage (item) {
      this.$router.push({ path: '/detail' })
    }

    // showPreview (index) {
    //   if (!this.isPhone) {
    //     window.open(this.imgUrls[index]);
    //     return;
    //   }
    //   this.currentIndex = index + 1;
    //   this.show = true;
    // }
  }
}
</script>
<style lang="less" scoped>
div.swiper-pagination2 {
  position: absolute;
  text-align: center;
  bottom:0;
  z-index:1;
  width:100%;
}
</style>

<style lang="less" scoped>

</style>
