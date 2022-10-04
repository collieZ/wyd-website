<template>
  <div class="top-menu">
    <!-- 移动端头部 -->
    <div v-if="topbarShow" class="phone-nav">
      <van-nav-bar
        title="标题"
        left-text="logo"
        right-text="按钮"
        :fixed="true"
        :z-index="99999"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <div slot="left" class="left">
          <div class="logo">
            <img
              src="../../assets/images/company/logo.jpeg"
              style="width: 80px; height: 45px; object-fit: cover;"
              width="100%"
              height="100%"
              alt="公司logo"
              title="logo"
              @click="navToHome"
            >
          </div>
        </div>
        <div slot="title" class="title">
          <!-- <div ref="phoneHeart" :class="heartClass">
            <van-icon
              v-if="isLogin"
              size="30px"
              :color="heartColor"
              name="like"
              style="margin-top: 8px;"
              @click="changeHeartColor"
            />
            <van-icon
              v-else
              size="30px"
              color="rgba(0,0,0,0.6)"
              name="contact"
              style="margin-top: 8px;"
              @click="openLoginDialog"
            />
          </div> -->
        </div>
        <div slot="right" class="right">
          <div class="menu">
            <transition name="fade">
              <span
                v-show="!isOpen"
                class="icon iconfont"
                @click="hideSticky"
              >&#xeb71;</span>
            </transition>
            <transition name="show">
              <van-icon
                v-show="isOpen"
                :key="2"
                name="cross"
                size="20px"
                color="rgba(0,0,0,0.6)"
                @click="showSticky"
              />
            </transition>
          </div>
        </div>
      </van-nav-bar>
    </div>
    <!-- pc端菜单 -->
    <div
      class="pc-nav"
      :class="{
        whiteBar: menuIndex !== 1 && menuIndex !== 3 && menuIndex !== 4,
      }"
    >
      <div id="new-nav" class="pc-nav-bar">
        <div class="nav-left">
          <img
            style="width: 130px; height: 70px; object-fit: cover;"
            src="../../assets/images/company/logo.jpeg"
            class="menuLogo"
            alt="公司logo"
            title="logo"
            @click="navToHome"
          >
        </div>
        <nav class="pc-navs">
          <template v-for="(nav, index) of navbarOptions.menuOptions">
            <a-dropdown
              v-if="nav.subMenuOptions.length != 0"
              :key="index"
              :trigger="['hover']"
            >
              <div
                class="nav-item"
                :class="{ active: index === menuIndex - 1 }"
                @click="navToPage(nav)"
              >
                <span>{{ nav.text }}</span>
              </div>
              <a-menu slot="overlay">
                <!-- <template v-if="nav.text === '产品'">
                  <template class="nav-item-prd">
                    123321
                  </template>
                </template> -->
                <template>
                  <template v-for="(subNav, idx) of nav.subMenuOptions">
                    <a-menu-item v-if="!subNav.children" :key="idx">
                      <!-- 产品一栏单独处理，防止高度过高 -->
                      <!-- <div
                        class="nav-item-prd"
                        v-if="nav.text === '产品'"
                        @click="navToPage(subNav)"
                      >
                        <span>{{ subNav.text + 1 }}</span>
                      </div> -->
                      <!-- 一般nav-item-sub -->
                      <div class="nav-item-sub" @click="navToPage(subNav)">
                        <span>{{ subNav.text }}</span>
                      </div>
                    </a-menu-item>
                    <a-sub-menu v-else :key="idx" class="a-sub-menu-pup">
                      <div slot="title" class="nav-item-sub">
                        <span>{{ subNav.text }}</span>
                      </div>
                      <template v-if="subNav.children">
                        <a-menu-item
                          v-for="(it, ix) of subNav.children"
                          :key="ix"
                        >
                          <div class="nav-item-sub" @click="navToPage(it)">
                            <span>{{ it.text }}</span>
                          </div>
                        </a-menu-item>
                      </template>
                    </a-sub-menu>
                    <!-- <sub-menu v-else :key="idx" :menu-info="subNav" /> -->
                  </template>
                </template>
              </a-menu>
            </a-dropdown>
            <div
              v-else
              :key="index"
              :class="{ active: index === menuIndex - 1 }"
              class="nav-item"
              @click="navToPage(nav)"
            >
              <span>{{ nav.text }}</span>
            </div>
          </template>
          <!-- 中英文切换 目前暂时不显示 -->
          <div v-if="false" class="nav-item-other">
            <span
              :class="{ active: locale == '中文' }"
              @click="changeLang('zh')"
            >中</span>/
            <!-- <span @click="changeLang('')">繁</span>/ -->
            <span
              :class="{ active: locale == 'English' }"
              @click="changeLang('en')"
            >EN</span>
          </div>
        </nav>
        <!-- <div ref="pcHeart" class="heart-cover" :class="heartClass">
          <van-icon
            v-if="isLogin"
            size="30px"
            :color="heartColor"
            :finished="true"
            name="like"
            @click="changeHeartColor"
          ></van-icon>
          <van-icon v-else size="30px" name="user-circle-o" @click="openLoginDialog"></van-icon>
        </div> -->
      </div>
    </div>
    <!-- <div class="pc-nav-margin" ></div> -->
    <!-- 移动端侧边弹出菜单 -->
    <van-popup
      v-model="isOpen"
      position="right"
      :style="{
        height: '100%',
        marginTop: '45px',
        width: '60%',
        zIndex: '9999999',
      }"
    >
      <!-- <van-collapse v-model="activeName" accordion>
        <van-collapse-item @click="testzzw" :is-link="false" title="标题1" name="1"></van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容22</van-collapse-item>
      </van-collapse> -->

      <van-list :v-model="false" :finished="true">
        <van-cell
          v-for="(item, index) in navbarOptions.menuOptions"
          :key="index"
          :title="item.text"
          @click="navToPage(item)"
        >
          <van-icon
            size="20px"
            color="rgba(0,0,0,0.8)"
            :finished="true"
            :name="item.icon"
          />
        </van-cell>
      </van-list>
      <!-- <van-dropdown-menu :overlay="false">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu> -->
    </van-popup>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { Menu } from 'ant-design-vue'
