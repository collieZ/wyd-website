<template>
  <div class="contactUsBox">
    <!-- 头部文字 -->
    <div class="bd">
      <div class="tc-title">
        <h3>
          <span>{{ $t("home.contactUs.title") }}</span>
        </h3>
        <h4>{{ $t("home.contactUs.desc") }}</h4>
      </div>
      <!-- 表单内容 -->
      <van-cell-group class="form">
        <van-field
          v-model="name"
          label=""
          maxlength="10"
          :placeholder="$t('home.contactUs.form.name')"
          label-class="name"
          :error-message="error.name"
          :error="!nameOk"
          required
        />
        <van-field
          v-model="phone"
          :error-message="error.phone"
          :error="!phoneOk"
          type="tel"
          label=""
          maxlength="11"
          :placeholder="$t('home.contactUs.form.phone')"
          required
        />
        <van-field
          v-model="message"
          type="textarea"
          label=""
          maxlength="300"
          :placeholder="$t('home.contactUs.form.message')"
          style="width: 100%"
        />
      </van-cell-group>
      <div class="submit-area">
        <van-button
          class="submit"
          :class="{ canSubmit: canSubmit == true }"
          :disabled="!canSubmit"
          @click="submit"
        >
          {{ $t("home.contactUs.form.submit") }}
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from "@/api/index";
export default {
  components: {},
  props: {
    courseName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      /* 标题初始化 */
      initTtile: {
        cnTitle: "联系我们",
        mode: "black",
        icon: "&#xe616;",
      },
      // 表单绑定值
      name: "",
      phone: "",
      email: "",
      message: "",
      time: "",

      canSubmit: false,
      // 课程选择
      value: "",
      showPicker: false,
      error: {
        name: "",
        phone: "",
        course: "",
      },
      phoneOk: false,
      nameOk: false,
    };
  },
  watch: {
    name(val) {
      // 表单验证
      if (!this.name) {
        this.nameOk = false;
        return false;
      } else {
        this.nameOk = true;
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        return false;
      }
      if (!this.message) {
        return false;
      }
      this.canSubmit = true;
    },
    phone(val) {
      // 表单验证
      if (!this.name) {
        return false;
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        this.phoneOk = false;
        return false;
      } else {
        this.phoneOk = true;
      }
      if (!this.message) {
        return false;
      }
      this.canSubmit = true;
    },
    message(val) {
      // 表单验证
      if (!this.name) {
        return false;
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        return false;
      }
      if (!this.message) {
        return false;
      }
      this.canSubmit = true;
    },
  },
  methods: {
    /**
     * submit 提交所有数据
     * @return void
     */
    submit() {
      this.error = {
        name: "",
        phone: "",
        courseName: "",
      };
      // 表单验证
      if (!this.name) {
        this.error = { ...this.error, name: "这是必填项" };
        return false;
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        this.error = { ...this.error, phone: "联系号码不正确" };
        return false;
      }
      this.canSubmit = true;

      this.error = {
        name: "",
        phone: "",
        course: "",
      };

      this.$axios({
        method: "post",
        url: "baseApi/cms/tryInfo/save.do",
        params: {
          name: this.name,
          phone: this.phone,
          words: this.message,
        },
        // data: {
        //   name: this.name,
        //   phone: this.phone,
        //   course_name: this.course,
        //   email: this.email
        // }
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.canSubmit = false;
            this.name = "";
            this.phone = "";
            this.message = "";
            this.$toast("留言成功!");
            this.$emit("success");
          } else {
            this.canSubmit = false;
            this.$toast("留言失败,请联系管理员");
          }
        })
        .catch((e) => {
          this.canSubmit = false;
          this.$toast("网络异常!");
        });
    },
    /**
     * onConfirm 点击完成按钮时触发
     * @param value{String} 选择值
     */
    onConfirm(value) {
      this.course = value;
      this.showPicker = false;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
