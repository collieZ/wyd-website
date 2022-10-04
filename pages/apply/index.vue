<template>
  <div class="app-container">
    <!-- 联系我们 -->
    <contactUs />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import contactUs from '../../components/index/contactUs'
export default {
  components: {
    contactUs
  },
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    ...mapMutations([
      'changTopbarShow'
    ])
  }
}
</script>

<style lang="less" scoped>
</style>
