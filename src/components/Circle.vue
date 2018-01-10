<template>
  <div class="container">
    <bott :actpage="1"></bott>
    <div class="main">
      <div class="m-item" v-for="item in items">
        <div class="m-a">
          <img src="../assets/About/tx.png">
          <span>{{ item.name }}</span>
        </div>
        <div class="m-art">{{ item.art }}</div>
        <div class="m-like">{{ item.like }}</div>
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
      menu: false,
      items: [{
        name: "杨萌萌",
        art: "健身房有一起约的吗？",
        like: "",
        sex: 1
      },
      {
        name: "coderMing",
        art: "好想去敲代码啊...",
        like: "",
        sex: 1
      },
      {
        name: "这个人没有名字",
        art: "这是个啥app",
        like: "",
        sex: 2
      },
      {
        name: "。。。",
        art: "test",
        like: "",
        sex: 2
      },
      {
        name: "杨萌萌",
        art: "test2",
        like: "",
        sex: 1
      },
      {
        name: "杨萌萌",
        art: "test1",
        like: "",
        sex: 1
      }]
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

.container
  size 100vw auto
  min-height 100vh
  position relative
  background #eeeeee
  padding-bottom 25vw
  box-sizing border-box
  overflow-y auto
  z-index 2
  
.main
  size 100% auto
  
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
      text-align left
    
    .m-like
      font-size 4vw 
      color #666
      line-height 5vw
      margin-top 3vw
      float right
      padding-left 7vw
      background url(../assets/Circle/xiaoxi.png) no-repeat 0%
      background-size contain
  
</style>
