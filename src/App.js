import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos   //es lo mismo que 'todos: todos'
    }
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(tarea){
    this.setState({
      todos: [...this.state.todos, tarea]
    })
  }

  handleRemoveTarea(index){
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    })
  }

  render() {
    const tareas = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTarea.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
              Tasks
              
              <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </a>
          <a className="navbar-brand mx-auto" href="#">
            <div id="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TaskForm onAddTarea={this.handleAddTarea} />
            </div>
            <div className="col-md-9">
              <div className="row">
                {tareas}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
