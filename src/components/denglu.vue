<template>
  <div class="container">
    <div class="logo"></div>
    <div class="ph"><span>手机号：</span><input type="text"></div>
    <div class="ps"><span>密码：</span><input type="password"></div>
    <div class="go" @click="gomain">登录</div>
  </div>
</template>

<script>
import Alert from './alert.vue'
import bott from './bott.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: false,
      menushow: false,
      alertshow: true
    }
  },
  methods: {
    gomain () {
      window.location = window.location.origin + '/#/zhuce'
    }
  },
  components: {
    bott, Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../styles/utils.styl'

.container
  size 100vw 100vh
  background rgba(202, 255, 255, .5)
  position relative

  .logo
    background url(../assets/logo.png) no-repeat center center / contain
    size 70vw
    margin 0 auto 10vw
    
  .ph, .ps
    size 90vw 10vw
    margin 5vw auto
    background white
    border-radius 2vw
    overflow hidden
        
    span 
      display inline-block
      width 20vw
      background white
      padding 2vw
      float left
      font-size 4.2vw
      text-align right
      
    input
      float right
      size 65vw 10vw
      border none
      outline none
      font-size 4.3vw
  .go
    background rgb(250, 193, 37)
    size 90vw 10vw
    margin 15vw auto
    line-height @height
    border-radius 3.5vw
    font-size 5.2vw
    color white
    
    a
      color white
    
    &:active
      opacity .5
      


  
</style>
