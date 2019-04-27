<template>
  <div id="alterbox" v-if="active">
    <div class="alter-box-top" v-if="active">
      <h2>{{ tit }}</h2>
      <p>{{ des }}</p>
    </div>
    <div class="alter-box-bottom" v-if="active">
      <div class="cancel"><span @click="handleNo()"> 取消</span></div>
      <div class="ok" ><span @click="handleOk()">确定</span></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Alterbox",
    props: {
      tit: String,
      des: String
    },
    data() {
      return {
        active: true
      }
    },
    methods: {
      handleOk:function () {
        this.active = false;
      },
      handleNo() {
        this.active = false;
      }
    }

  }
</script>

<style scoped lang="scss">
  #alterbox {
    background-color: #eeeeee;
    width: 300px;
    height: 170px;
    border: 1px solid #ffffff;
    border-radius: 7px;

    .alter-box-top {
      text-align: center;
    }

    .alter-box-bottom {
      margin-top: 30px;
      font-size: 22px;
      display: flex;
      justify-content: center;

      .cancel {
        text-align: center;
        width: 50%;
        border-right: 1px solid #eeeeee;
      }

      .ok {
        color: green;
        width: 50%;
        text-align: center;
      }

      span {
        cursor: pointer;
      }
    }
  }

</style>
