<template>
  <!--所有的组件必须被根节点包含起来-->
  <div>
    <h2>这是一个头部组件----{{headermsg}}</h2>
    <div>
      调用父组件的数据:
      {{datahome}}***{{title}}
    </div>
    <button @click="headerrun()">头部-点我一下试试</button>
    <button @click="homerun(123)">调用父组件方法-点我一下试试</button>
    <button @click="getParentData()">主页-获取父组件的属性和方法</button>
  </div>
</template>

<script>
  /*
  * 父组件给子组件传值
  * 1. 父组件调用子组件，同时动态绑定父组件的属性和方法
  * 2. 通过props实现子组件使用父组件的属性和方法
  */
  export default {
    name: "Header",
    data() {
      return {
        headermsg: "我是一个头部"
      }
    },
    // props:['datahome','title','homerun','home'],
    props: {  //验证合法性
      datahome:String,
      title:Array,
      homerun:Function,
      // home:Object
    },
    methods: {
      headerrun() {
        alert(this.headermsg);
        console.log(this.home)
      },
      headerconsole(){
        alert("header组件被调用了")
      },
      getParentData(){
        console.log(this.$parent.newid);
        console.log(this.$parent);
      }
    }
  }
</script>

<!--scoped 局部作用域-->
<style scoped lang="scss">
  h2 {
    color: blue;
  }
</style>
