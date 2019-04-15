<template>
  <!--vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    这是根组件
<!--    引入动态路由，暂时注释-->
<!--    <v-home></v-home>-->
<!--    <v-news></v-news>-->
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">首页</router-link>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
<!--    <v-resource></v-resource>-->
<!--    <v-axios></v-axios>-->
  </div>

</template>

<script>
  /*
  * 1.引入组件
  * 2.挂载组件
  * 3.在模板中使用
  */

  /*
  * 引入动态路由，暂时注释
  * import Home from './components/Home.vue'; //引入主页组件
  * import News from './components/News.vue'; //引入新闻组件
  * */

  import Resource from './components/Resource.vue'; //引入resource请求服务器组件
  import Axios from "./components/Axios"; //引入axios请求服务器组件
  export default {
    name: 'app',
    data() {  //业务逻辑里面定义的数据
      return {
        msg: ""
      }
    },
    components:{
      'v-resource':Resource,
      'v-axios':Axios
    }
  }
</script>

<style lang="scss" >

</style>
