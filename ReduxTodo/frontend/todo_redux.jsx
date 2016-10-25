import React from 'react';
import ReactDOM from 'react-dom';
import {requestTodos, createTodo} from './actions/todo_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', ()=>{
  const rootEl = document.getElementById('content');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>,rootEl);
  window.store = store;
  window.requestTodos = requestTodos;
  window.createTodo = createTodo;
});
