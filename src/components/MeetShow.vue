<template>
  <div class="container">
    <bott></bott>
    <alert></alert>
    <div class="top">
      <div class="t-name">杨萌萌</div>
      <div class="t-ms">傻得不行沉迷学习无法自拔喜欢写代码，数据库，喜欢跑
步健身，特别是羽毛球和网球。平时无聊还会看看剧，喜
欢日剧和美剧，很喜欢权利的游戏。</div>
    </div>
    <div class="main">
      <div class="m-icon"></div>
      <div class="m-tit">我的任务</div>
      <div class="m-nr">{{ nr }}</div>
      <div class="m-con">{{ content }}<span>剩余{{ cTime }}分钟！</span></div>
      <div class="m-acc" @click="acc"><router-link to="/renwu">接受任务</router-link></div>
      <div class="m-change" @click="cha">换任务</div>
    </div>
  </div>
</template>

<script>
import Bott from './bott.vue'
import Alert from './alert.vue'

export default {
  data () {
    return {
      data: [
        {
          acced: true,
          alertshow:  true,
          nr: '篮球场打篮球1小时',
          content: '杨萌萌向你发出邀请，快接受吧～',
          cTime: '10'
        },
        {
          acced: true,
          alertshow:  true,
          nr: '图书馆约自习2小时',
          content: '杨萌萌向你发出邀请，快接受吧～',
          cTime: '10'
        },
        {
          acced: true,
          alertshow:  true,
          nr: '山下看电影',
          content: '杨萌萌向你发出邀请，快接受吧～',
          cTime: '10'
        },
        {
          acced: true,
          alertshow:  true,
          nr: '老校门约饭',
          content: '杨萌萌向你发出邀请，快接受吧～',
          cTime: '10'
        },
      ],
      acced: true,
      alertshow:  true,
      nr: '图书馆约自习2小时',
      content: '杨萌萌向你发出邀请，快接受吧～',
      cTime: '10'
    }
  },
  methods: {
    acc () {
      this.alertshow = true
    },
    cha () {
      this.nr = this.data[Math.floor(Math.random() * this.data.length)].nr
    }
  },
  components: {
    Bott,
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../styles/utils.styl'
@import '../styles/bott.styl'

.container
  size 100vw auto
  min-height 100vh
  position relative
  background #f0f0f0
  padding-bottom 25vw
  box-sizing border-box
  overflow-y auto
  z-index 1

.top
  background rgb(29, 202, 194)
  size 100vw auto
  color white
  box-sizing border-box
  padding 5vw 5vw 10vw  
  padding-bottom 16vh
  z-index 1

  
  .t-name
    font-size 6vw
    text-align left
    padding 2vw 0
    
  .t-ms
    font-size 4vw
    text-align left
    font-weight 300

.main
  size 90vw auto
  background white
  text-align center
  border-radius 5vw
  margin -10vh auto 0
  padding-bottom 1vw
  padding-bottom 15vw
  box-sizing border-box
  
  .m-icon
    size 16vw
    background url(../assets/Meet/icon.png) no-repeat center 20% / 50%
    border-radius 50%
    background-color white
    margin -6vw auto 0
    z-index 3
    transform translate(0, -5vw)
    
  .m-tit
    margin-top -5vw
    color #444
    z-index 2
    
  .m-nr
    color rgb(29, 202, 194)
    margin-top 5vw
    font-size 4.5vw
    
  .m-con
    padding 3vw
    font-size 4.5vw
    color #555
    padding-bottom 10vw
    
    span
      color rgb(29, 202, 194)
  
  .m-acc, .m-change
    size 75vw 12vw
    background grey
    line-height 12vw
    border-radius 6vw
    margin 6vw auto
    color white
    &:active
      opacity .8
  
  .m-acc
    background rgb(250, 193, 37)
    margin-top 3vw
    
    a
      color white
    
  .m-change 
    margin-bottom 0vw
    color #888
    background rgb(140, 237, 229)


</style>
