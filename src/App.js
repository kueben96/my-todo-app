
import React, { Component } from "react";
import {v1 as uuid} from "uuid"; 
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';
import "./components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class App extends Component {
  
  // states
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    completedTasks: []

  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [newItem, ...this.state.items ]
    this.setState({
      items:updatedItems,
      item: '',
      //create new id after submit
      id: uuid(),
      editItem: false
    }, () =>console.log(this.state))
  };
  clearList = () => {
    console.log("clear list")
   this.setState({
     items: []
   })
  };
  handleComplete = id => {
    console.log(`handle complete ${id}`);
    
    //this.state.isCompleted = true; 
    // das brauchen wir für summary
    const todos = [...this.state.items]
    var completedItems = []; 
    const thisItem = {
      id: this.state.id,
      title: this.state.item,
      isCompleted: true
    }
    completedItems = [thisItem, ...this.state.completedTasks]
    console.log(completedItems)

    this.setState({
      completedTasks : completedItems,
      items: todos,
      item: thisItem
      //isCompleted: true
    })
    console.log(this.state.isCompleted)
    
  };

  handleDelete = id => {
    console.log(`handle delete ${id}`);

   
    // only display/remder the items that dont have the id of input parameter
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem)
    //set to filtered items again 
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });

  };

 

  render() {
    
    //console.log(this.state)
    //var countTodo = todos.length;
    var countTodo = this.state.items.length; 
    var countsCompleted = 0;
    //this.items.forEach(item => item.isCompleted === true ? countsCompleted += 1 : countsCompleted);
    return (
      <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className="App-logo" alt="logo" icon={"tasks"} size="6x" />
        <h1>my tasks</h1>
        <div className="overviewComplete">
          <div className="score">
            <FontAwesomeIcon className="score-logo" alt="logo" icon={"th-list"} />
            Total: {countTodo}
          </div>
          <div className="score">
            <FontAwesomeIcon className="score-logo" alt="logo" icon={"smile-beam"} />
            Completed: {countsCompleted}
          </div>

        </div>
      </header>

      <div className="todo-container">
      
       <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} ></TodoInput>
        <TodoList 
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
          >
      </TodoList>
      </div>
     
      <footer className="App-footer">

        <h2>Always stay organized</h2>
      </footer>


    </div>
    );
  }
}

export default App;