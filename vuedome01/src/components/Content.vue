<template>
  <div id="content">
    <p >{{list.title}}</p>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
  /*动态路由传值
  * 1.配置动态路由
  * //动态路由参数 以冒号为开头
  * {path: '/content/:aid', component: Content}
  *
  * 2.获取动态路由参数
  * this.$route.params
  * */
  /*get 传值
  * */
  import newsApi from '../model/newsApi.js';

  export default {
    name: "Content",
    data() {
      return {
        list: []
      }
    },
    methods: {
      requestNews() {
        this.$http.get(newsApi.api + this.$route.params.aid).then((res) => {
          console.log(res);
          this.list = res.body.result[0];
        }), (err) => {
          console.log(err);
        }
      }
    },
    mounted() {
      console.log(this.$route.params)
      // console.log(this.$route.query)
      this.requestNews();

    }
  }

</script>

<style scoped lang="scss">
  #content{
    padding: 1rem;
    line-height: 2;
    img{
      max-width: 100%;
    }

  }
</style>
