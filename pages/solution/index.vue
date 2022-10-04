<template>
  <div class="productInfoBox">
    <!-- 轮播图 -->
    <carousel :list="banner2" />
    <!-- <div class="productInfo infoBox infoBg1">
      <h3>公共安全解决方案</h3>
      <div class="bd">
        <div class="publicSolutions">
          <div class="l">
            <h4><strong>公共安全解决方案集</strong><span>主要用于复杂情况的接报、多源异构情报数据的分析，提供数据分析服务，优化资源配置支持指挥控制、辅助决策</span></h4>
            <ul>
              <li v-for="(item,index) in publicSoluctionList" :key="index" :class="{active:activePublic===index}" @mouseover="touchPublicSolution(index)">
                <span><img :src="item.titleImg" alt=""></span>
              </li>
            </ul>
          </div>
          <div class="r">
            <ul>
              <li v-for="(item,index) in publicSoluctionList[activePublic].list" :key="index">
                <div class="img">
                  <img :src="item.img" alt="">
                </div>
                <div class="desc">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.desc }}</span>
                  <a :href="item.src">learn more →</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="productInfo infoBox infoBg2">
      <h3>{{ $t('solution.solutions.title') }}</h3>
      <div class="bd">
        <ul class="solutionAppList">
          <li v-for="(item,index) in solutionListData" :key="index">
            <div class="box">
              <div class="img">
                <van-image lazy-load :src="baseConfig.ApiUrl.baseApi+item.banner" alt="" />
              </div>
              <div class="desc">
                <span>{{ item.typetitle }}</span>
                <a :href="'/sdetail/' + item.id">{{ $t('solution.solutions.detail') }}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="productInfo infoBox dnsSolution" style="background:#f9fafb;">
      <h3>DNS解决方案</h3>
      <h4>助力电信运营商应对长期进行网络运营、拥有海量的用户以及丰富的行业应用，特别是大数据时代的到来挑战</h4>
      <div class="bd">
        <div class="dnsSolution-nav">
          <span :class="{active:activeDNS===0}" @mouseover="touchDNSSolution(0)">ISP的DNS解析方案</span>
          <span :class="{active:activeDNS===1}" @mouseover="touchDNSSolution(1)">政企的DNS方案</span>
          <span :class="{active:activeDNS===2}" @mouseover="touchDNSSolution(2)">工业互联网标识解析</span>
        </div>
        <div class="dnsSolution-bd">
          <div class="dnsSolution-item">
            <div class="dnsSolution-item-pics">
              <template v-for="(item,index) in DNSSoluctionList[activeDNS].list">
                <div :key="index" :class="'dnsSolution-item-picsDns '+item.color">
                  <div class="info">
                    <i :class="item.icon" />
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.desc }}</span>
                  </div>
                  <a :href="item.src">查看详情 ></a>
                </div>
                <div v-if="index<(DNSSoluctionList[activeDNS].list.length-1)" :key="'ddd'+index">
                  <div style="padding-top:15px;">
                    →
                  </div>
                </div>
              </template>
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
import { mapState } from 'vuex'
import carousel from '../../components/banner/carouselSolution'
import contactUs from '../../components/index/contactUs2'

