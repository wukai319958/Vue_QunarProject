<template>
  <div>
    <div class="search">
       <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">
        没有匹配项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      // 派发一个名为changeCity的Action，并且将city传入
      // this.$store.dispatch('changeCity', city)
      // 直接调用commit,绕过Action
      // this.$store.commit('changeCity', city)
      this.$router.push('./')
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) { // 遍历键值对
          this.cities[i].forEach((value) => { // 遍历城市
            // 如果我们在sepll和name中出现了keyword,我们就把这一项添加到result中
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
import { mapMutations } from 'vuex'

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width 100%
      padding 0 .1rem
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left  0
    right 0
    bottom 0
    background #eeeeee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #ffffff
      color #666
</style>
