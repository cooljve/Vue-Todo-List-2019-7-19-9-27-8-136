<template>
  <div class="btn-layout">
    <button class="button" v-for=" n in buttonGroup" @click="selectButton(n.type)">{{n.type}}</button>
  </div>
</template>

<script>
  export default {
    name: "TodoButton",
    data(){
      return{
        buttonIndex: 0,
        buttonGroup: [{
          type: 'All',
          filters(items) {
            return items;
          }
        }, {
          type: 'Active',
          filters(items) {
            return items.filter(item => item.status == 0);
          }
        }, {
          type: 'Complete',
          filters(items) {
            return items.filter(item => item.status == 1);
          }
        }],
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
        this.$emit('clickButton', this.buttonGroup[this.buttonIndex]);
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
