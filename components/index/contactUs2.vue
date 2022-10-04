<template>
  <div class="contactUsBox contactUsBox2">
    <!-- 头部文字 -->
    <div class="bd">
      <div class="desc">
        {{$t('solution.contactUs.text')}}
      </div>
      <!-- 表单内容 -->
      <van-cell-group class="form" :style="{ height: formHeight }">
        <van-field
          v-model="name"
          label=""
          maxlength="10"
          :placeholder="$t('solution.contactUs.form.name')"
          label-class="name"
          :error-message="error.name"
          required
        />
        <van-field
          v-model="phone"
          :error-message="error.phone"
          type="tel"
          label=""
          maxlength="11"
          :placeholder="$t('solution.contactUs.form.phone')"
          required
        />
        <van-field
          v-model="message"
          type="textarea"
          label=""
          maxlength="300"
          :placeholder="$t('solution.contactUs.form.message')"
          style="width:100%;"
        />
      </van-cell-group>
      <div class="submit-area">
        <!-- <van-button class="submit canSubmit" :disabled="!canSubmit" @click="submit"> -->
        <van-button class="submit canSubmit" @click="submit">
          {{$t('solution.contactUs.form.submit')}}
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    courseName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 表单绑定值
      name: '',
      phone: '',
      message: '',
      formHeight: '0px',
      showForm: false,
      canSubmit: false,
      error: {
        name: '',
        phone: '',
        course: ''
      }
    }
  },
  watch: {
    name (val) {
      // 表单验证
      if (!this.name) {
        return false
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        return false
      }
      if (!this.message) {
        return false
      }
      this.canSubmit = true
    },
    phone (val) {
      // 表单验证
      if (!this.name) {
        return false
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        return false
      }
      if (!this.message) {
        return false
      }
      this.canSubmit = true
    },
    message (val) {
      // 表单验证
      if (!this.name) {
        return false
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        return false
      }
      if (!this.message) {
        return false
      }
      this.canSubmit = true
    }
  },
  methods: {
    /**
     * submit 提交所有数据
     * @return void
     */
    submit () {
      this.formHeight = 'auto'
      this.error = {
        name: '',
        phone: '',
        courseName: ''
      }
      // 表单验证
      if (!this.name) {
        this.error = { ...this.error, name: '这是必填项' }
        return false
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        this.error = { ...this.error, phone: '联系号码不正确' }
        return false
      }
      this.canSubmit = true

      this.error = {
        name: '',
        phone: '',
        course: ''
      }
    const PREFIX_URL = this.$store.state.baseUrl
      this.$axios({
        method: 'post',
        url: `${PREFIX_URL}/cms/tryInfo/save.do`,
        params: {
          name: this.name,
          phone: this.phone,
          words: this.message
        }
        // data: {
        //   name: this.name,
        //   phone: this.phone,
        //   course_name: this.course,
        //   email: this.email
        // }
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.canSubmit = false
            this.name = ''
            this.phone = ''
            this.message = ''
            this.$toast('留言成功!')
            this.$emit('success')
          } else {
            this.canSubmit = false
            this.$toast('留言失败,请联系管理员')
          }
        })
        .catch((e) => {
          this.canSubmit = false
          this.$toast('网络异常!')
        })
    }

  }
}
</script>

<style lang="less" scoped>

</style>
