<template>
  <div style="margin: auto">
    <a-input-search placeholder="请输入姓名" @search="changeToHome" enterButton="开始使用" size="large" />
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

</style>
