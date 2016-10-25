import React from 'react';
import $ from 'jquery';

export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: {todo: todo},
    dataType: 'json',
    success,
    error
  });
};
