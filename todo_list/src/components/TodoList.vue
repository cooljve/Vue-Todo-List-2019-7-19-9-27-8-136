<template>
  <div style="width: 50%;margin: auto;">
    <todo-heading></todo-heading>
    <a-list
      bordered
      :dataSource="currList"
      :pagination="pagination"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <todo-item :item="item"></todo-item>
      </a-list-item>
    </a-list>
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
        pagination: {
          pageSize: 5,
        },
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
    methods: {
      deleteItem(item) {
        this.$store.dispatch('deleteTodo', item);
      }
    }
  }
</script>

<style scoped>

  div {
    margin: 10px;
  }

  li:nth-child(even) {
    background-color: #3170a7;
  }
</style>
