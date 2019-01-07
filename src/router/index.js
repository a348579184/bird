import Vue from 'vue'
import Router from 'vue-router'
import LiShi from '@/components/LiShi.vue'
import My from '@/components/My'
import ShouYe from '@/components/ShouYe.vue'
import FaXian from '@/components/Faxian'
import DataDetail from '@/components/dataDetail'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/ShouYe',
      name:'ShouYe',
      component: ShouYe
     },
    {
    	name:'My',
      path: '/my',
      component: My
    },
    {
    	name:'Login',
      path: '/login',
      component: Login
    },
    {
      path: '/lishi',
      component: LiShi
    },
    {
      path: '/faxian',
      component: FaXian
    },
    {
      path: '/datadetail',
      component: DataDetail
    }
  ]
})
