import Vue from 'vue'
import Router from 'vue-router'
import LiShi from '@/components/LiShi.vue'
import My from '@/components/My'
import ShouYe from '@/components/ShouYe.vue'
  import FaXian from '@/components/Faxian'
import DataDetail from '@/components/dataDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'ShouYe',
      component: ShouYe
    },
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
