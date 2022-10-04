<template>
  <div class="detailBox">
    <div class="banner-item">
      <div
        v-progressive="[baseConfig.ApiUrl.baseApi + detailInfo.banner.img]"
        class="tc-progressive-image"
        :style="{height:bannerHeight+'px'}"
      >
        <div class="mid">
          <h3>{{ detailInfo.banner.key }}</h3>
          <h4>{{ detailInfo.banner.desc }}</h4>
          <a @click="gotoMao">{{ $t('productDetail.apply') }}</a>
        </div>
      </div>
    </div>
    <div class="detailModule infoBox">
      <h3>{{ $t('productDetail.introduction.title') }}</h3>
      <div class="bd">
        <div class="productIntroduction">
          <div class="l">
            <van-image lazy-load :src="baseConfig.ApiUrl.baseApi+detailInfo.productIntroduction.img" alt="" />
          </div>
          <div class="r">
            <div class="r-box">
              <div>
                <!-- <i class="yinhao" /> -->
                <p>{{ detailInfo.productIntroduction.desc }}</p>
                <!-- <i class="yinhao-r" /> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <div style="padding:0 100px;" v-html="detailInfo.productIntroduction" /> -->
        <!-- <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p>
        <p>产品介绍</p> -->
      </div>
    </div>
    <div class="detailModule infoBox" style="background:#f4f5f7;">
      <h3>{{ $t('productDetail.feature.title') }}</h3>
      <div class="bd productTD">
        <div class="tedian">
          <template v-for="(items,index) in detailInfo.productTrait">
            <div :key="index" class="item">
              <div>
                <i><img :src="baseConfig.ApiUrl.baseApi+items.src" alt=""></i>
                <strong>{{ items.name }}</strong><span>{{ items.desc }}</span>
              </div>
            </div>
          </template>
          <!-- <div><i><img src="../../assets/images/detail/icontd2.png" alt="" /></i><strong>特点2</strong><span>特点描述</span></div> -->
          <!-- <div><i><img src="../../assets/images/detail/icontd3.png" alt="" /></i><strong>特点3</strong><span>特点描述</span></div> -->
        </div>
        <!-- <div class="tedianMain">
          <img :src="baseConfig.ApiUrl.baseApi+detailInfo.productTraitImg" alt="">
        </div> -->
      </div>
    </div>
    <div v-if="paramsId !== '205' && paramsId !== '315'" class="detailModule infoBox">
      <h3>{{ $t('productDetail.scene.title') }}</h3>
      <!-- <h4>
        一体化知识平台是一套基于知识图谱技术的知识管理与洞察分析平台，包含知识建模、抽取、融合、存储、计算及应用等技术组件和功能模块
        利用知识工程为大数据添加语义/知识，使数据产生智慧（smart data），完成从数据到信息到知识，最终到智能应用的转变
        从而实现对数据的洞察、提供用户关心问题的答案、为决策提供支持、改进用户体验等目标
      </h4> -->
      <h4>{{ detailInfo.app.titleInfo }}</h4>
      <div class="bd">
        <ul class="appSence">
          <li v-for="(items,index) in detailInfo.app.list" :key="index">
            <div class="img">
              <van-image lazy-load :src="baseConfig.ApiUrl.baseApi+items.src" alt="" />
            </div>
            <h4>{{ items.name }}</h4>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="paramsId !== '205' && paramsId !== '315'" class="detailModule infoBox" style="background:#f4f5f7;">
      <h3>{{ $t('productDetail.profit.title') }}</h3>
      <div class="bd">
        <ul class="customerRevenue">
          <li v-for="(items,index) in detailInfo.profit" :key="index">
            <div class="img">
              <van-image lazy-load :src="baseConfig.ApiUrl.baseApi+items.src" alt="" />
            </div>
            <h4>{{ items.name }}</h4>
            <span>{{ items.desc }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="detailInfo.dnsDetail.show" class="productInfo infoBox infoBg1 dnsInfo">
      <h3>{{ detailInfo.dnsDetail.H1 }}</h3>
      <h4>{{ detailInfo.dnsDetail.H2 }}</h4>
      <div class="bd">
        <van-tabs swipe-threshold="3">
          <van-tab v-for="(tab,index) of detailInfo.dnsDetail.keyList || []" :key="index" :title="tab">
            <div class="dnsInfoShow">
              <div class="desc">
                <div>
                  <!-- <strong>Authorizor</strong> -->
                  <span>{{ detailInfo.dnsDetail.detailList[index] }}</span>
                </div>
                <!-- <div>
                  <strong>DNS Analyzer</strong>
                  <span>针对DNS数据进行深度数据挖掘的分析软件，提供针对源IP、目的IP、域名、请求类型、请求结果的定制分析功能</span>
                </div> -->
              </div>
              <div class="img">
                <van-image lazy-load src="../../assets/images/product/dnsTab01.png" alt="" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 联系我们 -->
    <contactUs />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import contactUs from '../../components/index/contactUs2'

export default {
  components: {
    contactUs
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
  async asyncData ({ $axios, route, params, store }) {
    const PREFIX_URL = store.state.baseUrl
    const moduleList = await $axios({
      method: 'get',
      url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=${params.id}`
    }) || {}
    const detailData = {
      banner: {
        key: '',
        desc: '',
        img: ''
      },
      productIntroduction: {
        desc: '',
        img: ''
      },
      productTrait: [],
      productTraitImg: '',
      app: {
        titleInfo: '',
        list: []
      },
      profit: [],
      dnsDetail: {
        show: false
      }
    }
    const moduleListRows = moduleList.data && moduleList.data.data && moduleList.data.data.rows || []
    for (let i = 0; i < moduleListRows.length; i++) {
      const item = moduleListRows[i]
      if (item.categoryTitle === 'banner') {
        detailData.banner.key = item.typekeyword
        detailData.banner.desc = item.typedescrip
        detailData.banner.img = JSON.parse(item.categoryImg)[0].path
      }
      if (item.categoryTitle === 'detail') {
        const detail = await $axios({
          method: 'get',
          url: `${PREFIX_URL}/cms/content/list.do?contentCategoryId=${item.id}`
        }) || {}
        const detailRows = detail.data && detail.data.data && detail.data.data.rows || []
        if (detailRows.length > 0) {
          detailData.productIntroduction.desc = detailRows[0].contentDescription
          if (JSON.parse(detailRows[0].contentImg).length > 0) {
            detailData.productIntroduction.img = JSON.parse(detailRows[0].contentImg)[0].path
          }
          // detailData.productIntroduction = detail.data.data.rows[0].contentDetails
        }
      }
      if (item.categoryTitle === 'trait') {
        const productTraitName = item.typekeyword.split('|')
        const productTraitDesc = item.typedescrip.split('|')
        const productTraitImg = JSON.parse(item.categoryImg)

        detailData.productTrait = productTraitName.map((item, index) => {
          let src = ''
          if (productTraitImg[index]) {
            src = productTraitImg[index].path
          }
          return {
            name: item,
            desc: productTraitDesc[index],
            src
          }
        })
        detailData.productTraitImg = item.typelitpic
      }
      if (item.categoryTitle === 'appList') {
        detailData.app.titleInfo = item.typedescrip
        const keyList = item.typekeyword.split('|')
        const urlList = JSON.parse(item.categoryImg)
        detailData.app.list = keyList.map((item, index) => {
          let src = ''
          if (urlList[index]) {
            src = urlList[index].path
          }
          return {
            name: item,
            src
          }
        })
      }
      if (item.categoryTitle === 'profitList') {
        // console.log(item)
        const keyList = item.typekeyword.split('|')
        const detailList = item.typedescrip.split('|')
        const urlList = JSON.parse(item.categoryImg)
        detailData.profit = keyList.map((item, index) => {
          let src = ''
          if (urlList[index]) {
            src = urlList[index].path
          }
          return {
            name: item,
            desc: detailList[index],
            src
          }
        })
      }
      // 产品详情页面根据后端配置新增dns详情切换板块
      if (item.categoryTitle === 'dnsDetail') {
        detailData.dnsDetail.show = true
        // console.log(item, 'itemitemteitme')
        const H1 = item.typeurl.split('|')[0]
        const H2 = item.typeurl.split('|')[1]
        const keyList = item.typekeyword.split('|')
        const detailList = item.typedescrip.split('|')
        const dnsDetail = {
          H1,
          H2,
          keyList,
          detailList
        }
        detailData.dnsDetail = { ...dnsDetail, ...detailData.dnsDetail }
      }
    }
    // moduleList.data.data.rows.forEach(async (item) => {
    // });
    // console.log(detailData)
    // const detailInfoData = await $axios({
    //   method: 'get',
    //   // url: 'baseApi/cms/content/get.do?id=' + route.query.id
    //   url: 'baseApi/cms/content/get.do?id=' + 223
    // });
    // console.log(detailInfoData.data.data)
    // const json1 = JSON.parse(detailInfoData.data.data.contentKeyword)
    // const bannerKey = json1.bannerKey.split(';')
    // const productTrait = json1.sortKeywords.split(';')
    // for (let i = 0; i < productTrait.length; i++) {
    //   productTrait[i] = productTrait[i].split(',')
    // }
    // const json2 = JSON.parse(detailInfoData.data.data.contentDescription)
    // const detailData = {
    //   bannerKey,
    //   bannerImg: JSON.parse(detailInfoData.data.data.contentImg)[0],
    //   productIntroduction: detailInfoData.data.data.contentDetails,
    //   productTrait,
    //   app: {
    //     titleInfo: json2.screenTitle,
    //     list: json2.list1
    //   },
    //   profit: json2.list2
    // }
    return {
      detailInfo: detailData
    }
  },

  data () {
    return {
      // baseConfig,
      baseApi: '',
      bannerHeight: '500',
      item: {
        url: require('../../assets/images/detail/detailBanner.jpg')
      },
      paramsId: '' // 当前路由参数 id 205 => 运营商dns | 315 => 政企dns
    }
  },
  computed: {
    ...mapState(['isPhone', 'baseConfig'])
    // imgUrls () {
    // }
  },
  created () {
    this.paramsId = String(this.$route.params.id)
    // console.log(this.$route.params.id, 'ccc');
  },
  mounted () {
    // console.log('this.baseConfig')
    // console.log(this.baseConfig)
    // this.baseApi = this.baseConfig.ApiUrl.baseApi
    // console.log(this.detailInfo)
    this.init()
  },
  methods: {
    init () {
      // console.log(this.isPhone)
    },
    gotoMao () {
      window.scrollTo({
        top: jQuery('.contactUsBox').offset().top,
        behavior: 'smooth'
      })
      // contactUsBox
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

</style>
