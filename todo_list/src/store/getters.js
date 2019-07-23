const getters = {
  list: state => {
    return state.buttonGroup[state.currIndex].filters(state.allList);
  }
};
export default getters;
