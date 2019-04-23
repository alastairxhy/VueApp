<template>
  <div id="vuex">

    <p> 你好，我是Vuex</p>
    <p> {{this.$store.state.count}}</p>
    <p> {{this.$store.getters.doneTodos}}</p>
    <p><button @click="changecount()">点击修改vuex的值</button></p>
  </div>
</template>

<script>
  import store from '../vuex/store.js'; //引入vuex文件
  export default {
    name: "vuex",
    data() {
      return {}
    },
    store, //注册组件
    methods: {
      changecount() {
       store.commit('increment')
      }
    }
  }


</script>

<style scoped lang="scss">
  #vuex {
    margin: 0 auto;
    p {
      text-align: center;
    }


  }

</style>
