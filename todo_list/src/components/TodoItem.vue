<template>
  <div>
    <table>
      <tr>
        <td style="width: 5%">
          <a-checkbox :checked="item.completed" @change="changeCompleted(item)"></a-checkbox>
        </td>
        <td style="width: 25%">
          <span v-if="!editing" @dblclick="editing=true" :class={itemCheck:item.completed}>{{item.content}}</span>
          <input autofocus class="edit" v-else type="text" v-model="item.content" @blur="edit(item)">
        </td>
        <td style="float: right">
          <a-button ghost type="danger" @click="deleteItem(item)">delete</a-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      item: Object
    },
    data() {
      return {
        editing: false
      }
    },
    methods: {
      edit(item) {
        this.$store.dispatch('updateTodo', item);
        this.editing = false;
      },
      changeCompleted(item) {
        item.completed = !item.completed;
        this.$store.dispatch('updateTodo', item);
      },
      deleteItem(item) {
        this.$store.dispatch('deleteTodo', item);
      }
    }
  }
</script>

<style scoped>
  .checkbox {
    width: 16px;
    height: 16px;
  }

  .itemCheck {
    width: 16px;
    height: 16px;
    text-decoration: line-through;
  }

  .edit {
    border-radius: 5px;
    height: 100%;
  }

  .deleteButton {
    background-color: transparent;
    border: none;
    color: black;
    font-size: medium;
  }
</style>
