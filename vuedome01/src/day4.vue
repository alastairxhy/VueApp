<template>
  <div id="app">

    <input type="text" v-model="todo" @keydown="addkeyboard($event)">

    <button @click="additem()">增加</button>
    <button @click="delitem()">删除</button>
    <br>
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <!--<input type="checkbox" @click="checkedstate(key)" v-model="item.checked">{{item.title}}-->
        <input type="checkbox"  @click="checkedstat(key)" v-model="item.checked">{{item.title}}
        <button @click="delbutton(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @click="checkedstat(key)" >{{item.title}}
        <button @click="delbutton(key)">删除</button>
      </li>
    </ul>
    <br><br>
    <hr>
    <h2 v-if="flag" style="background-color: red">测试</h2>
    <h2 v-if="!flag" style="background-color: blue">测试</h2>


  </div>
</template>

<script>
  import storage from './model/storage.js';
  export default {
    name: "day4",
    data() {
      return {
        flag: false,
        todo: '',
        list: []
      }
    },
    mounted(){
      this.isSupportLocalStorage()
      //从本地获取存储的数据
      var list = JSON.parse(localStorage.getItem('list'))
      if (list){
        this.list = list;
      }
    },
    methods: {
      //判断浏览器是否支持localstorage
      isSupportLocalStorage () {
        if(window.localStorage){
          console.log("支持")
        }
      },
      addkeyboard(e){
        console.log(e.keyCode);
        if (e.keyCode ==13) {
          //将值传入数组list中
          this.list.push({title: this.todo, checked: false});
          localStorage.setItem('list',JSON.stringify(this.list));
        }
      },
      additem() {
        //1.获取文本框的值
        console.log(this.todo);
        //2.将值传入数组list中
        this.list.push({title: this.todo, checked: false});
        localStorage.setItem('list',JSON.stringify(this.list));
      },
      delitem() {
        //1.获取文本框的值
        console.log(this.todo);
        //2.找出该值在数组中的位置
        console.log(this.list);
        console.log(this.list.indexOf(this.todo));
        //3.删除该值
        if (this.list.indexOf(this.todo) >= 0) {
          this.list.splice(this.list.indexOf(this.todo), 1);
        } else {
          alert("该值不存在");
        }
        localStorage.setItem('list',JSON.stringify(this.list));
      },
      delbutton(val) {
        this.list.splice(val, 1)
        localStorage.setItem('list',JSON.stringify(this.list));
      },
      checkedstat(val){
        console.log(val)
        this.list[val].checked = !this.list[val].checked;
        localStorage.setItem('list',JSON.stringify(this.list));

      }
    }
  }
</script>

<style lang="scss">

</style>
