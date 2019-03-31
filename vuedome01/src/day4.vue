<template>
  <div id="app">

    <input type="text" v-model="todo">

    <button @click="additem()">增加</button>
    <button @click="delitem()">删除</button>
    <br>
    <hr>
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    name: "day4",
    data() {
      return {
        todo: '',
        list: []
      }
    },
    methods: {
      additem() {
        //1.获取文本框的值
        console.log(this.todo);
        //2.将值传入数组list中
        this.list.push(this.todo);
      },
      delitem() {
        //1.获取文本框的值
        console.log(this.todo);
        //2.找出该值在数组中的位置
        console.log(this.list);
        console.log(this.list.indexOf(this.todo));
        //3.删除该值
        if (this.list.indexOf(this.todo)>=0) {
          this.list.splice(this.list.indexOf(this.todo),1);
        }else {
          alert("该值不存在");
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
