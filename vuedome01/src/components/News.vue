<template>
    <div>
      <ul> 这是新闻组件
        <v-header ></v-header>
        <li>
          111
        </li>
        <li>
          222
        </li>
        <li>
          333
        </li>
      </ul>
    </div>
</template>

<script>
  import Header from './Header.vue'; //引入头部组件
    export default {
        name: "News",
      data(){
          return{
            newsmsg:'我是new',
            newid:2
          }
      },
      components:{
          'v-header':Header
      }
    }

</script>

<style scoped>

</style>
