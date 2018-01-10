<template>
  <div class="container">
    <bott></bott>
    <div class="main">
      <div class="tagSelect">
        <div class="ts-item">
          <div class="tsi-title">能力：</div>
          <div class="tsi-tag">
            <span class="ACTIVE">热爱学习</span>
            <span>爱打篮球</span>
            <span>爱下山玩</span>
            <span>高数好</span>
          </div>
        </div>
        <div class="ts-item">
          <div class="tsi-title">性别</div>
          <div class="tsi-tag">
            <span class="ACTIVE">男</span>
            <span>女</span>
          </div>
        </div>
      </div>

      <router-link to="MeetShow"><div class="filter">开始筛选</div></router-link>
    </div>
  </div>
</template>

<script>
import bott from './bott.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: false
    }
  },
  methods: {
  },
  components: {
    bott
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../styles/utils.styl'
@import '../styles/bott.styl'
@import '../styles/tagSelect.styl'

.container
  size 100vw 100vh
  background white
  position relative

.main
  size 100%
    
  .filter
    margin 0 auto
    background rgb(254, 195, 37)
    color white
    text-align center
    size 80vw 12vw
    line-height 12vw
    border-radius 6vw
    font-size 5.2vw
    margin-top 10vw
  

</style>
