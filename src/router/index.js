import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageList from '@/components/pageList'
import Echarts from '@/components/Echarts'
// import patrol from '@/components/patrol'
// import tmList from '@/components/tm-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pageList',
      name: 'pageList',
      component: pageList
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: Echarts
    }
    // ,
    // {
    //   path: '/patrol',
    //   name: 'patrol',
    //   component: patrol
    // },
    // {
    //   path: '/tmList',
    //   name: 'tmList',
    //   component: tmList
    // }
  ]
})
