<template>
  <div class="card">
    <div>
      <table>
        <tr>
          <td><h1>{{learnling }} To Do List</h1></td>
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
    <div>
      <ol>
        <li v-for="n in currList">
          <table>
            <tr>
              <td><input class="checkbox" type="checkbox" v-model="n.status"/></td>
              <td><span :class="selectClass(n.status)">{{n.name}}</span></td>
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
  export default {
    name: "TodoList",
    data() {
      return {
        newItem: '',
        learnling: 'Vue.js',
        buttonType: 0,
        currList: [],
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
      showComplete() {
        this.currList = this.allList.filter(l => l.status == 1);
      },
      addTodoList() {
        if (this.newItem == '') {
          alert('please input todo item.');
          return;
        }
        let item = {name: this.newItem, status: 0};
        this.allList.push(item);
        this.newItem = '';
      },
      selectClass(val) {
        if (val == 1) {
          return 'itemCheck';
        }
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

  input {
    height: 25px;
    width: 80%;
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

  #desc, h1 {
    float: left;
    margin: 10px;
  }

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
  li:nth-child(even){
    background-color: cornsilk;
  }
</style>
