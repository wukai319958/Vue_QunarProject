<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
  // props: {
  //   city: String 改为vuex state获取
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      line-height .62rem
      height .62rem
      background #fff
      border-radius .07rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
    .header-right
      padding 0 .1rem
      min-width 1.04rem
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .24rem
</style>
