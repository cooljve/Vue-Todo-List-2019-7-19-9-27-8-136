<template>
  <div style="width:400px;margin: auto">
    <a-row><h1>Vue.js To Do List</h1></a-row>
    <a-row>Simple Todo List with adding and filter by diff status.</a-row>
    <a-row><a-input-search placeholder="new item" v-model="newItem" @search="addTodoList" enterButton="Add"/></a-row>
  </div>
</template>

<script>
  export default {
    name: "TodoHeading",
    data() {
      return {
        newItem: ''
      }
    },
    methods: {
      addTodoList() {
        if (this.newItem == '') {
          alert('please input todo item.');
          return;
        }
        let id = this.$store.state.todos.allList.length + 1;
        let item = {id: id, content: this.newItem, completed: false};
        this.newItem = '';
        this.$store.dispatch('addTodo', item);
      },
    }
  }
</script>

<style scoped>
</style>
