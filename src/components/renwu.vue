<template>
  <div class="container">
    <div class="bg"></div>
    <div class="wz" style="padding-top: 15vw">你已接受任务</div>
    <div class="wz">匹配对象QQ：363712312，请加QQ进行聊天</div>
  </div>
</template>

<script>
import Alert from './alert.vue'
import bott from './bott.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      time: 10
    }
  },
  methods: {
    showmenu () {
      this.menushow = true
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
  position relative
  box-sizing border-box
  padding-top 25vw
  
  .bg
    size 80vw
    background url(../assets/About/acc.png) no-repeat center / contain
    margin 0 auto
    
  .wz
    color #555

  .go
    background rgb(250, 193, 37)
    size 80vw 10vw
    
  
  
</style>
