<template>
  <div>
    <a-card
      hoverable
      style="width: 50%;margin: 20px auto;font-size: large;"
    >
      <a-card-meta
        :title=name
        :description=phoneNumber>
        <a-avatar slot="avatar" :src=url />
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
  import pic from '../assets/logo.png'

  export default {
    name: "Profile",
    data() {
      return {
        name: 'Joi Liu',
        phoneNumber: '12312312323',
        url: pic,
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 30px;
  }
</style>
