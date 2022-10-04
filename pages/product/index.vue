<template>
  <div class="productInfoBox">
    <!-- 轮播图 -->
    <carousel :list="banner3" />
    <div class="productInfo infoBox infoBg1 dnsInfo">
      <h3>{{ $t("product.dns.title") }}</h3>
      <h4>{{ $t("product.dns.desc") }}</h4>
      <div class="bd">
        <van-tabs swipe-threshold="3">
          <van-tab title="授权(Authorizor)">
            <div class="dnsInfoShow">
              <div class="desc">
                <div>
                  <!-- <strong>Authorizor</strong> -->
                  <span>{{ $t("product.dns.Authorizor") }}</span>
                </div>
                <!-- <div>
                  <strong>DNS Analyzer</strong>
                  <span>针对DNS数据进行深度数据挖掘的分析软件，提供针对源IP、目的IP、域名、请求类型、请求结果的定制分析功能</span>
                </div> -->
              </div>
              <div class="img">
                <img src="../../assets/images/product/dnsTab01.png" alt="" />
              </div>
            </div>
          </van-tab>
          <van-tab title="递归(Recursor)">
            <div class="dnsInfoShow">
              <div class="desc">
                <div>
                  <!-- <strong>DNS Manager</strong> -->
                  <span>{{ $t("product.dns.Recursor") }}</span>
                </div>
                <!-- <div>
                  <strong>DNS Analyzer</strong>
                  <span>针对DNS数据进行深度数据挖掘的分析软件，提供针对源IP、目的IP、域名、请求类型、请求结果的定制分析功能2222</span>
                </div> -->
              </div>
              <div class="img">
                <img src="../../assets/images/product/dnsTab02.png" alt="" />
              </div>
            </div>
          </van-tab>
          <van-tab title="高性能缓存(Cacher)">
            <div class="dnsInfoShow">
              <div class="desc">
                <div>
                  <span>{{ $t("product.dns.Cacher") }}</span>
                </div>
              </div>
              <div class="img">
                <img src="../../assets/images/product/dnsTab03.png" alt="" />
              </div>
            </div>
          </van-tab>
          <van-tab title="政企域名服务(UniteDNS)">
            <div class="dnsInfoShow">
              <div class="desc">
                <div>
                  <span>{{ $t("product.dns.Dns") }}</span>
                </div>
              </div>
              <div class="img">
                <img src="../../assets/images/product/dnsTab03.png" alt="" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="productInfo infoBox infoBg2 integrated">
      <h3>{{ $t("product.products.title") }}</h3>
      <h4>
        {{ $t("product.products.desc1") }}<br />
        {{ $t("product.products.desc2") }}
      </h4>
      <div class="bd">
        <div class="integrated-nav">
          <span
            :class="{ active: activeIdx == 1 }"
            @mouseover="touchIntegrated(1)"
            >{{ $t("product.products.show") }}</span
          >
          <span
            :class="{ active: activeIdx == 2 }"
            @mouseover="touchIntegrated(2)"
            >{{ $t("product.products.operation") }}</span
          >
          <span
            :class="{ active: activeIdx == 3 }"
            @mouseover="touchIntegrated(3)"
            >{{ $t("product.products.data") }}</span
          >
          <span
            :class="{ active: activeIdx == 4 }"
            @mouseover="touchIntegrated(4)"
            >{{ $t("product.products.support") }}</span
          >
          <span
            :class="{ active: activeIdx == 5 }"
            @mouseover="touchIntegrated(5)"
            >{{ $t("product.products.collection") }}</span
          >
        </div>
        <div class="integrated-bd">
          <div class="integrated-item">
            <div class="integrated-item-pics">
              <div
                v-for="(item, index) in curProductGroup.pannalList"
                :key="index"
                @mouseover="touchIntegratedItem(index)"
                @mouseleave="touchIntegratedItemLeave(index)"
              >
                <a :href="item.url"><img :src="item.img" alt="" /></a>
              </div>
            </div>
            <div class="integrated-item-pics-big">
              <div
                v-for="(item, index) in curProductGroup.imgs"
                :key="index"
                class="banner-item"
                @mouseover="touchIntegratedItem(index)"
                @mouseleave="touchIntegratedItemLeave(index)"
              >
                <img :src="item.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <contactUs />
  </div>
</template>
<script>
import { mapState } from "vuex";
import carousel from "../../components/banner/carouselProduct";
import contactUs from "../../components/index/contactUs2";

