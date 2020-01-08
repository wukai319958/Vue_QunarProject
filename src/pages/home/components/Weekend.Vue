<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of scenicPhotoList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.photoUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.descript}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      scenicPhotoList: [{
        id: '001',
        photoUrl: '//imgs.qunarzz.com/p/tts6/1707/59/4bbf3de7843a3402.jpg_r_480x320x90_5ca20fc2.jpg',
        title: '毛毛和恺恺去塞班岛',
        descript: '尾单特卖💄塞班岛5天4晚上特惠自由行，有你想要'
      },
      {
        id: '002',
        photoUrl: '//imgs.qunarzz.com/p/tts0/1610/8d/01510c9cb2d3d702.jpg_r_480x320x90_6a2e26c5.jpg',
        title: '毛毛和恺恺去越南',
        descript: '【错峰大促销】杭州☞飞越南，超优惠超暧昧炒鸡棒棒棒'
      },
      {
        id: '003',
        photoUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/21ae69c3-31ce-4160-a898-c55d79777271.jpg_r_480x320x90_d654de48.jpg',
        title: '毛毛和恺恺去泰国',
        descript: '😍专属于你| 泰国曼谷+芭提雅 寻找专属于你的人妖派对'
      },
      {
        id: '004',
        photoUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/9cefdc97-bfdd-4729-9700-62fb84fe2a3d.jpg_r_480x320x90_8a2eccf3.jpg',
        title: '杭州-哈尔滨 六天跟团游',
        descript: '纯玩雪乡长白山小包团！🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷'
      },
      {
        id: '005',
        photoUrl: '//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '杭州-丽江 4天自由行',
        descript: '含往返机票（含税）+4天畅饮自助餐，超级优惠有木有！！！'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .7rem
    background #eeeeee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
</style>
