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
import AddAdmin from './views/addAdmin/AddAdmin.vue'
import Record from './views/record/Record.vue'
import AddProduct from './views/addproduct/AddProduct.vue'
import StudentDetail from './views/studentDetail/StudentDetail.vue'
import KindergartenDetail from './views/kindergartendetail/KindergartenDetail.vue'
import AddKindergarten from './views/addKindergarten/AddKindergarten.vue'


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
      path: '/',
      name: '首页',
      iconCls: 'ios-home',
      component: Home,
      redirect:'/main',
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
        { path: '/message', component: Message, name: '客户端信息发布'}
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
      path: '/addadmin',
      hidden: true,
      component: Home,
      children: [
        { path: '/AddAdmin', component: AddAdmin, name: '添加管理员'}
      ]
    },
    {
      path: '/home',
      name: '系统',
      iconCls: 'md-settings',
      redirect:'/administrators',
      component: Home,
      children: [
        { path: '/administrators', component: Administrators, name: '管理员'},
        { path: '/record', component: Record, name: '访问记录'}
      ]
    },
    {
      path: '/addproduct',
      hidden: true,
      component: Home,
      children: [
        { path: '/addproduct', component: AddProduct, name: '添加产品'}
      ]
    },
    {
      path: '/studentDetail',
      hidden: true,
      component: Home,
      children: [
        { path: '/studentDetail', component: StudentDetail, name: '用户详情'}
      ]
    },
    {
      path: '/kindergartenDetail',
      hidden: true,
      component: Home,
      children: [
        { path: '/KindergartenDetail', component: KindergartenDetail, name: '幼儿园详情'}
      ]
    },
    {
      path: '/addKindergarten',
      hidden: true,
      component: Home,
      children: [
        { path: '/addKindergarten', component: AddKindergarten, name: '添加幼儿园'}
      ]
    }

  ]
})
