<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/6aa44d29-7176-4e53-8b0b-c51675ec1412.jpg_r_390x260x90_ad970ec7.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          大连海洋世界（AAAAA景区）
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe647;</span>
          39
        </div>
      </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose">

  </common-gallary>
</div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/vs_ceph_vs_tts/6aa44d29-7176-4e53-8b0b-c51675ec1412.jpg_r_390x260x90_ad970ec7.jpg', 'https://imgs.qunarzz.com/p/tts2/1912/d0/fd05c57f95872402.png_r_390x260x90_0e9086b7.png']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background-color rgba(0, 0, 0, .8)
      font-size .24rem
    .banner-icon
      font-size .24rem
</style>
