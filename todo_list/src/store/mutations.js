import {CHANGE_BUTTON, LOAD_TODO} from "./mutation-types";

const mutations = {
  [CHANGE_BUTTON](state, index) {
    state.currIndex = index;
  },
  [LOAD_TODO](state, todos) {
    state.allList = todos;
  },
};
export default mutations;