export default {
  components: {
    carousel,
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
  async asyncData ({ $axios, store }) {
    const PREFIX_URL = store.state.baseUrl
    // 获取首页的banner
    const indexInfo = await $axios({
      method: 'get',
      url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=294`
    }) || {}
    const banner2 = []
    const indexInfoRows = indexInfo.data && indexInfo.data.data && indexInfo.data.data.rows || []
    for (let i = 0; i < indexInfoRows.length; i++) {
      const item = indexInfo.data.data.rows[i]
      if (item.categoryTitle === 'banner2') {
        const titleList = item.typekeyword.split('|')
        const descList = item.typedescrip.split('|')
        const routerUrlList = item.typelink.split('@')
        const imgList = JSON.parse(item.categoryImg)
        if (titleList.length === descList.length && titleList.length === imgList.length) {
          for (let i = 0; i < titleList.length; i++) {
            banner2.push({
              url: imgList[i].path,
              routerUrl: routerUrlList[i],
              h3: titleList[i],
              h4: descList[i]
            })
          }
        }
      }
    }

    const solutionList =
      (await $axios({
        method: 'get',
        url: `${PREFIX_URL}/cms/category/list.do?pageSize=999&categoryId=150`
      })) || {}
    const solutionRows = (solutionList.data && solutionList.data.data && solutionList.data.data.rows) || []
    const solutionListData = solutionRows.map((item) => {
      if (JSON.parse(item.categoryImg).length === 1) {
        item.banner = JSON.parse(item.categoryImg)[0].path
      }
      if (JSON.parse(item.categoryImg).length === 2) {
        item.banner = JSON.parse(item.categoryImg)[0].path
        item.icon = JSON.parse(item.categoryImg)[1].path
      }
      // item.icon = JSON.parse(item.categoryImg)[1].path
      return item
    })

    return {
      banner2,
      solutionListData
    }
    // 判断是否在服务端
  },

  data () {
    return {
      activePublic: 0,
      solutionAppList: [
        {
          name: this.$t('solution.solutions.emtel'),
          img: require('../../assets/images/solution/solutionList1.jpg'),
          url: '/sdetail/265'
        },
        {
          name: this.$t('solution.solutions.dns'),
          img: require('../../assets/images/solution/solutionList2.jpg'),
          url: '/sdetail/162'
        },
        {
          name: this.$t('solution.solutions.iiot'),
          img: require('../../assets/images/solution/solutionList3.jpg'),
          url: '/sdetail/298'
        },
        {
          name: this.$t('solution.solutions.ndrs'),
          img: require('../../assets/images/solution/solutionList4.jpg'),
          url: '/sdetail/252'
        },
        {
          name: this.$t('solution.solutions.conterFire'),
          img: require('../../assets/images/solution/solutionList5.jpg'),
          url: '/sdetail/306'
        },
        // {
        //   name: '一站式公共安全服务',
        //   img: require('../../assets/images/solution/solutionList6.jpg'),
        //   url: '/sdetail/161'
        // },
        {
          name: this.$t('solution.solutions.ioam'),
          img: require('../../assets/images/solution/solutionList7.jpg'),
          url: '/sdetail/331'
        }
      ],
      publicSoluctionList: [
        {
          titleImg: require('../../assets/images/product/productTitle01.png'),
          list: [
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            },
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            },
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            }
          ]
        },
        {
          titleImg: require('../../assets/images/product/productTitle02.png'),
          list: [
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报2',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            },
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报2',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            }
          ]
        },
        {
          titleImg: require('../../assets/images/product/productTitle03.png'),
          list: [
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报3',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            },
            {
              img: 'http://iph.href.lu/400x200',
              name: '情况捷报3',
              desc: '情况接报、快速合并汇总，形成情况数据资源',
              src: '#'
            }
          ]
        }
      ],
      activeDNS: 0,
      DNSSoluctionList: [
        {
          list: [
            {
              icon: 'dns-icon01',
              color: 'green',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon02',
              color: 'purple',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon03',
              color: 'blue',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon04',
              color: 'orange',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            }
          ]
        },
        {
          list: [
            {
              icon: 'dns-icon01',
              color: 'green',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon02',
              color: 'purple',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon03',
              color: 'blue',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            }
          ]
        },
        {
          list: [
            {
              icon: 'dns-icon02',
              color: 'purple',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon03',
              color: 'blue',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            },
            {
              icon: 'dns-icon04',
              color: 'orange',
              name: 'Cacher',
              desc: 'Domain Name Server',
              src: '#'
            }
          ]
        }
      ]

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
    this.init()
  },
  methods: {
    touchPublicSolution (idx) {
      this.activePublic = idx
    },
    touchDNSSolution (idx) {
      this.activeDNS = idx
    },
    init () {
      console.log(this.isPhone)
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
