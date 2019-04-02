<template>
  <!--所有的组件必须被根节点包含起来-->
  <div >
    <h2>这是一个头部组件----{{msg}}</h2>
    <button @click="run()">点我一下试试</button>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        msg:"我是一个头部"
      }
    },
    methods:{
      run(){
        alert(this.msg);
      }
    }
  }
</script>

<!--scoped 局部作用域-->
<style scoped lang="scss">
  h2{color: blue;
  }
</style>
