<template>
    <div>
      <slot name='header'></slot>
      <div v-show="show">这里是插槽slot1</div>
      <slot name='footer'></slot>

    </div>
</template>

<script>
    export default {
        name: "Vslot",
      data(){
          return{
            show:true
          }
      },
      methods:{
          test:function () {

          }
      }
    }
</script>

<style scoped>

</style>
