import Vue from 'vue';
import App from './App.vue';

import router from './router/router';


//4.创建和挂载根实例
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//5.路由出口
// <!-- 路由匹配到的组件将渲染在这里 -->
// <router-view></router-view>
