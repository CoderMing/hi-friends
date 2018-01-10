<template>
  <div class="container">
    <bott actpage="2"></bott>
    <div class="top">
      <div class="t-ava"></div>
      <div class="t-tit">
        <div>杨萌萌</div>简介：热爱学习无法自拔。  
      </div>
    </div>
    <div class="middle">
      <div :class="menu === '1' ? 'm-m ACTIVE' : 'm-m'" @click="gomenu" data-menu="1">我的点评</div>
      <div class="m-l"></div>
      <div :class="menu === '2' ? 'm-m ACTIVE' : 'm-m'" @click="gomenu" data-menu="2">我的匹配</div>
      <div class="m-l"></div>
      <div :class="menu === '3' ? 'm-m ACTIVE' : 'm-m'" @click="gomenu" data-menu="3">个人信息</div>
    </div>
    <div class="bottom">


      <div class="b-m1" v-if="menu === '1'">
        <div class="m-item" v-for="item in items">
          <div class="m-a">
            <img src="../assets/Circle/c-icon.png">
            <span>{{ item.name }}</span>
          </div>
          <div class="m-art">{{ item.art }}</div>
          <div class="m-like">{{ item.like }}</div>
        </div>
      </div>

      <div class="b-m2" v-if="menu === '2'">
        <div class="m-item" v-for="item in items">
          <div>11月22日</div>
          与杨萌萌匹配成功
        </div>
      </div>


      <div class="b-m3" v-if="menu === '3'">
        <div class="m-item">
          <div>昵称：</div>
          杨萌萌
        </div>
        <div class="m-item">
          <div>性别：</div>
          男
        </div>
        <div class="m-item">
          <div>约见形式：</div>
          线下
        </div>
        <div class="m-item">
          <div>标签：</div>
          <div class="tagset">
            <div>热爱学习</div>
            <div>爱打网球</div>
            <div>帅</div>
          </div>
        </div>
        <div class="xg">修改资料</div>
      </div>

    </div>

  </div>
</template>

<script>
import bott from './bott.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: '1',
      items: Array(20).fill({
        name: "杨萌萌",
        art: "喜欢跑步健身，特别是羽毛球和网球。平时无聊还会看看剧，喜欢日剧和美剧，很喜欢权利的游戏。",
        like: "10"
      })
    }
  },
  methods: {
    gomenu (a) {
      console.log(a.target.dataset.menu);
      this.menu = a.target.dataset.menu
    }
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

.container
  size 100vw 100vh
  position relative

.top
  size 100vw 30vw
  background white
  border-bottom 1px solid #eee
  box-sizing border-box
  padding-left 30vw
  position relative

  .t-ava
    position absolute
    border 1px solid #bbb
    size 20vw
    top 5vw
    left 5vw
    border-radius 50%
    background url(../assets/About/tx.png) no-repeat center center / contain
    
  .t-tit
    color #666
    text-align left
    padding 2vw
    
    div
      font-size 5.4vw
      text-align left
      padding-bottom 2vw
      padding-top 5vw

.middle
  background #f1f1f1
  size 100vw 15vw
  display flex
  box-sizing border-box
  
  .m-m
    flex 1
    line-height 7vw
    font-size 4.3vw
    padding 4vw 0
    margin 0 7vw

    &.ACTIVE
      color #F5A900
      border-bottom 1px solid #F5A900

  .m-l
    border-left 1px solid #bbb
    height 7vw
    margin-top 4vw
    

.bottom
  size 100% auto
  
  .b-m1
    size 100% auto
    background-color #f1f1f1
    padding-bottom 20vw
    
    .m-item
      background white
      size 100% auto
      padding 5vw 5vw 3vw
      box-sizing border-box
      margin-bottom 3vw
      overflow hidden
      
      .m-a
        size 100% 15vw
        
        img
          float left
          display inline-block
          size 10vw
          border-radius 50%
          border 1px solid #cccccc
          background-color #eeeeee
        
        span
          float left
          display inline-block
          size auto 12vw
          line-height 12vw
          color #666
          padding 0 3vw
      
      .m-art
        color #222
        font-size 4vw
      
      .m-like
        font-size 4vw 
        color #666
        line-height 5vw
        margin-top 3vw
        float right
        padding-left 7vw
        background url(../assets/Circle/xiaoxi.png) no-repeat 0%
        background-size contain
    
  .b-m2
    size 100% auto
    background-color #f1f1f1
    padding-bottom 20vw

    .m-item
      background white
      size 100% auto
      padding 5vw 5vw 3vw
      box-sizing border-box
      margin-bottom 2vw
      overflow hidden
      text-align left
      
      div
        font-size 4vw
        color #777
        

  .b-m3
    size 100% auto
    padding-top 5vw
    padding-bottom 20vw

    .m-item
      overflow hidden
      line-height 12vw
      text-align left
      
      div
        color #666
        float left
        padding 0 2vw 0 5vw
        letter-spacing 2vw
      
      div.tagset
        color #222
        padding 0
        size 73vw auto
        overflow hidden
        
        div
          letter-spacing normal
          padding 1vw 5vw
          border-radius 100px
          border 1px solid #45E5DC
          line-height 7vw
          margin 3vw
          
    .xg
      size 80vw 12vw
      font-weight 300
      background-color #F5A900
      border-radius 100px
      text-align center
      color white
      font-size 5vw
      margin 5vw auto
      line-height @height
      
</style>
