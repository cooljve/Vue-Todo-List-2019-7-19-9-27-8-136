const mutations = {
  changeButton(state, index) {
    state.currIndex = index;
  },
  loadTodo(state, todos) {
    state.allList = todos;
  },
};
export default mutations;
