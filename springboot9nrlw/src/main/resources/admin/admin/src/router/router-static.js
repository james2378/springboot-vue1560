import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import jiaoyupeixun from '@/views/modules/jiaoyupeixun/list'
    import chaxunxinxi from '@/views/modules/chaxunxinxi/list'
    import bianminfuwu from '@/views/modules/bianminfuwu/list'
    import renzhengshenqing from '@/views/modules/renzhengshenqing/list'
    import users from '@/views/modules/users/list'
    import forum from '@/views/modules/forum/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import zhengjianchaxun from '@/views/modules/zhengjianchaxun/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import daijiaofuwu from '@/views/modules/daijiaofuwu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '通知公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/jiaoyupeixun',
        name: '教育培训',
        component: jiaoyupeixun
      }
      ,{
	path: '/chaxunxinxi',
        name: '查询信息',
        component: chaxunxinxi
      }
      ,{
	path: '/bianminfuwu',
        name: '便民服务',
        component: bianminfuwu
      }
      ,{
	path: '/renzhengshenqing',
        name: '认证申请',
        component: renzhengshenqing
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/zhengjianchaxun',
        name: '证件查询',
        component: zhengjianchaxun
      }
      ,{
	path: '/messages',
        name: '投诉建议',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/daijiaofuwu',
        name: '代缴服务',
        component: daijiaofuwu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
