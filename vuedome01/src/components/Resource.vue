<template>
  <div id="app">
    请求数据
    <button type="button" @click="getData()">点击就可以请求数据啦</button>
    <br>
    <hr>
    <ul>
      <li v-for="item in list">
        {{item.title}}
        {{item.pic}}
      </li>
    </ul>
  </div>
</template>

<script>
  import url from '../model/newsApi.js';
  export default {
    name: "Resource",
    data() {
      return {
        msg: "",
        list: []
      }
    },
    methods: {
      getData() {
        //从服务器获取数据
        this.$http.get(url).then((res) => {
          // console.log(res);
          for (var i=0;i<res.body.result.length;i++) {
            this.list.push(res.body.result[i]);
          }
          // console.log(this.list)
        }), (error) => {
          //error
        }
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style lang="scss">

</style>
