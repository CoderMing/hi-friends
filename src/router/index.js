import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MeetShow from '@/components/MeetShow'
import FriendFilter from '@/components/FriendFilter'
import Circle from '@/components/Circle'
import AboutMe from '@/components/AboutMe'
import zhuce from '@/components/zhuce'
import denglu from '@/components/denglu'
import renwu from '@/components/renwu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MeetShow',
      name: 'MeetShow',
      component: MeetShow
    },
    {
      path: '/FriendFilter',
      name: 'FriendFilter',
      component: FriendFilter
    },
    {
      path: '/Circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/renwu',
      name: 'renwu',
      component: renwu
    },
  ]
})
