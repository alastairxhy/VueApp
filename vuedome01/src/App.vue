<template>
  <!--vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    这是根组件
    <v-home></v-home>
    <v-news></v-news>
    <v-resource></v-resource>
    <br><hr>
    <v-axios></v-axios>
  </div>

</template>

<script>
  /*
  * 1.引入组件
  * 2.挂载组件
  * 3.在模板中使用
  */
  import Home from './components/Home.vue'; //引入主页组件
  import News from './components/News.vue'; //引入新闻组件
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
      'v-home':Home,
      'v-news':News,
      'v-resource':Resource,
      'v-axios':Axios
    }
  }
</script>

<style lang="scss" >

</style>