export default {
  components: {
    carousel,
    contactUs,
  },
  // props: {
  //   studentWorksList: {
  //     type: Array,
  //     default () {
  //       return []
  //     }
  //   }
  // },
  /**
   * 获取服务端渲染数据
   */
  async asyncData({ $axios, store }) {
    const PREFIX_URL = store.state.baseUrl;
    // 获取首页的banner
    const indexInfo =
      (await $axios({
        method: "get",
        url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=294`,
      })) || {};
    const banner3 = [];
    const indexInfoRows =
      (indexInfo.data && indexInfo.data.data && indexInfo.data.data.rows) || [];
    for (let i = 0; i < indexInfoRows.length; i++) {
      const item = indexInfoRows[i];
      if (item.categoryTitle === "banner3") {
        const titleList = item.typekeyword.split("|");
        const descList = item.typedescrip.split("|");
        const routerUrlList = item.typelink.split("@");
        const imgList = JSON.parse(item.categoryImg);
        if (
          titleList.length === descList.length &&
          titleList.length === imgList.length
        ) {
          for (let i = 0; i < titleList.length; i++) {
            banner3.push({
              url: imgList[i].path,
              routerUrl: routerUrlList[i],
              h3: titleList[i],
              h4: descList[i],
            });
          }
        }
      }
    }
    // console.log('url = pre===>', PREFIX_URL,
    // '111=> ', indexInfo.data);
    return {
      banner3,
    };
    // 判断是否在服务端
  },

  data() {
    return {
      activeIdx: 1,
      carouselList: [
        {
          url: "../../assets/images/index/banner-bg.jpg",
          routerUrl: "",
        },
        {
          url: "../../assets/images/index/banner-bg.jpg",
          routerUrl: "",
        },
        {
          url: "../../assets/images/index/banner-bg.jpg",
          routerUrl: "",
        },
      ],
      curProductGroup: {
        pannalList: [],
        imgs: [],
      },
      productGroup: [
        {
          pannalList: [
            {
              img: require("../../assets/images/product/productTitle01.png"),
              url: "/pdetail/228",
            },
            {
              img: require("../../assets/images/product/productTitle02.png"),
              url: "/pdetail/198",
            },
            {
              img: require("../../assets/images/product/productTitle03.png"),
              url: "/pdetail/215",
            },
          ],
          imgs: [
            { img: require("../../assets/images/product/productoa01.png") },
            { img: require("../../assets/images/product/productoa02.png") },
            { img: require("../../assets/images/product/productoa03.png") },
          ],
        },
        {
          pannalList: [
            {
              img: require("../../assets/images/product/productTitle04.png"),
              url: "/pdetail/186",
            },
            {
              img: require("../../assets/images/product/productTitle05.png"),
              url: "/pdetail/234",
            },
          ],
          imgs: [
            { img: require("../../assets/images/product/productoa04.png") },
            { img: require("../../assets/images/product/productoa05.png") },
          ],
        },
        {
          pannalList: [
            {
              img: require("../../assets/images/product/productTitle06.png"),
              url: "/pdetail/192",
            },
            {
              img: require("../../assets/images/product/productTitle07.png"),
              url: "javascript:void()",
            },
          ],
          imgs: [
            { img: require("../../assets/images/product/productoa06.png") },
            { img: require("../../assets/images/product/productoa07.png") },
          ],
        },
        {
          pannalList: [
            {
              img: require("../../assets/images/product/productTitle08.png"),
              url: "/pdetail/154",
            },
            {
              img: require("../../assets/images/product/productTitle09.png"),
              url: "/pdetail/264",
            },
          ],
          imgs: [
            { img: require("../../assets/images/product/productoa08.png") },
            { img: require("../../assets/images/product/productoa09.png") },
          ],
        },
        {
          pannalList: [
            {
              img: require("../../assets/images/product/productTitle10.png"),
              url: "/pdetail/171",
            },
            {
              img: require("../../assets/images/product/productTitle11.png"),
              url: "/pdetail/205",
            },
          ],
          imgs: [
            { img: require("../../assets/images/product/productoa10.png") },
            { img: require("../../assets/images/product/productoa11.png") },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(["isPhone"]),
    // imgUrls () {
    // }
  },
  created() {},
  mounted() {
    this.getIntegratedData(1);
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
  methods: {
    getIntegratedData(idx) {
      this.curProductGroup.pannalList = JSON.parse(
        JSON.stringify(this.productGroup[idx - 1].pannalList)
      );
      this.curProductGroup.imgs = JSON.parse(
        JSON.stringify(this.productGroup[idx - 1].imgs)
      );
    },
    touchIntegrated(idx) {
      this.activeIdx = idx;
      this.getIntegratedData(idx);
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
    touchIntegratedItem(idx) {
      $(".integrated-item-pics-big .banner-item")
        .eq(idx)
        .css("transform", "scale(1.2)");
    },
    touchIntegratedItemLeave(idx) {
      $(".integrated-item-pics-big .banner-item")
        .eq(idx)
        .css("transform", "scale(1)");
    },
    initSwiper() {
      // this.mySwiper1 = new this.$Swiper('.integrated-item-swiper', {
      //   loop: false,
      //   slidesPerView: 3,
      //   spaceBetween: -50,
      //   centeredSlides: true,
      //   watchSlidesProgress: true,
      //   on: {
      //     setTranslate () {
      //       const slides = this.slides
      //       for (let i = 0; i < slides.length; i++) {
      //         const slide = slides.eq(i)
      //         const progress = slides[i].progress
      //         // slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
      //         slide.css({ 'opacity': '', 'background': '' }); slide.transform('')// 清除样式
      //         slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')')
      //       }
      //     },
      //     setTransition (transition) {
      //       for (let i = 0; i < this.slides.length; i++) {
      //         const slide = this.slides.eq(i)
      //         slide.transition(transition)
      //       }
      //     }
      //   },
      //   autoplay: {
      //     delay: 3000
      //   }
      // })
      // console.log(this.isPhone)
    },
    // showPreview (index) {
    //   if (!this.isPhone) {
    //     window.open(this.imgUrls[index]);
    //     return;
    //   }
    //   this.currentIndex = index + 1;
    //   this.show = true;
    // }
  },
};
</script>

<style lang="less" scoped>
</style>
