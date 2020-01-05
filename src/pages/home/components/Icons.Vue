<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img" >
            <img class="icon-img-content" :src="item.iconUrl" alt="">
          </div>
            <p class="icon-desc">{{item.content}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        iconUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        content: '酒店'
      },
      {
        id: '0002',
        iconUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        content: '机票'
      },
      {
        id: '0003',
        iconUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        content: '火车票'
      },
      {
        id: '0004',
        iconUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        content: '度假'
      },
      {
        id: '0005',
        iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        content: '海外酒店'
      },
      {
        id: '0006',
        iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        content: '低价机票'
      },
      {
        id: '0007',
        iconUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        content: '汽车船票'
      },
      {
        id: '0008',
        iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        content: '自由行'
      },
      {
        id: '0009',
        iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        content: '自由行自由行自由行自由行自由行'
      }],
      swiperOption: {
        loop: true,
        autoplay: 13000
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 计算当前图标应该放在第几页
        if (!pages[page]) { // 如果当前数组项不存在
          pages[page] = []
        }
        pages[page].push(item) // 将该项添加至数组中
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .27rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextClolor
        ellipsis()
</style>
