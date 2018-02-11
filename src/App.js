import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './cli.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Biography/>
      <GroceryList/>
      <ToDoList/>
      <Time/>
        <p> Hello World</p>
      </div>
    );
  }
}

class Biography extends React.Component{
  render(){
    return(
    <div>
      <img src = "http://www.thinknice.com/wp-content/uploads/2015/02/Funny-horse.jpg"/>
      <p> Name: Ilya Vinarev</p> 
      <p> Skill: Reading</p> 
      </div>
    );
  }
}

class Time extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render(){

    return(
      <p className="App-clock">
      The time is {this.state.time}.
    </p>
    );
  }
}

class GroceryList extends React.Component{
  render(){
    const grocs = ['sugar', 'milk', 'mustard'];
    return(
    <div>
      <ul>
 {grocs.map(groc => <li>{groc}</li>)}
</ul>
      </div>
    );
  }
}


class ToDoList extends React.Component{
  constructor(){
    super();
    this.state = {
        todoItems: []
    }
    
}

handleClick() {
    const todoItems = this.state.todoItems;
    todoItems.push(this.textbox.value);

    this.setState({
        todoItems: todoItems
    });
}




render() {
    return (
        <div className="App"> 

        <input
        type="txt"
        ref={textbox => this.textbox = textbox}
        />

        <button onClick={this.handleClick.bind(this)}>
        Add Item
        </button>
        <p>Todo Items</p>
        <ul>
            {this.state.todoItems.map(item => <li>{item}</li>)}
        </ul>
        </div>
    );
}
}
export default App;