import { Color } from '../../config/color'
// 定义函数式组件
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <i :class="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <i :class="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true 此项必须被定义
  isSubMenu: true,
  props: {
    // 解构a-sub-menu的属性，也就是文章开头提到的为什么使用函数式组件
    ...Menu.SubMenu.props,
    // 接收父级传递过来的菜单信息
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
}

export default {
  // 注册局部组件
  components: {
    'sub-menu': SubMenu
  },
  props: {},
  data () {
    return {
      // activeName: '',
      // value1: 0,
      // option1: [
      //   { text: '全部商品', value: 0 },
      //   { text: '新款商品', value: 1 },
      //   { text: '活动商品', value: 2 },
      // ],

      menuIndex: 1,
      menuCurPage: '',
      locale: '',
      Color,
      heartClass: 'animated pulse infinite delay-0.5s',
      isOpen: false,
      heartColor: 'rgba(0,0,0,0.4)',
      list: [
        {
          path: '/course',
          icon: 'label-o',
          name: '招生简章'
        },
        {
          path: '/news',
          icon: 'notes-o',
          name: '画室动态'
        },
        {
          path: '/contact',
          icon: 'phone-circle-o',
          name: '联系我们'
        },
        {
          path: '/me',
          icon: 'manager-o',
          name: '个人中心'
        }
      ],
      loading: false,
      finished: true,
      /* 电脑端导航栏 */
      navbarOptions: {
        menuLeftLogo: require('../../assets/images/logo/logo.png'),
        menuOptions: [
          {
            type: 'link',
            text: this.$t('menus.home'),
            itext: '',
            path: '/',
            icon: '&#xe616;',
            subMenuOptions: []
          }
          // {
          //   type: 'link',
          //   text: this.$t('menus.AboutUs'),
          //   itext: '',
          //   path: '/aboutUs',
          //   icon: '&#xe616;',
          //   subMenuOptions: [
          //     {
          //       type: 'link',
          //       text: this.$t('menus.introduction'),
          //       path: '/aboutUs',
          //       icon: '&#xe60d;'
          //     }
          // {
          //   type: 'link',
          //   text: '发展历程',
          //   path: '/aboutUs/history',
          //   icon: '&#xe60d;'
          // }
          // {
          //   type: 'link',
          //   text: '新闻动态',
          //   path: '/aboutUs',
          //   icon: '&#xe60d;'
          // },
          // {
          //   type: 'link',
          //   text: '荣誉资质',
          //   path: '/aboutUs',
          //   icon: '&#xe60d;'
          // },
          // {
          //   type: 'link',
          //   text: '联系我们',
          //   path: '/aboutUs',
          //   icon: '&#xe60d;'
          // }
          // ]
          // }
          // {
          //   type: 'link',
          //   text: this.$t('menus.solution'),
          //   path: '/solution',
          //   icon: '&#xe60d;',
          //   subMenuOptions: [
          //     {
          //       type: 'link',
          //       text: '应急解决方案',
          //       path: '/solution'
          //     },
          //     {
          //       type: 'link',
          //       text: '公共安全解决方案',
          //       path: '/solution'
          //     },
          //     {
          //       type: 'link',
          //       text: 'DNS解决方案',
          //       path: '/solution'
          //     }
          //   ]
          // },
          // {
          //   type: 'link',
          //   text: this.$t('menus.product'),
          //   path: '/product',
          //   icon: '&#xe60d;',
          //   subMenuOptions: [
          //     {
          //       type: 'link',
          //       text: 'DNS产品集',
          //       path: '/product'
          //     },
          //     {
          //       type: 'link',
          //       text: '一体化产品集',
          //       path: '/product'
          //     },
          //     {
          //       type: 'link',
          //       text: '工业互联网产品集',
          //       path: '/product'
          //     }
          //   ]
          // },
          // {
          //   type: 'link',
          //   text: this.$t('menus.apply'),
          //   path: '/apply',
          //   subMenuOptions: []
          // }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'isPhone',
      'topbarShow',
      'isLogin',
      'pruductList',
      'solutionList'
    ]) // 加载设备类型;
  },
  watch: {
    solutionList () {
      const map1 = this.solutionList.map((item) => {
        let stack = item.typeurl
        if (stack !== '' && stack != null) {
          stack = stack.split('stack:')[1]
        }
        return {
          stack,
          type: 'link',
          text: item.typetitle,
          path: '/sdetail/' + item.id
        }
      })

      const newArr = this.groupBy(map1, 'stack')
      let lastArr = []
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][0].stack === '') {
          lastArr = lastArr.concat(newArr[i])
        } else {
          lastArr.push({
            type: 'link',
            text: newArr[i][0].stack,
            path: '',
            children: newArr[i]
          })
        }
      }
      // console.log(lastArr);
      // [2] 解决方案子菜单
      this.navbarOptions.menuOptions[2].subMenuOptions = lastArr
      // [3] 产品子菜单
      this.navbarOptions.menuOptions[3].subMenuOptions = this.pruductList.map(
        (item) => {
          return {
            type: 'link',
            text: item.typetitle,
            path: '/pdetail/' + item.id
          }
        }
      )
    },
    $route (to, from) {
      this.changeTabbar(to.path)
    }
  },
  created () {},
  mounted () {
    if (this.$i18n.locale === 'zh') {
      this.locale = '中文'
    } else {
      this.locale = 'English'
    }
    // 监听路由
    const path = this.$route.path
    this.changeTabbar(path)
  },

  methods: {
    ...mapMutations(['changeMenuIndex', 'changeLoginDialogShow', 'SET_LANG']),
    /**
     * @method 导航到具体页面
     * @param {listItem}
     * @return void
     */
    changeLang (e) {
      // 切换语言
      this.$i18n.locale = e
      this.SET_LANG(e)
      this.locale = this.$t('locale.' + e)
      this.$cookies.set('lang', e)
      if (process.client) {
        this.$nextTick(() => {
          window.location.reload()
        })
      }
    },
    groupBy (array, id) {
      const groups = {}
      array.forEach(function (o) {
        const group = JSON.stringify(o[id])
        groups[group] = groups[group] || []
        groups[group].push(o)
      })
      return Object.values(groups)
    },
    navToPage (item) {
      this.changeTabbar(item.path)
      this.isOpen = false
      this.$router.push({ path: item.path })
    },

    navToHome () {
      this.$router.push({ path: '/' })
    },

    openLoginDialog () {
      this.changeLoginDialogShow(true)
    },

    // 监听路由,更改tabbar激活菜单
    changeTabbar (path) {
      if (path === '/') {
        this.menuIndex = 1
      } else if (path.indexOf('/aboutUs') === 0) {
        this.menuIndex = 2
      } else if (path === '/solution') {
        this.menuIndex = 3
      } else if (path === '/product') {
        this.menuIndex = 4
      } else if (path === '/apply') {
        this.menuIndex = 5
      } else {
        this.menuIndex = 10
      }
      this.changeMenuIndex(this.menuIndex)
    },
    onLoad () {
      // 异步更新数据
      // 加载状态结束
      this.loading = true
      this.finished = true
      // 数据全部加载完成
    },
    onClickLeft () {},
    onClickRight () {
      this.isOpen = !this.isOpen
    },
    changeHeartColor () {
      if (this.heartColor === '#cf2729') {
        this.$toast('谢谢你再次喜欢我!')
      } else {
        this.addPraise()
      }
      this.$refs.phoneHeart.className = ''
      this.$refs.pcHeart.className = ''
    },
    hideSticky () {
      this.$emit('menu-open')
    },
    showSticky () {
      this.$emit('menu-close')
    }
  }
}
</script>
<style scoped lang="less">
@import url("../../assets/css/color.less");
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
  display: none;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show-enter-active,
