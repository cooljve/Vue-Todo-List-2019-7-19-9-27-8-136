<template>
  <div style="margin: auto">
    <p>
      <button @click="changeToHome">开始使用</button>
    </p>
    <p><input type="text" placeholder="请输入姓名"/></p>
  </div>
</template>

<script>
  export default {
    name: "Main",
    methods: {
      changeToHome() {
        this.$router.push('home');
      }
    }
  }
</script>

<style scoped>
  button {
    background-color: cornflowerblue;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 10px 10px;
    color: white;
    font-size: large;
  }

  input {
    width: 10%;
    font-size: 22px;
    border-radius: 5px;
  }
</style>
