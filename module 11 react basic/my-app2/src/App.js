import React from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./TodoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevdata) => {
      const updatedTodos = prevdata.todos.map((todo) => {
        if (todo.id === id) {
           return[
               ...todo,
               completed:!todo.completed
           ]
        }
      return todo
      })
    })
  }
  render() {
    const todo = this.state.todos.map((data) => (
      <TodoItem key={data.id} todo={data} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todo}</div>;
  }
}

export default App;