.show-leave-active {
  transition: all 0.2s;
  display: none;
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
.left {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  width: 100px;
  height: auto;
  z-index: 999;
}
.menu,
.icon {
  font-size: 26px;
}
.phone-nav {
  display: none;
}
.pc-nav {
  display: block;
  width: 100%;
  position: absolute;
  z-index: 111;
  height: 90px;
  padding: 20px 0;
  top: 0;
  &.whiteBar {
    position: relative;
    .nav-item {
      color: #333;
    }
    .nav-item-other {
      color: #999;
      .active {
        color: #0364ae;
        font-weight: bold;
      }
    }
  }
  .whiteBar .nav-item:hover,
  .whiteBar .nav-item.active,
  .nav-item.ant-dropdown-open,
  .nav-item:hover,
  .nav-item.active {
    color: #0364ae;
  }
}
// .pc-nav-margin {
//   width: 100%;
//   height: 90px;
//   background: transparent;
// }
.iconfont {
  font-size: 30px;
}

.pc-nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
}
/** 导航样式 */
.flex {
  display: -webkit-flex;
  display: flex;
}
.menuLogo {
  width: auto;
}
.nav-left {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 5px;
  cursor: pointer;
}
.pc-navs {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-left: 30px;
  font-size: 14px;
}
.ant-dropdown-menu {
  // border-radius: 0;
  overflow: hidden;
  border-radius: 4px;
  // width: 350px;
  transform: translate(0, 2px);
  // box-shadow: none;
  overflow: hidden;
}
.ant-dropdown-menu-submenu-popup .ant-dropdown-menu-item {
  width: 100%;
  float: none;
}
.ant-dropdown-menu-item {
  // width: 50%;
  // float: left;
  clear: none;
  padding: 5px 20px;
  .nav-item-sub {
    line-height: 30px;
    // color: #fed4c1;
    color: #333;
  }
  &:hover {
    background: none;
    .nav-item-sub {
      span {
        color: #0364ae;
      }
      &:after {
        background: #fff;
      }
    }
  }
}
.nav-item-other {
  height: 50px;
  position: relative;
  min-width: 100px;
  padding: 0 20px;
  text-align: center;
  line-height: 50px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #999;
  .active {
    color: #0364ae;
    font-weight: bold;
  }
}
.nav-item {
  // .flex;
  // flex-flow: row nowrap;
  // align-items: center;
  // margin-right: 50px;
  height: 50px;
  position: relative;
  min-width: 100px;
  padding: 0 20px;
  text-align: center;
  line-height: 50px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  // &:after {
  //   content: "";
  //   height: 2px;
  //   width: 0;
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   margin: 0 auto;
  //   transition: all .5s ease;
  // }
  // &:hover::after {
  //   width: 100%;
  // }
}
.arrow {
  transition: all 0.5s;
}
// .nav-item:hover span,
// .nav-item:hover .iconfont {
//   color: #d76b3a;
// }

