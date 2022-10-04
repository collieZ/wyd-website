<template>
  <div class="joinus-wrapper">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="(item, index) of list"
        :key="index"
        :name="index + 1"
      >
        <template #title>
          <div class="join-title">
            <i v-show="activeName == index + 1" class="title-pre"></i>
            <span>
              {{ item.title }}
            </span>
          </div>
        </template>
        <template #value>
          <div class="join-subtitle">
            <span> {{ item.number }} </span>
            <span> {{ item.addr }} </span>
          </div>
        </template>
        <template #default>
          <div class="join-content" v-html="item.content"></div>
        </template>
      </van-collapse-item>
      <!-- <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
    </van-collapse>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeName: "",
    };
  },
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/mobile.less");
.joinus-wrapper {
  /deep/ .van-cell {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.join-title {
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  // height: 80px;
  span {
    margin-left: 50px;
  }
  .title-pre {
    position: absolute;
    left: 0;
    top: 50%;
    background: #f4706d;
    width: 10px;
    height: 27px;
    margin-top: -13px;
    transition: all 0.4s ease-in;
  }
}
.join-subtitle {
  // height: 80px;
  span {
    color: #333;
    margin-right: 12px;
  }
}
.join-content {
  font-weight: 400;
  color: #333;
  background-color: #f5f5f5;
  padding: 20px;
  p {
    background-color: #f5f5f5 !important;
  }
}
@media (max-width: @gridBreakpoints[sm]) {
  .join-title {
    display: flex;
    align-items: center;
    height: 100%;
    span {
      margin-left: 0;
    }
    .title-pre {
      display: none !important;
    }
  }
  .join-subtitle {
    span {
      display: block;
      text-align: left;
      margin-right: 0px;
    }
  }
  .join-content {
    font-size: 16px;
  }
}
</style>