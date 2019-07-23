<template>
  <div class="card">
    <todo-heading></todo-heading>
    <div>
      <ol>
        <li v-for="item in currList">
          <todo-item :item="item"></todo-item>
        </li>
      </ol>
    </div>
    <todo-button></todo-button>
  </div>
</template>

<script>
  import TodoHeading from '../components/TodoHeading'
  import TodoButton from '../components/TodoButton'
  import TodoItem from '../components/TodoItem'

  export default {
    name: "TodoList",
    components: {TodoHeading, TodoButton, TodoItem},
    data() {
      return {
        newItem: '',
        learning: 'Vue.js',
        editing: false,
      }
    },
    mounted() {
      this.$store.dispatch('getTodos');
    },
    computed: {
      currList() {
        return this.$store.getters.list;
      }
    },
  }
</script>

<style scoped>
  .card {
    width: 500px;
    margin: auto;
    box-shadow: 0 0 10px #34313fa3;
    border-radius: 5px;
    padding: 10px;
  }

  div {
    margin: 10px;
  }

  li:nth-child(even) {
    background-color: #dcf5ff;
  }
</style>
