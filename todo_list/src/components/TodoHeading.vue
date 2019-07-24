<template>
  <div>
    <table>
      <tr>
        <td><h1>Vue.js To Do List</h1></td>
      </tr>
      <tr>
        <td><span id="desc">Simple Todo List with adding and filter by diff status.</span></td>
      </tr>
      <tr>
        <td><span><input type="text" v-model="newItem"/><button class="addButton"
                                                                @click="addTodoList">Add</button></span></td>
      </tr>
    </table>
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
  .addButton {
    background-color: skyblue;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: medium;
    width: 60px;
    height: 30px;
    margin-left: 10px;
  }

  #desc, h1 {
    float: left;
    margin: 10px;
  }

  input {
    height: 25px;
    width: 80%;
  }
</style>
