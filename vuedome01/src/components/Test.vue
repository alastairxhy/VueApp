<template>
    <div>
      <p>测试页面</p>
      <div>
        <v-alter :tit="tit" :des="des"></v-alter>
      </div>
      <br>
      <hr>
      <!--插槽 solt-->
      <v-chacao>
        <div slot="header">这里是头部</div>
        <div slot="footer">这里是尾部</div>
      </v-chacao>



    </div>
</template>

<script>
    import alterbox from './test/Alterbox';
    import vslot from './test/Vslot';
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
        'v-alter':alterbox,
        'v-chacao':vslot
      },
      props:{

      }
    }
</script>

<style scoped>

</style>
