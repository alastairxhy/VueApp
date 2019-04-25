<template>
  <div id="News">
    <ul class="list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="5">
      <li v-for="(listitem,key) in list">
        <router-link :to="'/content/'+listitem.aid">{{listitem.title}}</router-link>
      </li>
    </ul>
    <!--    <ul-->
    <!--      v-infinite-scroll="loadMore"-->
    <!--      infinite-scroll-disabled="loading"-->
    <!--      infinite-scroll-distance="10">-->
    <!--      <li v-for="item in list">{{ item }}</li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
  import newsApi from '../model/newsApi.js';
  import store from  '../vuex/store';

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
      alternew() {
        alter('我是新闻组件');
      },
      // getNewsData() {
      //   this.$http.jsonp(newsApi.url + 1).then((res) => {
      //     console.log(res.body.result);
      //     this.list = res.body.result;
      //   }, (err) => {
      //     console.log(err)
      //   })
      // },
      loadMore() {

        /*如何实现数据持久化
        * 1.请求数据
        * 2.将数据保存至vuex
        * 3.从vuex中传回数据*/
          let page = store.state.list.length / 20 + 1;
          console.log(page)
          this.$http.jsonp(newsApi.url + page).then((res) => {
            // let last = this.list[this.list.length - 1];
            console.log(res)
            var len = res.body.result.length;
            for (let i = 0; i < 20; i++) {
              store.state.list.push(res.body.result[i])
              // this.list.push(res.body.result[i])
            }
            if (len < 20) {
              this.loading = true;
            } else {
              this.loading = false;
            }
      })
      }
    },

    mounted() {
      this.list = store.state.list;
    },
  }

</script>

<style scoped lang="scss">
  .list {
    li {
      height: 3rem;
      line-height: 1.5;
      boder-bottom: 1px solid #eee;
      font-size: 1rem;

      a {
        color: #666;
      }
    }
  }
</style>
