<template>
  <div style="width: 300px; margin: auto">
    <div><h1>{{learnling }} To do list</h1></div>
    <div>
      <ol>
        <li v-for="n in currList">
          <span><input type="checkbox" v-model="n.status"/>{{n.name}}</span>
        </li>
      </ol>
    </div>
    <div style="float: left;clear: both">
      <button @click="showAll">All</button>
      <button @click="showActive">Active</button>
      <button @click="showComplete">Complete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        learnling: 'Vue.js',
        buttonType: 0,
        currList:[],
        allList: [{
          name: '123',
          status: 1
        }, {
          name: '456',
          status: 1
        }, {
          name: '789',
          status: 0
        }, {
          name: 'abc',
          status: 1
        },],
      }
    },
    methods: {
      showAll() {
        this.currList = this.allList;
      },
      showActive() {
        this.currList = this.allList.filter(l => l.status == 0);
      },
      showComplete(){
        this.currList = this.allList.filter(l => l.status == 1);
      },
    }
  }
</script>

<style scoped>

</style>
