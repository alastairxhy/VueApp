<template>
  <!--所有的组件必须被根节点包含起来-->
  <div>
    <h2>这是一个首页组件</h2>
    <button @click="homerun()">主页-点我一下试试</button>
    <button @click="getChildData()">主页-获取子组件header的属性和方法</button>
    <button @click="emitNew()">主页-获取非父子组件new的属性和方法</button>
    <v-header :datahome="homemsg" :title="obj" :homerun="homerun" :home="this" ref="header"></v-header>
    <!--绑定title 是为了告诉Vue title是数字 而不是字符串-->
    <!--验证 props    title:String-->
    <!--同需要告诉VUE的有 数字，布尔值，数组，对象-->
    <hr>
  </div>
</template>

<script>
  /*
  * 父组件主动获取子组件的数据和方法
  * 1.调用子组件的时候定义一个ref
  *    <v-header ref="header"></v-header>
  *
  * 2.在父组件里面通过
  *   this.$refs.header.属性
  *   this.$refs.header.方法
  *   调用子组件的数据和方法
  *
  *
  * */
  import Header from './Header.vue'; //引入头部组件
  import emitvue from '../model/emit.js';

  export default {
    name: "Home",
    data() {
      return {
        homemsg: "我是home",
        homeid: '1',
        obj: [
          {
            id: 1,
            name: 'xhy',
            gender: 'man'
          },
          {
            id: 2,
            name: 'x',
            gender: 'man'
          }
        ]
      }
    },
    methods: {
      homerun(data) {
        console.log(this.obj[0]);
        alert(this.homemsg + data);
      },
      getChildData() {
        console.log(this.$refs.header.headermsg);
        this.getChildFunction();
      },
      getChildFunction() {
        this.$refs.header.headerconsole();
      },
      emitNew() {
        //广播
        emitvue.$emit('home-msg', this.homemsg)
      }
    },
    mounted() {
      //监听广播
      emitvue.$on('new-msg', (res) => {
        console.log(res[1])
      })
    },
    components: {
      'v-header': Header
    }
  }
</script>

<!--scoped 局部作用域-->
<style scoped lang="scss">
  h2 {
    color: red;
  }
</style>
