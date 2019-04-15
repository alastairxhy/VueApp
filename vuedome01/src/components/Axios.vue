<template>
  <div>
    请求数据
    <button @click='getData()'>点击获取数据</button>
  </div>
</template>

<script>
  import axios from 'axios';//引入第三方插件
  import newsApi from '../model/newsApi.js';//引入请求地址
  export default {
    name: "axios",
    data() {
      return {
        msg: '',
        list: []
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        const axios = require('axios');
        axios.get(newsApi.url).then(res => {
            console.log(res);
          }).catch(err => {
          console.log(res);
        })

      }
    }

  }
</script>

<style scoped>

</style>
