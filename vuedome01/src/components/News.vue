<template>
  <div>
    <ul> 这是新闻组件
      <button @click="emitHome()">新闻-获取非父子组件home的属性和方法</button>
      <!--        <v-header ></v-header>-->
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
  import emitvue from '../model/emit.js';

  export default {
    name: "News",
    data() {
      return {
        newsmsg: '我是new',
        newid: 2
      }
    },
    methods: {
      emitHome() {
        emitvue.$emit('home-msg', this.newsmsg);
      }
    },
    mounted() {
      emitvue.$on('new-msg', (res) => {
        console.log(res);
      });
    },
    components: {
      'v-header': Header
    }
  }

</script>

<style scoped>

</style>
