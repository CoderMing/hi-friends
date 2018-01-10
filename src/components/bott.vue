<template>
  <div>
<!--     <div :class="menu ? 'cover ACTIVE' : 'cover'"></div>
 -->    <div class="bott">
      <div :class="actpage == 1 ? 'b-l ACTIVE' :'b-l'"><router-link to="/Circle"></router-link></div>
      <div class="b-m" @click="togglemenu"></div>
      <div :class="actpage == 2 ? 'b-r ACTIVE' :'b-r'"><router-link to="/AboutMe"></router-link></div>
    </div>
    <div :class="(menu) || (menushow && flag) ? 'showm ACTIVE' : 'showm'">
      <router-link to="/friendFilter"><div class="shaixuan"></div></router-link>
      <router-link to="/MeetShow"><div class="suiji"></div></router-link>
      <div class="m-canel" @click="togglemenu"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bott',
  data () {
    return {
      menu: false,
      flag: 1
    }
  },
  methods: {
    togglemenu () {
      this.menu = !this.menu
      this.flag = 0
    }
  },
  props: [
    'actpage', 'menushow'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../styles/utils.styl'
@import '../styles/bott.styl'

.cover
  size 100vw 100vh
  position fixed
  z-index -1
  transition all .3s ease
  
  &.ACTIVE
    background rgba(0, 0, 0, .5)
    z-index 10
  
.main
  size  100%
  background url(../assets/Hello/bg.png) no-repeat center 100% / 100% 110%
  
.m-search
  size 80vw 30vw
  background url(../assets/Hello/Group\ 6.png) no-repeat
  background-size contain
  margin 0 auto
  transform translate(-3vw, 65vh)
  
.b-l.ACTIVE
  background-image url(../assets/Circle/c-icon.png)
  
.b-r.ACTIVE
  background-image url(../assets/About/wd.png)


  
</style>
