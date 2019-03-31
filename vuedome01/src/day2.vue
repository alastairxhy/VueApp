<template>
  <div id="app">
    <div v-html='msg'>

    </div>
    <input type="text" v-model="msg"/>
    <br>
    <button v-on:click="getMsg()">获取表单数据</button>
    <button v-on:click="setMsg()">设置表单数据</button>
    <hr>
    <br>
    <div ref="box">
      <input type="text" ref="info" value="我叫vue"/>
    </div>
    <br>
    <button v-on:click="getMsg2()">获取第二个表单数据</button>
  </div>
</template>

<script>
  //双向数据绑定  MVVM  vue就是一个MVVM的框架
  /*
  * M model
  * V view
  * MVVM model改变会影响视图，view视图的改变反过来影响model
  *
  * 双向数据绑定必须在表单里面使用
  */
  export default {
    name: 'day2',
    data() { //业务逻辑里面定义的数据
      return {
        msg: '你好'
      }
    },
    methods: {
      getMsg() {
        // alert('vue方法执行了')

        //方法里面获取data的数据
        alert(this.msg)
      },
      setMsg() {
        this.msg = 'hello'
      },
      getMsg2() {
        console.log(this.$refs.info);
        alert(this.$refs.info.value);
        this.$refs.box.style.backgroundColor = 'red';

      }

    }
  }
</script>

<style lang="scss">

</style>
