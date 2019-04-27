<template>
    <div>
      <p>测试页面</p>
      <div>
        <v-alter :tit="tit" :des="des"></v-alter>
      </div>
    </div>
</template>

<script>
    import alterbox from './test/Alterbox'
    export default {
        name: "Test",
      data(){
          return{
            tit:'hello',
            des:'this is a modal'
          }
      },
      methods:{
      },
      components:{
        'v-alter':alterbox
      }
    }
</script>

<style scoped>

</style>
