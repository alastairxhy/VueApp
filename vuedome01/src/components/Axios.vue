<template>
  <div>
    请求数据
    <button @click='getData()'>点击获取数据</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "axios",
    data() {
      return {
        msg: '',
        url: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1',
        list: []
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        const axios = require('axios');
        axios.get(this.url).then(res => {
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
