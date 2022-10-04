<template>
  <div class="solutionBox">
    <ul class="solution-show">
      <li v-for="(item,index) in solutionList" :key="index">
        <div out @click="navToPage(item)">
          <van-image lazy-load :src="baseConfig.ApiUrl.baseApi+item.banner" alt="" />
          <div class="info">
            <img :src="baseConfig.ApiUrl.baseApi+item.icon" alt="" />
            <strong>{{ item.typetitle }}</strong>
            <span>{{ item.typekeyword }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  components: {
  },
  props: {
    solutionList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    };
  },
  computed: {
    ...mapState(['isPhone', 'baseConfig'])
    // imgUrls () {
    // }
  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    navToPage (item) {
      this.$router.push({ path: '/sdetail/' + item.id });
    },

    init() {
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
};
</script>

<style lang="less" scoped>

</style>
