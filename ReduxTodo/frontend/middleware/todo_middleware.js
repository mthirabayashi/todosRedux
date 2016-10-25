import {REQUEST_TODOS, RECEIVE_TODOS, CREATE_TODO, receiveTodos, receiveTodo} from '../actions/todo_actions';
import {fetchTodos,createTodo} from '../util/todo_api_util.js';

const TodoMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type){
    case REQUEST_TODOS:
      const success = data => dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      return next(action);

    case CREATE_TODO:
      const successCreate = data => dispatch(receiveTodo(data));
      const errorCreate = e => console.log(e);
      createTodo(action.todo, successCreate, errorCreate);
      return next(action);

    default:
      return next(action);
  }
};

export default TodoMiddleware;
