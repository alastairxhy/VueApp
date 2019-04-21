import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

//引入Mint UI
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'


Vue.use(VueResource);
Vue.use(VueRouter);


//1.创建组件
import Home from './components/Home';
import News from './components/News';
import Content from "./components/Content";
import User from "./components/User";
import Useradd from "./components/user/adduser";
import Userlist from "./components/user/userlist";


//2.配置路由
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '/123', redirect: '/home'}, //重命名，/A 跳转至 /B
  {path: '/content/:aid', component: Content},
  {
    path: '/user', component: User,
    children: [
      {
        path: 'useradd', component: Useradd
      }, {
        path: 'userlist', component: Userlist
      },
    ]
  }
]
//3.创建 router 实例
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
//4.创建和挂载根实例
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//5.路由出口
// <!-- 路由匹配到的组件将渲染在这里 -->
// <router-view></router-view>
