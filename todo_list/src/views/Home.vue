<template>
  <div id="container">
    <div id="header">
      <button id="backBtn" @click="back">返回</button>
      <span style="float: right;font-size: 22px">{{username}}</span>
    </div>
    <div id="menu">
      <button @click="showTodoList">Todo list列表</button>
      <br>
      <button @click="showProfile">我的</button>
      <br>
    </div>
    <div id="content">
      <router-view/>
    </div>
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
    methods: {
      back() {
        let flag = confirm("确认返回上一页？");
        if (flag == true) {
          this.$router.push('/');
        }
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
  #container {
    width: 700px;
    margin: auto;
  }

  #header {
    background-color: yellow;
    height: 100%;
  }

  #menu {
    float: left;
    clear: left;
    width: 30%;
    background-color: antiquewhite;
  }

  #content {
    float: left;
    width: 70%;
    background-color: #3365b1d4;
  }

  #backBtn {
    border: none;
    border-radius: 5px;
    font-size: large;
    margin: 0px;
    float: left;
  }

  button {
    background-color: transparent;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 10px 10px;
    color: skyblue;
    font-size: medium;
  }

</style>
