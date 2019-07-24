<template>
  <div style="margin: auto;width: 20%">
    <a-icon type="user" style="font-size: 100px;margin: 20px;color: #1890ff;" />
    <a-input-search placeholder="请输入姓名" v-model="name" @search="changeToHome" enterButton="开始使用" size="large" />
  </div>
</template>

<script>
  export default {
    name: "Main",
    data(){
      return{
        name: ''
      }
    },
    methods: {
      changeToHome() {
        this.$router.push('home');
        this.$router.push({ name: 'home', params: { username: this.name }})
      }
    }
  }
</script>

<style scoped>

</style>
