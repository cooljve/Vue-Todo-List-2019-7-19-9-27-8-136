<template>
  <div class="card">
    <todo-heading @addItem="addItem($event)"></todo-heading>
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
        todoButton:{filters(items){}},
      }
    },
    computed: {
      currList() {
        return this.todoButton.filters(this.allList);
      }
    },
    methods: {
      addItem(item) {
        this.allList.push(item);
      },
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
