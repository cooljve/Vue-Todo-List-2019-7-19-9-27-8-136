<template>
  <div>
    <table>
      <tr>
        <td><input class="checkbox" type="checkbox" :checked="item.completed" @input="changeCompleted(item)"/>
        </td>
        <td>
          <span v-if="!editing" @dblclick="editing=true" :class={itemCheck:item.completed}>{{item.content}}</span>
          <input v-else type="text" v-model="item.content" @blur="edit(item)">
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
        console.log('editItem:',item);
        this.$store.dispatch('updateTodo', item);
        this.editing = false;
      },
      changeCompleted(item) {
        item.completed = !item.completed;
        this.$store.dispatch('updateTodo', item);
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
</style>
