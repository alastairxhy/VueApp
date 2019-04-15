<template>
  <div>
    <ul> 这是新闻组件
      <button @click="emitHome()">新闻-获取非父子组件home的属性和方法</button>
      <!--        <v-header ></v-header>-->
      <li v-for="(listitem,key) in list" >
        <router-link :to="'/content/'+listitem.aid" >{{listitem.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import newsApi from '../model/newsApi.js'; //引入接口
  import Header from './Header.vue'; //引入头部组件
  import emitvue from '../model/emit.js';


  export default {
    name: "News",
    data() {
      return {
        newsmsg: '我是new',
        newid: 2,
        list:[]
      }
    },
    methods: {
      alternew(){
        alter('我是新闻组件');
      },
      emitHome() {
        //广播
        emitvue.$emit('new-msg', [this.newsmsg,this.newid])
      },
      getNewsData(){
        this.$http.jsonp(newsApi.url).then((res)=>{
          console.log(res.body.result);
          this.list = res.body.result;
        },(err)=>{
          console.log(err)
        })
      }
    },
    mounted() {
      //监听广播
      emitvue.$on('home-msg', (res) => {
        console.log(res);
      });
      this.getNewsData();
    },

    components: {
      'v-header': Header
    }
  }

</script>

<style scoped>

</style>
