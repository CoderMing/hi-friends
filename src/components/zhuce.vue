<template>
  <div class="container">
    <div :class="menu ? 'cover ACTIVE' : 'cover'"></div>
    <div class="main">
      <div class="m-search" @click="showmenu"></div>
    </div>
    <bott :menushow="menushow"></bott>
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
  background rgba(202, 255, 255, 1)
  position relative


.main
  size  100%
  background url(../assets/Hello/bg.png) no-repeat center 100% / 100% 110%
  
.m-search
  size 80vw 30vw
  background url(../assets/Hello/Group\ 6.png) no-repeat
  background-size contain
  margin 0 auto
  transform translate(-3vw, 65vh)
  

  
</style>
