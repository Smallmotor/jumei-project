import Vue from 'vue'
import Router from 'vue-router'
import App  from '../App'
import home from '@/components/Home/Home'
import tm from '@/components/Tm/Tm'
import zb from '@/components/Zb/Zb'
import gw from '@/components/Gw/Gw'
import me from '@/components/Me/Me'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/home',
      component:App,
      children:[
          {
              path:"/home",
              name:"home",
              component:home,
          },
          {
              path:"/tm",
              name:"tm",
              component:tm,
          },
          {
              path:"/zb",
              name:"zb",
              component:zb
          },
          {
              path:"/gw",
              name:"gw",
              component:gw
          },
          {
              path:"/me",
              name:"me",
              component:me
          },
      ]
    }
  ]
})
