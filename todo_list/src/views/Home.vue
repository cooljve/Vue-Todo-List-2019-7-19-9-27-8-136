<template>
  <div id="container">
    <a-layout>
      <a-layout-header>
        <a-button type="primary" ghost icon="arrow-left" @click="back" style="float: left;margin-top: 10px;">返回</a-button>
        <span style="float: right;font-size: 22px">{{username}}</span></a-layout-header>
      <a-layout>
        <a-layout-sider>
          <a-menu
            :defaultSelectedKeys="['1']"
            mode="inline"
            theme="dark"
          >
            <a-menu-item @click="showTodoList" key="1">
              <a-icon type="ordered-list"/>
              <span>Todo Lists</span>
            </a-menu-item>
            <a-menu-item @click="showProfile" key="2">
              <a-icon type="user"/>
              <span>MyProfile</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        username: 'Joi'
      }
    },
    beforeRouteLeave(to, from, next) {
      if (to.path == '/') {
        confirm("确认离开？") && next();
      }
    },
    methods: {
      back() {
        this.$router.push('/');
      },
      showTodoList() {
        this.$router.push('todos');
      },
      showProfile() {
        this.$router.push('profile');
      }
    }
  }
</script>

<style scoped>

</style>
