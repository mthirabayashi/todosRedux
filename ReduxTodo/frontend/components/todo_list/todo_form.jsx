import React from 'react';

class TodoForm extends React.Compoenent {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <form>
        <input type="text" name="todo[title]"></input>
        <input type="text" name="todo[body]"></input>
        <input type="radio" name="todo[done]" value="true"></input>
        <input type="radio" name="todo[done]" value="false"></input>
        <button onClick={this.props.createTodo.bind(this)}></button>
      </form>
    );
  }
}
export default TodoForm;
