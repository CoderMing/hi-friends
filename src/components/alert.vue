<template>
  <div class="alert" v-if="isshow && !showed">
    <div class="al-m">
      <div class="al-del" @click="toggle"></div>
      <div class="al-tit">{{ msg }}</div>
      <div class="al-btn" v-if="btn" @click="toggle"><router-link :to="link">{{ btn }}</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bott',
  data () {
    return {
      showed: false
    }
  },
  methods: {
    toggle () {
      this.showed = !this.showed
    }
  },
  props: [
    'isshow', 'msg', 'btn', 'link'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../styles/utils.styl'


.alert
  background rgba(0, 0, 0, .5)
  position fixed
  left 0
  top 0
  z-index 10
  size 100%
  
  .al-m
    background white
    color black
    size 84vw auto
    box-sizing border-box
    border-radius 3vw
    margin 0 auto
    transform translate(0, 30vh)
    
  .al-del
    background url(../assets/Hello/Group\ 4.png) no-repeat center center
    background-size 100% 100%
    size 5vw
    float right 
    clear both
    transform translate(-5vw, 4vw)
    
  .al-tit
    padding 15vw 5vw
    width 70vw
    margin 0 auto
    color #333
    
  .al-btn
    size 60vw 11vw
    background-color rgb(250, 193, 37)
    text-align center
    line-height 11vw
    font-size 4.5vw
    border-radius 6vw
    color white
    margin 20vw auto
    transform translate(0, -10vw)
    
    a
      color white

  
</style>
