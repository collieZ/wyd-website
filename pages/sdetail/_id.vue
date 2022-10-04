<template>
  <div class="detailBox">
    <!-- <div class="viewer-container"></div> -->
    <div
      class="solution-detail-banner tc-progressive-image"
      v-progressive="[baseConfig.ApiUrl.baseApi + detailInfo.banner.img]"
    >
      <div>
        <h2>{{ detailInfo.banner.title }}</h2>
        <h3>{{ detailInfo.banner.desc }}</h3>
        <a @click="gotoMao">{{ $t("solutionDetail.contactUs") }}</a>
      </div>
    </div>
    <div class="infoNav-box">
      <div class="infoNav" :class="{ fixed: fixedInfoNav == true }">
        <ul>
          <li :class="{ active: curPage == 1 }" @click="goPage(1)">
            <i class="s-nav01" />{{ $t("solutionDetail.tabs.background") }}
          </li>
          <li>|</li>
          <li :class="{ active: curPage == 2 }" @click="goPage(2)">
            <i class="s-nav02" />{{ $t("solutionDetail.tabs.challenge") }}
          </li>
          <li>|</li>
          <li :class="{ active: curPage == 3 }" @click="goPage(3)">
            <i class="s-nav03" />{{ $t("solutionDetail.tabs.solve") }}
          </li>
          <li>|</li>
          <li :class="{ active: curPage == 4 }" @click="goPage(4)">
            <i class="s-nav04" />{{ $t("solutionDetail.tabs.plan") }}
          </li>
          <li>|</li>
          <li :class="{ active: curPage == 5 }" @click="goPage(5)">
            <i class="s-nav05" />{{ $t("solutionDetail.tabs.scene") }}
          </li>
          <li>|</li>
          <li :class="{ active: curPage == 6 }" @click="goPage(6)">
            <i class="s-nav06" />{{ $t("solutionDetail.tabs.profit") }}
          </li>
          <!-- <li>|</li>
          <li :class="{active:curPage==7}" @click="goPage(7)">
            <i class="s-nav07" />产品组合
          </li> -->
        </ul>
      </div>
    </div>
    <div class="detailModule infoBox page1" style="background: #f4f5f7">
      <h3>{{ $t("solutionDetail.background.title") }}</h3>
      <div class="bd">
        <div class="solutionBg">
          <div class="desc">
            <strong>{{ detailInfo.page1.key }}</strong>
            <span>{{ detailInfo.page1.desc }}</span>
          </div>
          <div class="img">
            <van-image
              lazy-load
              :src="baseConfig.ApiUrl.baseApi + detailInfo.page1.img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="detailModule infoBox whiteTit infoBg3 businessChallenges page2">
      <h3>{{ $t("solutionDetail.challenge.title") }}</h3>
      <h4>{{ detailInfo.page2.desc }}</h4>
      <div class="list">
        <div v-for="(item, index) in detailInfo.page2.list" :key="index">
          <strong
            :style="{
              backgroundImage:
                'url(' + baseConfig.ApiUrl.baseApi + item.img + ')',
            }"
            >{{ item.name }}</strong
          >
          <span>{{ item.desc }}</span>
        </div>
      </div>
    </div>
    <div class="detailModule infoBox page3">
      <h3>{{ $t("solutionDetail.solve.title") }}</h3>
      <div class="bd">
        <div class="solutionRoad">
          <template v-for="(item, index) in detailInfo.page3.list">
            <template v-if="index % 2 === 0">
              <div :key="'img' + index" class="img">
                <div class="img-box">
                  <div class="c">
                    <van-image
                      lazy-load
                      :src="baseConfig.ApiUrl.baseApi + item.img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div :key="'desc' + index" class="desc">
                <strong>{{ item.name }}</strong>
                <span v-for="(items, idx) in item.desc" :key="idx">{{
                  items
                }}</span>
              </div>
            </template>
            <template v-else>
              <div :key="'desc' + index" class="desc">
                <strong>{{ item.name }}</strong>
                <span v-for="(items, idx) in item.desc" :key="idx">{{
                  items
                }}</span>
              </div>
              <div :key="'img' + index" class="img">
                <div class="img-box">
                  <div class="c">
                    <van-image
                      lazy-load
                      :src="baseConfig.ApiUrl.baseApi + item.img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="detailModule infoBox page4">
      <h3>{{ $t("solutionDetail.plan.title") }}</h3>
      <div class="bd" style="text-align: center; position: relative">
        <viewer
          ref="vviewer"
          @inited="viewerInited"
          :options="viewerOptions"
          :images="[baseConfig.ApiUrl.baseApi + detailInfo.page4.img]"
        >
          <div v-if="!vshowing" class="viewer-look" @click="zoomOut">
            <div class="icon"></div>
            <div class="text">
              <span>查看原图</span>
            </div>
          </div>
          <van-image
            lazy-load
            :key="baseConfig.ApiUrl.baseApi + detailInfo.page4.img"
            :src="baseConfig.ApiUrl.baseApi + detailInfo.page4.img"
            alt=""
          />
        </viewer>
      </div>
    </div>
    <div class="detailModule infoBox page5">
      <h3>{{ $t("solutionDetail.scene.title") }}</h3>
      <!-- <h4>
        一体化知识平台是一套基于知识图谱技术的知识管理与洞察分析平台，包含知识建模、抽取、融合、存储、计算及应用等技术组件和功能模块
        利用知识工程为大数据添加语义/知识，使数据产生智慧（smart data），完成从数据到信息到知识，最终到智能应用的转变
        从而实现对数据的洞察、提供用户关心问题的答案、为决策提供支持、改进用户体验等目标
      </h4> -->
      <h4>{{ detailInfo.page5.desc }}</h4>
      <div class="bd">
        <ul class="appSence">
          <li
            v-for="(items, index) in detailInfo.page5.list"
            :key="index"
            class="li33"
          >
            <div class="img">
              <van-image lazy-load :src="baseConfig.ApiUrl.baseApi + items.src" alt="" />
            </div>
            <h4>{{ items.name }}</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="detailModule infoBox page6" style="background: #f4f5f7">
      <h3>{{ $t("solutionDetail.profit.title") }}</h3>
      <div class="bd">
        <ul class="customerRevenue">
          <li v-for="(items, index) in detailInfo.page6.list" :key="index">
            <div class="img">
              <van-image lazy-load :src="baseConfig.ApiUrl.baseApi + items.src" alt="" />
            </div>
            <h4>{{ items.name }}</h4>
            <span>{{ items.desc }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="infoBox page7 solutionGroups">
      <div class="bd">
        <div class="solutionGroups-nav">
          <div class="title">
            产品组合
          </div>
          <ul>
            <li v-for="(item,index) in detailInfo.page7.list" :key="index" :class="{active:activeIdx==index}" @mouseover="touchSolutionGroups(index,item)">
              <strong>{{ item.name[0] }}</strong>
              <span>{{ item.name[1] }}</span>
              <i>{{ item.name[2] }}</i>
              <em />
            </li>
          </ul>
        </div>
        <div class="solutionGroups-main">
          <div v-if="detailInfo.page7.list.length>0" class="solutionGroups-main-ci">
            <h4>{{ curActiveItm.desc }}</h4>
            <div class="img">
              <div class="img-box">
                <div class="c">
                  <img :src="baseConfig.ApiUrl.baseApi+curActiveItm.src" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 联系我们 -->
    <contactUs />
  </div>
</template>
<script>
import { mapState } from "vuex";
import contactUs from "../../components/index/contactUs2";
// import Viewer from "v-viewer/src/component.vue"

export default {
  components: {
    contactUs,
    // Viewer
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
  async asyncData({ $axios, route, params, store }) {
    const PREFIX_URL = store.state.baseUrl;
    const moduleList =
      (await $axios({
        method: "get",
        url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=${params.id}`,
      })) || {};
    const moduleListRows =
      (moduleList.data && moduleList.data.data && moduleList.data.data.rows) ||
      [];
    const detailData = {
      banner: {
        title: "",
        desc: "",
        img: "",
      },
      page1: {
        key: "",
        desc: "",
        img: "",
      },
      page2: {
        desc: "",
        list: [],
      },
      page3: {
        list: [],
      },
      page4: {
        img: "",
      },
      page5: {
        desc: "",
        list: [],
      },
      page6: {
        list: [],
      },
      page7: {
        list: [],
      },
    };
    for (let i = 0; i < moduleListRows.length; i++) {
      const item = moduleListRows[i];
      if (item.categoryTitle === "banner") {
        detailData.banner.title = item.typekeyword;
        detailData.banner.desc = item.typedescrip;
        detailData.banner.img = item.typelitpic;
      }
      if (item.categoryTitle === "page1") {
        detailData.page1 = {
          key: item.typekeyword,
          desc: item.typedescrip,
          img: item.typelitpic,
        };
      }
      if (item.categoryTitle === "page2") {
        const typekeywordList = item.typekeyword.split("|");
        const imgList = JSON.parse(item.categoryImg);
        const list = [];
        for (let i = 0; i < typekeywordList.length; i++) {
          let src = "";
          if (imgList[i]) {
            src = imgList[i].path;
          }
          list.push({
            name: typekeywordList[i].split("@")[0],
            desc: typekeywordList[i].split("@")[1],
            img: src,
          });
        }
        detailData.page2 = {
          desc: item.typedescrip,
          list,
        };
      }
      if (item.categoryTitle === "page3") {
        const typekeywordList = item.typekeyword.split("|");
        const imgList = JSON.parse(item.categoryImg);
        const descList = item.typedescrip.split("|");
        const list = [];
        for (let i = 0; i < typekeywordList.length; i++) {
          let src = "";
          if (imgList[i]) {
            src = imgList[i].path;
          }
          list.push({
            name: typekeywordList[i],
            desc: descList[i].split("{br}"),
            img: src,
          });
        }
        detailData.page3 = {
          list,
        };
      }
      if (item.categoryTitle === "page4") {
        detailData.page4.img = item.typelitpic;
      }
      if (item.categoryTitle === "page5") {
        detailData.page5.desc = item.typedescrip;
        const keyList = item.typekeyword.split("|");
        const urlList = JSON.parse(item.categoryImg);
        detailData.page5.list = keyList.map((item, index) => {
          let src = "";
          if (urlList[index]) {
            src = urlList[index].path;
          }
          return {
            name: item,
            src,
          };
        });
      }
      if (item.categoryTitle === "page6") {
        // console.log(item)
        const keyList = item.typekeyword.split("|");
        const detailList = item.typedescrip.split("|");
        const urlList = JSON.parse(item.categoryImg);
        detailData.page6.list = keyList.map((item, index) => {
          let src = "";
          if (urlList[index]) {
            src = urlList[index].path;
          }
          return {
            name: item,
            desc: detailList[index],
            src,
          };
        });
      }
      if (item.categoryTitle === "page7") {
        // console.log(item)
        // const keyList = item.typekeyword.split('|')
        // const detailList = item.typedescrip.split('|')
        // const urlList = JSON.parse(item.categoryImg)
        // detailData.page7.list = keyList.map((item, index) => {
        //   let src = ''
        //   if (urlList[index]) {
        //     src = urlList[index].url
        //   }
        //   return {
        //     name: item.split('@'),
        //     desc: detailList[index],
        //     src
        //   }
        // })
      }
    }
    // console.log(detailData)
    return {
      detailInfo: detailData,
    };
  },

  data() {
    return {
      activeIdx: 0,
      curActiveItm: {},
      fixedInfoNav: false,
      curPage: -1,
      // baseConfig,
      baseApi: "",
      bannerHeight: "1080",
      viewerOptions: {
        container: "body",
        inline: false,
        title: false, //当前图片标题
        scalable: false, //是否可翻转
        transition: true, //使用 CSS3 过度
        fullscreen: false, //播放时是否全屏
        keyboard: true, //是否支持键盘,
        show: () => {
          // console.log('pic show!!!');
        },
        hidden: () => {
          // console.log('hide !!!');
          let offset = 0;
          if (this.isPhone) {
            offset = -200;
          }
          this.goPage(4, offset);
        },
      },
      // vshowing: false,
      vviewer: null,
      // item: {
      //   url: require('../../assets/images/detail/detailBanner.jpg')
      // }
    };
  },
  computed: {
    ...mapState(["isPhone", "baseConfig"]),
    offsetHeader({ isPhone }) {
      // 暂时没用
      if (isPhone) {
        return 0;
      } else {
        return 45;
      }
    },
    vshowing() {
      // await this.$nextTick(() => {});
      return (this.vviewer && this.vviewer.showing) || false;
    },
  },
  created() {},
  mounted() {
    // console.log('this.baseConfig')
    // console.log(this.baseConfig)
    // // this.baseApi = this.baseConfig.ApiUrl.baseApi
    // console.log(this.detailInfo)
    this.bannerHeight = jQuery(window).height();
    // console.log(this.isPhone, "phone");
    this.init();
    if (this.detailInfo.page7.list.length > 0) {
      // this.curActiveItm = JSON.parse(JSON.stringify(this.detailInfo.page7.list[this.activeIdx]))
    }
  },
  destroyed() {
    jQuery(window).scroll(() => {});
    this.vviewer = null;
  },
  methods: {
    viewerInited(viewer) {
      if (!this.vviewer) {
        this.vviewer = viewer;
        let show = viewer.show;
        // viewer.show =
        //   this.vviewer.onStart(function() {
        //     console.log('start!!!');
        //   }
        // )

        // console.log(this.vviewer, "vvvvv dom");
      }
    },
    zoomOut() {
      this.vviewer && this.vviewer.show();
    },
    touchSolutionGroups(idx, item) {
      this.activeIdx = idx;
      this.curActiveItm = JSON.parse(JSON.stringify(item));
      // console.log(this.curActiveItm);
    },
    init() {
      if (
        jQuery(window).scrollTop() >
        jQuery(".infoNav-box").position().top - 46
      ) {
        this.fixedInfoNav = true;
      } else {
        this.fixedInfoNav = false;
      }
      jQuery(window).scroll(() => {
        if (jQuery(".infoNav-box").length > 0) {
          if (
            jQuery(window).scrollTop() >
            jQuery(".infoNav-box").position().top - 46
          ) {
            this.fixedInfoNav = true;
          } else {
            this.fixedInfoNav = false;
          }
          // if (jQuery(window).scrollTop() > (jQuery('.page7').position().top - 92)) {
          //   this.curPage = 7
          // } else
          if (
            jQuery(window).scrollTop() >
            jQuery(".page6").position().top - 92
          ) {
            this.curPage = 6;
          } else if (
            jQuery(window).scrollTop() >
            jQuery(".page5").position().top - 92
          ) {
            this.curPage = 5;
          } else if (
            jQuery(window).scrollTop() >
            jQuery(".page4").position().top - 92
          ) {
            this.curPage = 4;
          } else if (
            jQuery(window).scrollTop() >
            jQuery(".page3").position().top - 92
          ) {
            this.curPage = 3;
          } else if (
            jQuery(window).scrollTop() >
            jQuery(".page2").position().top - 92
          ) {
            this.curPage = 2;
          } else if (
            jQuery(window).scrollTop() >
            jQuery(".page1").position().top - 92
          ) {
            this.curPage = 1;
          } else {
            this.curPage = 0;
          }
        }
      });
      // console.log(this.isPhone)
    },
    // 滚动到锚点部分
    goPage(idx, offset = 0) {
      this.curPage = idx;
      window.scrollTo({
        top: jQuery(".page" + idx).position().top - 46 + offset,
        behavior: "smooth",
      });
    },
    // 滚动到联系我们
    gotoMao() {
      window.scrollTo({
        top: jQuery(".contactUsBox").offset().top,
        behavior: "smooth",
      });
      // contactUsBox
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
