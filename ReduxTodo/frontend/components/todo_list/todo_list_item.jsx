import React from 'react';

class TodoListItem extends React.Component {

  constructor(prop) {
    super(prop);
  }

  render(){
    return(
      <li>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoListItem;
