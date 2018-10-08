import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[]
    }
  }

  componentDidMount() {
    console.log("---componentDidMount called---");
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      success:(data)=>{
        this.setState({
          todos:data
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Ajax Demo</h1>
        <hr/>
        <ul>
          {
            this.state.todos.map((todo) => {
              return <li key={todo.id}>{todo.title} - {todo.completed}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
