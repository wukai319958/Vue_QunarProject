<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="HandleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 组件重新渲染时赋值
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    HandleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) { // 如果timer有值，清除此timeout,也就是频率太快就会一直清除而不会执行
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 指定16ms后调用
          // const startY = this.$refs['A'][0].offsetTop // offsetTop（组件距离上层组件的高度）也就是A字母距离搜索栏底部的距离
          const touchY = e.touches[0].clientY - 79 // 获取touchEvent事件中，触碰源离顶部的距离
          const index = Math.floor((touchY - this.startY) / 20) // 一个字母高度为20，相除之后取整就是第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    top 1.58rem
    bottom 0
    right 0
    width .4rem
    .item
      line-height .4rem
      color $bgColor
</style>
