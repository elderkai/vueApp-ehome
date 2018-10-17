import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
  component:home,
  redirect:'/login',
  children:[
        {
          path:'home',
          meta:{
            title:'首页'
          },
        component:HelloWorld
        },
        {
          path:'notice',
          meta:{
            title:'notice',
          },
          component:()=>import('@/views/notice')
        },{
          path:'wddj',
          meta:{
            title:'我的党建'
          },
          component:()=>import('@/views/wddj')
        }

  ]
    },
    {
      path:'/mystudy/:id',
      meta:{
        title:'随时随地学'
      },
      component:()=>import('@/views/gostudy')
    },
    {
      path:'/newseye',
      meta:{
        title:'信工新闻眼',
      },
      component:()=>import('@/views/newseye')
    },
    {
      path:'/login',
      meta:{
        title:'登录页'
      },
      component:()=>import('@/views/login')
    },
    {
      path:'/life',
      meta:{
        title:'掌上组织生活'
      },
      component:()=>import('@/views/life')
    },
    {
      path:'/choice',
      meta:{
        title:'思想总结'
      },
      component:()=>import('@/views/choice')
    },
    {
      path:'/parthbuild',
      meta:{
        title:'党建一点通',
      },
      component:()=>import('@/views/partybuild')
    },
    {
      path:'/showidentify',
      meta:{
        title:'党员亮身份'
      },
      component:()=>import('@/views/showidentify')
    },
    {
      path:'/today',
      meta:{
        title:'党史上的今天'
      },
      component:()=>import('@/views/today')
    },
    
   
  ]
})
