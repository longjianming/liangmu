import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Home from './views/home/Home.vue'
import Main from './views/main/Main.vue'
import Count from './views/count/Count.vue'
import Publish from './views/publish/Publish.vue'
import Client from './views/client/Client.vue'
import Advertisement from './views/advertisement/Advertisement.vue'
import Message from './views/message/Message.vue'
import Kindergarten from './views/kindergarten/Kindergarten.vue'
import Student from './views/student/Student.vue'
import Administrators from './views/administrators/Administrators.vue'
import Record from './views/record/Record.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login
    },
    {
      path: '/home',
      name: '首页',
      iconCls: 'ios-home',
      component: Home,
      children: [
        { path: '/main', component: Main, name: '首页2'}
      ]
    },
    {
      path: '/',
      name: '产品',
      iconCls: 'ios-apps',
      component: Home,
      children: [
        { path: '/count', component: Count, name: '产品统计'},
        { path: '/publish', component: Publish, name: '产品发布' },
        { path: '/client', component: Client, name: '客户端' }
      ]
    },
    {
      path: '/',
      name: '运营',
      iconCls: 'ios-paper',
      component: Home,
      children: [
        { path: '/advertisement', component: Advertisement, name: '广告管理'},
        { path: '/message', component: Message, name: '客户端信息发布'},
      ]
    },
    {
      path: '/',
      name: '用户',
      iconCls: 'md-person',
      component: Home,
      children: [
        { path: '/kindergarten', component: Kindergarten, name: '幼儿园'},
        { path: '/student', component: Student, name: '学生'},
      ]
    },
    {
      path: '/',
      name: '系统',
      iconCls: 'md-settings',
      component: Home,
      children: [
        { path: '/administrators', component: Administrators, name: '管理员'},
        { path: '/record', component: Record, name: '访问记录'}
      ]
    }
  ]
})
