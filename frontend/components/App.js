import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const todoData = [
  {
    name: 'Organize Garage',
    id: 101,
    completed: false
  },
  {
    name: 'Brush Teeth',
    id: 102,
    completed: false
  },
  {
    name: 'Do Stuff',
    id: 103,
    completed: false
  },
  {
    name: 'Eat Lunch',
    id: 104,
    completed: false
  },
  {
    name: 'Pickup Groceries',
    id: 105,
    completed: false
  },
  {
    name: 'Vacuum',
    id: 106,
    completed: false
  }
  ];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoData
    }
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, todoData: [...this.state.todoData, newTodo]}); 
  }

  toggleTodo = itemId => {
    this.setState({...this.state, todoData: this.state.todoData.map(item => {
      if (item.id === itemId) {
        return {...item, completed: !item.completed}
      }
      return item;
    })})
  }

  clearPurchased = () => {
    this.setState({...this.state, todoData: this.state.todoData.filter(item => {
      if (!item.completed) return item;
    })})
  }

  render() {
    return (
      <>
      <div>
        <h1>Todo App</h1>
        <Form addTodo={this.addTodo} />
      </div>
      
      <div>
        <h2>Todo List:</h2>
        <TodoList toggleTodo={this.toggleTodo} todoData={this.state.todoData} />
        <button onClick={this.clearPurchased} className="clear-btn">Clear Completed</button>
      </div>
      </>
    )
  }
}
