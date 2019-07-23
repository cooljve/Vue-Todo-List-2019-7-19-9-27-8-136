<template>
  <div class="card">
    <todo-heading></todo-heading>
    <div>
      <ol>
        <li v-for="item in currList">
          <table>
            <tr>
              <td><input class="checkbox" type="checkbox" :checked="item.completed" @input="changeCompleted(item)"/>
              </td>
              <td>
                <span v-if="!editing" @dblclick="edit" :class={itemCheck:item.completed}>{{item.content}}</span>
                <input v-else type="text" v-model="item.content" @blur="editing=false">
              </td>
            </tr>
          </table>
        </li>
      </ol>
    </div>
    <todo-button></todo-button>
  </div>
</template>

<script>
  import TodoHeading from '../components/TodoHeading'
  import TodoButton from '../components/TodoButton'

  export default {
    name: "TodoList",
    components: {TodoHeading, TodoButton},
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
    methods: {
      edit() {
        this.editing = true;
        this.$nextTick(function () {
          this.$els.input.focus();
        });
      },
      changeCompleted(item) {
        item.completed = !item.completed;
        this.$store.dispatch('updateTodo', item);
      }
    }
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

  .checkbox {
    width: 16px;
    height: 16px;
  }

  .itemCheck {
    width: 16px;
    height: 16px;
    text-decoration: line-through;
  }

  li:nth-child(even) {
    background-color: #dcf5ff;
  }
</style>
