<template>
    <div class="loading-more">
      <div class="loading" v-if="show">
        <div></div>
        <span :style="{backgroundColor: bgcolor}">正在加载中...</span>
      </div>
      <div class="noloading" v-else>
        <div></div>
        <span :style="{backgroundColor: bgcolor}">没有更多数据了</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'loading-more',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    bgcolor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .loading-more
    padding 10px 0
    .loading
      display flex
      align-items center
      justify-content center
      div
        width 10px
        height 10px
        border 2px solid #888
        border-right 1px solid transparent
        border-radius 50%
        animation stretchdelay 1s infinite linear
        -moz-animation stretchdelay 1s infinite linear
        -webkit-animation stretchdelay 1s infinite linear
        -o-animation stretchdelay 1s infinite linear
      span
        font-size 14px
        margin-left 5px
        color #888
    .noloading
      position relative
      display flex
      align-items center
      justify-content center
      height 14px
      div
        width 60vw
        height 1px
        border-top 1px solid rgba(0, 0, 0, 0.15)
      span
        font-size 14px
        display inline-block
        padding 0 10px
        background #fff
        position absolute
        color #888
        top 0
        left 50%
        transform translateX(-50%)
    @keyframes stretchdelay
      0%
        transform rotate(0deg)
        -ms-transform rotate(0deg)
        -moz-transform rotate(0deg)
        -webkit-transform rotate(0deg)
        -o-transform rotate(0deg)
      20%
        transform rotate(72deg)
        -ms-transform rotate(72deg)
        -moz-transform rotate(72deg)
        -webkit-transform rotate(72deg)
        -o-transform rotate(72deg)
      40%
        transform rotate(144deg)
        -ms-transform rotate(144deg)
        -moz-transform rotate(144deg)
        -webkit-transform rotate(144deg)
        -o-transform rotate(144deg)
      60%
        transform rotate(216deg)
        -ms-transform rotate(216deg)
        -moz-transform rotate(216deg)
        -webkit-transform rotate(216deg)
        -o-transform rotate(216deg)
      80%
        transform rotate(288deg)
        -ms-transform rotate(288deg)
        -moz-transform rotate(288deg)
        -webkit-transform rotate(288deg)
        -o-transform rotate(288deg)
      100%
        transform rotate(360deg)
        -ms-transform rotate(360deg)
        -moz-transform rotate(360deg)
        -webkit-transform rotate(360deg)
        -o-transform rotate(360deg)
</style>
