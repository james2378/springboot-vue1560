import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import zhengjianchaxunList from '../pages/zhengjianchaxun/list'
import zhengjianchaxunDetail from '../pages/zhengjianchaxun/detail'
import zhengjianchaxunAdd from '../pages/zhengjianchaxun/add'
import chaxunxinxiList from '../pages/chaxunxinxi/list'
import chaxunxinxiDetail from '../pages/chaxunxinxi/detail'
import chaxunxinxiAdd from '../pages/chaxunxinxi/add'
import jiaoyupeixunList from '../pages/jiaoyupeixun/list'
import jiaoyupeixunDetail from '../pages/jiaoyupeixun/detail'
import jiaoyupeixunAdd from '../pages/jiaoyupeixun/add'
import renzhengshenqingList from '../pages/renzhengshenqing/list'
import renzhengshenqingDetail from '../pages/renzhengshenqing/detail'
import renzhengshenqingAdd from '../pages/renzhengshenqing/add'
import bianminfuwuList from '../pages/bianminfuwu/list'
import bianminfuwuDetail from '../pages/bianminfuwu/detail'
import bianminfuwuAdd from '../pages/bianminfuwu/add'
import daijiaofuwuList from '../pages/daijiaofuwu/list'
import daijiaofuwuDetail from '../pages/daijiaofuwu/detail'
import daijiaofuwuAdd from '../pages/daijiaofuwu/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'zhengjianchaxun',
					component: zhengjianchaxunList
				},
				{
					path: 'zhengjianchaxunDetail',
					component: zhengjianchaxunDetail
				},
				{
					path: 'zhengjianchaxunAdd',
					component: zhengjianchaxunAdd
				},
				{
					path: 'chaxunxinxi',
					component: chaxunxinxiList
				},
				{
					path: 'chaxunxinxiDetail',
					component: chaxunxinxiDetail
				},
				{
					path: 'chaxunxinxiAdd',
					component: chaxunxinxiAdd
				},
				{
					path: 'jiaoyupeixun',
					component: jiaoyupeixunList
				},
				{
					path: 'jiaoyupeixunDetail',
					component: jiaoyupeixunDetail
				},
				{
					path: 'jiaoyupeixunAdd',
					component: jiaoyupeixunAdd
				},
				{
					path: 'renzhengshenqing',
					component: renzhengshenqingList
				},
				{
					path: 'renzhengshenqingDetail',
					component: renzhengshenqingDetail
				},
				{
					path: 'renzhengshenqingAdd',
					component: renzhengshenqingAdd
				},
				{
					path: 'bianminfuwu',
					component: bianminfuwuList
				},
				{
					path: 'bianminfuwuDetail',
					component: bianminfuwuDetail
				},
				{
					path: 'bianminfuwuAdd',
					component: bianminfuwuAdd
				},
				{
					path: 'daijiaofuwu',
					component: daijiaofuwuList
				},
				{
					path: 'daijiaofuwuDetail',
					component: daijiaofuwuDetail
				},
				{
					path: 'daijiaofuwuAdd',
					component: daijiaofuwuAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
