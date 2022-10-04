<template>
  <div class="aboutUsBox">
    <div v-progressive="[bannerBg]" class="banner tc-progressive-image">
      <div class="w1200">
        <strong style="margin-left: -300px">{{
          $t("about.slogan.fight")
        }}</strong>
        <strong style="margin-left: -100px">{{
          $t("about.slogan.happy")
        }}</strong>
        <strong style="padding-left: 100px">{{
          $t("about.slogan.share")
        }}</strong>
        <strong style="padding-left: 300px">{{
          $t("about.slogan.pattern")
        }}</strong>
        <!-- <span>一体化知识平台，面向行业的知识图谱</span> -->
      </div>
    </div>
    <div class="infoBox info">
      <h3>{{ $t("about.introduction.title") }}</h3>
      <h4>{{ $t("about.introduction.desc") }}</h4>
      <div class="bd">
        <p>{{ $t("about.introduction.content1") }}</p>
        <p>{{ $t("about.introduction.content2") }}</p>
        <p>{{ $t("about.introduction.content3") }}</p>
        <p>
          <img
            style="width: 100%"
            src="../../assets/images/about/history.png"
            alt=""
          >
        </p>
      </div>
    </div>
    <div
      v-progressive="[cultureBg]"
      class="infoBox culture tc-progressive-image"
    >
      <h3>{{ $t("about.strategy.title") }}</h3>
      <div class="bd">
        <div class="cultureFlex">
          <!-- <div style="text-align:center;">
            <img src="../../assets/images/about/culture.jpg" alt="">
          </div> -->
          <div class="cultureFlex-dl">
            <div class="culture-item">
              <div class="item-img" />
              <div>
                <span>{{ $t("about.strategy.location.title") }}</span>
              </div>
            </div>
            <div class="culture-item">
              <div class="item-img" />
              <div>
                <span>{{
                  $t("about.strategy.differentialCompetition.title")
                }}</span>
              </div>
            </div>
            <div class="culture-item">
              <div class="item-img" />
              <div>
                <span>{{ $t("about.strategy.demand.title") }}</span>
              </div>
            </div>
            <div class="culture-item">
              <div class="item-img" />
              <div>
                <span>{{ $t("about.strategy.cooperation.title") }}</span>
              </div>
            </div>

            <!-- <dl>
              <dt>{{$t('about.strategy.location.title')}}</dt>
              <dd>{{$t('about.strategy.location.desc')}}</dd>
            </dl>
            <dl>
              <dt>{{$t('about.strategy.differentialCompetition.title')}}</dt>
              <dd>{{$t('about.strategy.differentialCompetition.desc')}}</dd>
            </dl>
            <dl>
              <dt>{{$t('about.strategy.demand.title')}}</dt>
              <dd>{{$t('about.strategy.demand.desc')}}</dd>
            </dl>
            <dl>
              <dt>{{$t('about.strategy.cooperation.title')}}</dt>
              <dd>{{$t('about.strategy.cooperation.desc')}}</dd>
            </dl> -->
          </div>
        </div>
      </div>
    </div>
    <div class="infoBox joinUs">
      <h3>加入我们</h3>
      <div class="bd">
        <JoinUs :list="joinUsListData" />
      </div>
    </div>
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
              <dt>{{ $t("about.contactUs.phone.title") }}</dt>
              <dd>{{ $t("about.contactUs.phone.info") }}</dd>
            </dl>
            <dl>
              <dt>{{ $t("about.contactUs.fax.title") }}</dt>
              <dd>{{ $t("about.contactUs.fax.info") }}</dd>
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
                  title="北京泰策科技"
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
</template>
<script>
import { mapState } from 'vuex'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
import JoinUs from '@/components/index/joinUs'

export default {
  components: {
    JoinUs,
    BaiduMap,
    BmInfoWindow
  },
  // props: {
  //   studentWorksList: {
  //     type: Array,
  //     default () {
  //       return []
  //     }
  //   }
  // },
  data () {
    return {
      joinUsListData: [],
      center: { lng: 0, lat: 0 },
      zoom: 3,
      bannerBg: require('@/assets/images/about/banner.jpg'),
      cultureBg: require('@/assets/images/about/zhanlueBg.png')
    }
  },
  async asyncData ({ $axios, store }) {
    // const PREFIX_URL = store.state.baseUrl;
    // const queryConfig = {
    //   method: "post",
    //   url: `${PREFIX_URL}/cms/content/list.do`,
    //   params: {
    //     pageNo: 1,
    //     pageSize: 10,
    //     contentTitle: "joinUs",
    //   },
    // };
    // const joinList = (await $axios(queryConfig)) || {};
    // // console.log(joinList, 'list');
    // const joinListRows =
    //   (joinList.data && joinList.data.data && joinList.data.data.rows) || [];
    // const joinUsListData = joinListRows.map((item) => {
    //   const title = item.contentKeyword.split("|")[0];
    //   const addr = item.contentKeyword.split("|")[1];
    //   const number = item.contentKeyword.split("|")[2];
    //   let objs = {
    //     title,
    //     addr,
    //     number,
    //     content: item.contentDetails,
    //   };
    //   return objs;
    // });
    // // console.log(joinUsListData, 'list');
    // return {
    //   joinUsListData,
    // };
  },
  computed: {
    ...mapState(['isPhone'])
    // imgUrls () {
    // }
  },
  created () {},
  mounted () {
    this.init()
  },
  methods: {
    handler () {
      this.center.lng = 116.33114
      this.center.lat = 39.95937
      this.zoom = 15
    },
    init () {
      // console.log(this.isPhone);
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
