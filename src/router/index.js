import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//导入需要的组件
// import Films from '@/views/Films/Index'
// import NowPlaying from '@/views/Films/NowPlaying'
// import ComingSoon from '@/views/Films/ComingSoon'
// import Detail from '@/views/Films/Detail'
// import Cinemas from '@/views/Cinemas/Index'
// import Center from '@/views/Center/Index'


//导入经过模块化的路由
import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'



const routes = [


// 模块化
  ...filmRouter,//需要展开，因为导出的是一个数组，但是人家希望要的是一个对象
  cinemaRouter,
  centerRouter, 
  


  //模块化 
  // 电影模块
      // 电影模块父   /films
      //正在热映      /films/nowPlaying
      // 即将上映      /films/comingSoon
    
  //     {
  //       path: "/films",
  //       component: Films,
  //       children: [
  //         { path: "nowPlaying", component: NowPlaying },
  //         { path: "comingSoon", component: ComingSoon },
  //       ],
  //     },
  // // 电影详情   /films/:filmId

  // {
  //   path: "/film/:filmId",
  //   component:Detail,
  // },
 




  // // 影院模块 
  // // /cinemas
  // {
  //   path: "/cinemas",
  //   component:Cinemas,
  // },
  




  // 我的模块
  //   /center

  // {
  //   path: "/center",
  //   component:Center,
  // },
  //重定向
  {
    path: "/",
    redirect:"/films/nowPlaying",
  }
    












  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // 坑 ： 回头再获取路由信息的时候可能会出错(异步加载路由)
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
