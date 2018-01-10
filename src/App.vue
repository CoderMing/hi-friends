<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="stylus">
@import './styles/utils.styl'

*
  margin 0
  padding 0
  color #222
  
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  
a
  color black
  text-decoration none
  
  &:visited
    color black
    
</style>