<template>
  <div id='app'>
    <button v-on:click="run1()">执行事件的第一种方法</button>
    <!--v-on: 的缩写形式  @-->
    <button @click="run2()">执行事件的第二种方法</button>
    <br><br>
    <hr>
    <button v-on:click="getMsg1()">获取数据的第一种方法</button>
    <button @click="getMsg2()">获取数据的第二种方法</button>

    <button @click="setMsg()">设置数据的第一种方法</button>
    <br><br>
    <hr>
    <button @click="deleteDate('111')">执行方法传值</button>
    <br><br>
    <hr>
    <button data-ab="321" @click="eventfn($event)">事件对象</button>

    <ul>
      <li v-for="(item,key) in list">{{key}}---{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "day3",
    data() {
      return {
        msg: "你好，Vue",
        list: []
      }
    },
    methods: {
      run1() {
        alert("第一种方法");
      },
      run2() {
        alert("第二种方法");
      },
      getMsg1() {
        alert(this.msg);
      },
      getMsg2() {
        alert(this.msg);
      },
      setMsg() {
        for (var i = 1; i <= 10; i++) {
          this.list.push('我是第' + i + '个元素')
        }
      },
      deleteDate(val) {
        alert(val);
      },
      eventfn(e) {
        console.log(e);
        e.srcElement.style.backgroundColor = 'red'; //获取事件对象的来源对象，将其背景色改为红色
        console.log(e.srcElement.dataset);  //获取自定义属性的值
        alert(e.srcElement.dataset.ab)
      }
    }
  }
</script>

<style lang="scss">

</style>
