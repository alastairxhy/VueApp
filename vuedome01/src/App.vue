<template>
  <!--vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <h1>{{ msg }}</h1>
    <h3>{{obj.name}}</h3>

    <!--循环语法-->
    <div v-for="a in list" style="display: inline">
      {{a}}
    </div>
    <!--循环语法 第一个高亮-->
    <ul>
      <li v-for="(b,key) in list" :class="{'red':key==0,'blue':key==2}">
       {{key}}--- {{b}}
      </li>
    </ul>
    <br>
    <div v-bind:title="title">鼠标上去瞄一下</div>
    <!--绑定属性简写  ：-->
    <img src="http://photocdn.sohu.com/20151113/mp41523318_1447397103426_1.gif">
    <img v-bind:src="url">
    <img :src="url">

    <!--绑定html-->
    {{h}}
    <div v-html="h">123</div>

    <!--绑定数据的两种种方法-->
    {{msg}}
    <div v-text="msg"></div>
    <br><br>

    <!--v-bind:class :class的使用-->
    <div :class="{'red':flag}">我是一个div</div>
    <br><br>
    <div :class="{'red':!flag,'blue':flag}">我是另外一个div</div>
    <br><br>

    <!--v-bind:style :style的使用-->
    <div class="box" :style="{width:boxwidth+'px'}" >
      这是一个盒子
    </div>



  </div>

</template>

<script>
export default {
  name: 'app',
  data () {  //业务逻辑里面定义的数据
    return {
      msg: '你好，Vue',
      obj:{
        name:"张三"
      },
      list:['111','222','333'],
      title:'123',
      url:'http://photocdn.sohu.com/20151113/mp41523318_1447397103426_1.gif',
      h:'<h2>我是h2</h2>',
      flag:true,
      boxwidth:300


    }
  }
}
</script>

<style lang="scss">
  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
