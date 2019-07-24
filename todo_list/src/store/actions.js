import axios from 'axios'
import {LOAD_TODO} from "./mutation-types";

const baseUrl = 'http://localhost:3001';

const actions = {
  getTodos({commit}) {
    axios.get(`${baseUrl}/todos`)
      .then(res => {
        commit(LOAD_TODO, res.data);
      }).catch(err => {
      console.log(err);
    });
  },
  addTodo({dispatch, commit}, item) {
    axios.post(`${baseUrl}/todos`, item)
      .then(res => {
        dispatch('getTodos');
      }).catch(err => {
      console.log(err);
    });
  },
  updateTodo({dispatch, commit}, item) {
    axios.put(`${baseUrl}/todos/${item.id}`, item)
      .then(res => {
        dispatch('getTodos');
      }).catch(err => {
    });
  },
  deleteTodo({dispatch, commit}, item) {
    axios.delete(`${baseUrl}/todos/${item.id}`)
      .then(res => {
        dispatch('getTodos');
      }).catch(err => {
    });
  }
};
export default actions;
