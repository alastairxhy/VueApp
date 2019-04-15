<template>
    <div>
      <p id="content">我是具体内容</p>
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
    export default {
        name: "Content",
      data(){
          return{

          }
      },
      methods:{
        requestNews(){
          var api ='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=488'
          this.$http.get(api).then((res=>{
            console.log(res.bodyText)
          }),(err)=>{
            console.log(err)
          })
        }
      },
      mounted() {
        console.log(this.$route.params)
          // console.log(this.$route.query)
        this.requestNews();
      }
    }

</script>

<style scoped>
#content{
  color: red;
}
</style>
