<template>
  <div style="width: 100%;">
    <a-row style="font-size: 20px" type="flex" justify="end">
      <a-col :span="1">
        <a-checkbox :checked="item.completed" @change="changeCompleted(item)"></a-checkbox>
      </a-col>
      <a-col :span="4">
        <span v-if="!editing" @dblclick="editing=true" :class={itemCheck:item.completed}>{{item.content}}</span>
        <input autofocus class="edit" v-else type="text" v-model="item.content" @blur="edit(item)">
      </a-col>
      <a-col :span="19">
        <a-button style="float: right" type="danger" size="large" @click="deleteItem(item)">delete</a-button>
      </a-col>
    </a-row>
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
  .itemCheck {
    width: 16px;
    height: 16px;
    text-decoration: line-through;
  }

  .edit {
    border-radius: 5px;
    height: 100%;
  }

</style>
