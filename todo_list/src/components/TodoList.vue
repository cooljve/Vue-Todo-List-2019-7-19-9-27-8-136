<template>
  <div class="card">
    <todo-heading></todo-heading>
    <div>
      <ol>
        <li v-for="n in currList">
          <table>
            <tr>
              <td><input class="checkbox" type="checkbox" v-model="n.status"/></td>
              <td>
                <span v-if="!editing" @dblclick="edit" :class={itemCheck:n.status}>{{n.name}}</span>
                <input v-else type="text" v-model="n.name" @blur="editing=false">
              </td>
            </tr>
          </table>
        </li>
      </ol>
    </div>
    <todo-button @clickButton="clickButton($event)"></todo-button>
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
        todoButton:{filters(items){}},
      }
    },
    computed: {
      currList() {
        return this.todoButton.filters(this.$store.state.allList);
      }
    },
    methods: {
      edit() {
        this.editing = true;
        this.$nextTick(function () {
          this.$els.input.focus();
        });
      },
      clickButton(button) {
        this.todoButton = button;
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
