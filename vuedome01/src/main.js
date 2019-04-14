import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

//1.创建组件
import Home from './components/Home';
import News from './components/News';
import Content from "./components/Content";

//2.配置路由
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '/123', redirect: '/home'}, //重命名，/A 跳转至 /B
  {path: '/content/:aid', component: Content}
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
