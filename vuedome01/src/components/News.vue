<template>
  <div id="News">
    <ul class="list"> 这是新闻组件
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
      this.getNewsData();
    },

    components: {
      'v-header': Header
    }
  }

</script>

<style scoped lang="scss">
  .list{
    li{
      height: 3.4rem;
      line-height: 3.4rem;
      boder-bottom:1px solid #eee;
      font-size: 1.6rem;
      a{
        color: #666;
      }
    }
  }
</style>
