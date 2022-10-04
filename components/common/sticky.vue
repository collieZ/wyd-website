<template>
  <div class="sticky-wrap">
    <div class="function">
      <!-- <div class="function-item">
        <a class="wechat" :href="qqUrl" @click="gotoQQ" />
      </div> -->
      <!-- <div class="function-item">
        <a class="tel" :href="phoneUlr">
          <span
            class="icon"
            :style="{ color: '#cf2729', fontSize: iconSize1 + 'px' }"
          >&#xe626;</span>
        </a>
      </div> -->
      <!-- <div v-show="!isUnfold && !isPhone" class="function-item"> -->
      <div class="function-item" v-if="isMacOS === false || true">
        <a class="qq" href="" @click="gotoQQ" />
      </div>
      <!-- <div class="function-item">
        <a class="cs"><span>{{$t('sticky.text')}}</span></a>
      </div> -->
      <div v-if="showReTop == true" class="function-item" @click="scrollTop">
        <span class="top" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data () {
    return {
      iconSize: 20,
      iconSize1: 30,
      isUnfold: false,
      qqUrl: '',
      phoneUlr: '',
      showReTop: false,
      isMacOS: undefined,
    }
  },
  computed: {
    ...mapState(['isPhone', 'paintingInfo'])
  },
  watch: {
    isPhone () {
      this.changeSize()
    }
  },
  created() {
    if(process.client) {
      this.isMacOS = /macintosh|mac os x/i.test(navigator.userAgent);
    }
  },
  mounted () {
    if (process.client) {
      this.qqUrl = `tencent://message/?uin=${
        this.paintingInfo ? '305218267' : ''
      }&Site=sc.chinaz.com&Menu=yes`
      this.phoneUlr = `tel:${this.paintingInfo ? '10086' : ''}`
    }
    const height = jQuery(window).height()
    // scroll() 方法为滚动事件
    jQuery(window).scroll(() => {
      if (jQuery(window).scrollTop() > height) {
        this.showReTop = true
      } else {
        this.showReTop = false
      }
    })
  },
  methods: {
    gotoQQ () {
      const u = navigator.userAgent
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
          window.open(
            'http://wpa.qq.com/msgrd?v=3&uin=305218267&site=qq&menu=yes'
          )
        } else {
          window.open(
            'mqqwpa://im/chat?chat_type=wpa&uin=' +
              '305218267' +
              '&version=1&src_type=web&web_src=oicqzone.com'
          )
        }
      } else if (
        u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
      ) {
        window.open(
          'http://wpa.qq.com/msgrd?v=3&uin=305218267&site=qq&menu=yes'
        )
      } else {
        window.open(
          'http://wpa.qq.com/msgrd?v=3&uin=305218267&site=qq&menu=yes'
        )
      }
    },
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    openWechat () {
      this.$emit('wechat-click')
    },
    changeSize () {
      if (this.isPhone === true) {
        this.iconSize = 20
        this.iconSize1 = 30
      } else {
        this.iconSize = 26
        this.iconSize1 = 36
      }
    }
  }
}
</script>
<style scoped lang="less">
@import url('../../assets/css/color');
.sticky-wrap {
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 9999;
}
.function {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}
.function-item {
  width: 42px;
  transition: all 1s ease-in-out;
  cursor: pointer;
  margin-bottom: 24px;
  background: #fff;
  border-radius: 42px;

  .cs {
    display: block;
    border-radius: 42px;
    padding: 40px 0;
    background: linear-gradient(#f4b057, #d76b3a);
    span {
      display: block;
      width: 20px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
    }
  }
  .wechat {
    display: block;
    width: 100%;
    height: 42px;
    border-radius: 42px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: url(../../assets/images/common/icon-wechat.png) center center
      no-repeat;
    background-size: 22px 22px;
  }
  .qq {
    display: block;
    width: 100%;
    height: 42px;
    border-radius: 42px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: url(../../assets/images/common/icon-qq.png) center center
      no-repeat;
    background-size: 22px 22px;
  }
  .top {
    display: block;
    width: 100%;
    height: 42px;
    border-radius: 42px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: url(../../assets/images/common/icon-top.png) center center
      no-repeat;
    background-size: 20px 20px;
  }
}
.function-item a {
  text-decoration: none;
  cursor: pointer;
}
</style>
