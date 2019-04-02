<template>
    <div>
      <v-header></v-header>
      <ul> 这是新闻组件
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
      components:{
          'v-header':Header
      }
    }

</script>

<style scoped>

</style>
