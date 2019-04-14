<template>
  <div>
    <ul> 这是新闻组件
      <button @click="emitHome()">新闻-获取非父子组件home的属性和方法</button>
      <!--        <v-header ></v-header>-->
      <li v-for="(listitem,key) in list" >
        <router-link :to="'/content/'+key" >{{key}}---{{listitem}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from './Header.vue'; //引入头部组件
  import emitvue from '../model/emit.js';

  export default {
    name: "News",
    data() {
      return {
        newsmsg: '我是new',
        newid: 2,
        list:['111','222','333']
      }
    },
    methods: {
      alternew(){
        alter('我是新闻组件');
      },
      emitHome() {
        //广播
        emitvue.$emit('new-msg', [this.newsmsg,this.newid])
      }
    },
    mounted() {
      //监听广播
      emitvue.$on('home-msg', (res) => {
        console.log(res);
      });
    },

    components: {
      'v-header': Header
    }
  }

</script>

<style scoped>

</style>
