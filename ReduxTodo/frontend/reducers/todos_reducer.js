import React from 'react';
import {REQUEST_TODOS, RECEIVE_TODOS, CREATE_TODO, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_TODOS:
      return state;

    case RECEIVE_TODOS:
      let newState = {};
      for (var i = 0; i < action.todos.length; i++) {
        newState[action.todos[i].id] = action.todos[i];
      }
      return newState;

    case CREATE_TODO:
      return state;

    case RECEIVE_TODO:
      return merge({},state,{[action.todo.id]: action.todo});

    default:
      return state;
  }
};

export default todosReducer;
