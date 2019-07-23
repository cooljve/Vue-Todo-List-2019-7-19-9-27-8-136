<template>
  <div style="margin: auto">
    <p>头像：</p>
    <p>姓名：{{name}}</p>
    <p>电话：{{phoneNumber}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        name: 'Joi Liu',
        phoneNumber: '12312312323'
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 30px;
  }
</style>
