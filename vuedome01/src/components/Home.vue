<template>
  <!--所有的组件必须被根节点包含起来-->
  <div >
    <v-header></v-header>
    <hr>
    <h2>这是一个首页组件----{{msg}}</h2>
    <button @click="run()">点我一下试试</button>
  </div>
</template>

<script>
  import Header from './Header.vue'; //引入头部组件
  export default {
    name: "Home",
    data() {
      return {
        msg:"我是一个首页"
      }
    },
    methods:{
      run(){
        alert(this.msg);
      }
    },
    components:{
      'v-header':Header
    }
  }
</script>

<!--scoped 局部作用域-->
<style scoped lang="scss">
  h2{color: red;
  }
</style>
