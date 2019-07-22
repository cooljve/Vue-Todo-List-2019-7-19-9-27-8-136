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
                <span v-if="!editing" @dblclick="edit" :class="selectClass(n.status)">{{n.name}}</span>
                <input v-else type="text" v-model="n.name" @blur="editing=false">
              </td>
            </tr>
          </table>
        </li>
      </ol>
    </div>
    <div class="btn-layout">
      <button class="button" @click="showAll">All</button>
      <button class="button" @click="showActive">Active</button>
      <button class="button" @click="showComplete">Complete</button>
    </div>
  </div>
</template>

<script>
  import TodoHeading from '../components/TodoHeading'
  var allList= [{
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
  },];
  export default {
    name: "TodoList",
    components:{TodoHeading,},
    data() {
      return {
        newItem: '',
        learning: 'Vue.js',
        editing: false,
        buttonType: 0,
        currList: allList,
      }
    },
    methods: {
      showAll() {
        this.currList = allList;
      },
      showActive() {
        this.currList = allList.filter(l => l.status == 0);
      },
      showComplete() {
        this.currList = allList.filter(l => l.status == 1);
      },
      selectClass(val) {
        if (val) {
          return 'itemCheck';
        }
      },
      addItem(item){
        allList.push(item);
      },
      edit() {
        this.editing = true;
        this.$nextTick(function () {
          this.$els.input.focus();
        });
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
