const state={
  allList: [],
  currIndex: 0,
  buttonGroup: [{
    type: 'All',
    filters(items) {
      return items;
    }
  }, {
    type: 'Active',
    filters(items) {
      return items.filter(item => !item.completed);
    }
  }, {
    type: 'Complete',
    filters(items) {
      return items.filter(item => item.completed);
    }
  }],
};

export default state;
