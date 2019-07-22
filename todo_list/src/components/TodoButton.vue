<template>
  <div class="btn-layout">
    <button class="button" v-for=" button in $store.state.buttonGroup"
            @click="selectButton(button.type)">{{button.type}}</button>
  </div>
</template>

<script>
  export default {
    name: "TodoButton",
    data(){
      return{
        buttonIndex: 0,
      }
    },
    methods:{
      selectButton(type) {
        if (type === 'All') {
          this.buttonIndex = 0;
        } else if (type === 'Active') {
          this.buttonIndex = 1;
        } else {
          this.buttonIndex = 2;
        }
        this.$store.commit('changeButton',this.buttonIndex);
      },
    }
  }
</script>

<style scoped>

  .button {
    background-color: transparent;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 10px 10px;
    color: skyblue;
    font-size: medium;
  }

  .btn-layout {
    clear: left;
  }
</style>
