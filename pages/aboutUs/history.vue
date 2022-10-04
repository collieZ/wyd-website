<template>
  <div class="aboutUsBox">
    <div class="banner">
      <div class="w1200">
        <strong style="margin-left:-300px;">拼搏</strong>
        <strong style="margin-left:-100px;">快乐</strong>
        <strong style="padding-left:100px;">分享</strong>
        <strong style="padding-left:300px;">格局</strong>
        <!-- <span>一体化知识平台，面向行业的知识图谱</span> -->
      </div>
    </div>
    <div class="infoBox" style="padding:80px 0;">
      <h3>发展历程</h3>
      <div class="bd">
        <p>
          <van-image lazy-load style="width:100%;" src="../../assets/images/about/history.png" alt=""/>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
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
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
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
      // console.log(this.isPhone)
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
