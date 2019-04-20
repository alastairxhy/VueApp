<template>
  <div class="user">
    <div class="uesrleft">
      <ul>
        <li>
          <router-link to="/user/useradd">增加用户</router-link>
        </li>
        <li>
          <router-link to="/user/userlist">用户列表</router-link>
        </li>
      </ul>
    </div>
    <div class="userright">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  html {
    width: 100%;
    height: 100%;
  }

  .user {
    display: flex;
    li{
      line-height: 2;
    }
    .uesrleft {
      border-right: 2px solid #eeeeee;
      width: 16.4rem;
      min-width: 16.4rem;
      min-height: 400px;

    }
    .userright {
      flex: 1;

    }
  }

</style>
