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
        <input type="checkbox"  v-model="item.checked">{{item.title}}
        <button @click="delbutton(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked">{{item.title}}
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
  export default {
    name: "day4",
    data() {
      return {
        flag: false,
        todo: '',
        list: [
          {
            title: '录制nodejs',
            checked: true
          }, {
            title: '录制vue',
            checked: false
          }, {
            title: '录制java',
            checked: false
          }, {
            title: '录制c++',
            checked: false
          }
        ]
      }
    },
    methods: {
      addkeyboard(e){
        console.log(e.keyCode);
        if (e.keyCode ==13) {
          //将值传入数组list中
          this.list.push({title: this.todo, checked: false});
        }
      },
      additem() {
        //1.获取文本框的值
        console.log(this.todo);
        //2.将值传入数组list中
        this.list.push({title: this.todo, checked: false});
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
      },
      delbutton(val) {
        this.list.splice(val, 1)
      },
      // checkedstate(val){
      //   this.list[val].checked = true;
      // }
    }
  }
</script>

<style lang="scss">

</style>