// .nav-item:hover .arrow {
//   transform: rotate(180deg);
// }
.nav-item:hover .submenu {
  opacity: 0.965;
  width: 336px;
  overflow: visible;
}
.nav-item .iconfont {
  font-size: 17px;
  margin-left: 5px;
}
.submenu {
  background: transparent;
  position: absolute;
  top: 25px;
  left: -165px;
  transition: opacity 0.5s;
  opacity: 0;
  padding-top: 10px;
  overflow: hidden;
  width: 0;
}
.submenu-arrow {
  left: 55%;
  top: 7px;
  transform: translateX(-50%) rotate(45deg);
  border-top-color: #fff;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #fff;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  position: absolute;
  display: block;
  width: 8.48528137px;
  height: 8.48528137px;
  background: transparent;
  border-width: 4.24264069px;
  border-style: solid;
  z-index: 3;
}
.submenu-list {
  color: @color-grey-1;
  .flex;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid @color-black-3;
  background: rgba(255, 255, 255, 0.95);
  overflow: hidden;
}
.submenu-list:hover {
  color: @color-brand;
}
.submenu-logo {
  padding: 10px;
}
.submenu-title {
  padding: 10px 0 0 10px;
  font-size: 14px;
}
.submenu-content {
  padding: 5px 20px 20px 10px;
  width: 300px;
}
@media screen and(max-width: 720px) {
  .pc-nav {
    display: none;
  }
  .pc-nav-margin {
    display: none;
  }
  .phone-nav {
    display: block;
    position: relative;
    z-index: 9999;
    width: 100%;
    min-height: 45px;
  }
}
</style>
<style lang="less">
.ant-dropdown-menu {
}
.ant-dropdown-menu-submenu-popup ul.ant-dropdown-menu {
  overflow: hidden;
  margin: 0;
  background: transparent;
  transition: none;
  background: #fff;
  // background: #d76b3a;
  border-radius: 4px;
  margin-left: 15px;
}
.ant-dropdown-menu > .ant-dropdown-menu-submenu {
  // width: 50%;
  // float: left;
  clear: none;
  padding: 5px 20px;
}
.ant-dropdown-menu
  > .ant-dropdown-menu-submenu
  > .ant-dropdown-menu-submenu-title {
  line-height: 30px;
  color: #333;
  // color: #fed4c1;
  padding: 0;
}
div.ant-dropdown-menu-item:hover,
div.ant-dropdown-menu-submenu-title:hover {
  background: transparent;
}
.ant-dropdown-menu-submenu-arrow {
  top: 5px;
  i.ant-dropdown-menu-submenu-arrow-icon {
    color: #333;
  }
}
.ant-dropdown-menu-submenu {
}

.nav-item-prd {
  line-height: 30px;
  color: #333;
  width: 240px;
  max-height: 250px;
  overflow: hidden;
  &:hover {
    span {
      color: #e71d23;
    }
    &:after {
      background: #fff;
    }
  }
  // color: #333;
  // &:hover {
  //   background: none;
  //   .nav-item-sub {

  //   }
  // }
}
</style>
