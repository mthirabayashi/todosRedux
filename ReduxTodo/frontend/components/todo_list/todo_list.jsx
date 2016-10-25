import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestTodos();
  }

  render(){
    const listItems = this.props.todos.map( todo => {
      return <TodoListItem key={`todo${todo.id}`} todo={todo} />;
    });
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <TodoForm />
      </div>
    );
  }

}

export default TodoList;
