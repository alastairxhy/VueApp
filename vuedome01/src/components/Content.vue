<template>
    <div>
      <p id="content">我是具体内容</p>
    </div>
</template>

<script>
  /*动态路由传值
  * */
    export default {
        name: "Content",
      data(){
          return{

          }
      },
      mounted() {
          console.log(this.$route.params)
      }
    }

</script>

<style scoped>
#content{
  color: red;
}
</style>
