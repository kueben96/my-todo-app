
import React, { Component } from "react";
import {v1 as uuid} from "uuid"; 
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Summary from "./components/Summary";
import './App.css';
import "./components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class App extends Component {
  
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    editingItemID: "",
    itemsDoneCounter: 0,
    showSummary: false
    //completedTasks: []
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
      title: this.state.item,
      isCompleted: false
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
 
  handleDelete = id => {
    console.log(`handle delete ${id}`);
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleComplete = (id) => {
    console.log(`handle complete ${id}`);
    const todos = [...this.state.items]
    var itemsDone = this.state.itemsDoneCounter 

    var index = todos.map(function(todo) { return todo.id; }).indexOf(id);
    console.log(index);
    todos[index].isCompleted = !todos[index].isCompleted;
    todos[index].isCompleted ? itemsDone +=1: itemsDone -=1;
    
    this.setState({
      items: todos,
      itemsDoneCounter: itemsDone
    })
  };
  completeAll = () => {
    var todos = [...this.state.items]
    todos.forEach((todo) => {
      var id = todo.id;
      this.handleComplete(id)
    } )
  }

  handleEditSubmit = e =>{
    e.preventDefault();
    const todos = [...this.state.items]
    var index = todos.map(function(todo) { return todo.id; }).indexOf(this.state.editingItemID);
    console.log("Indx of Editing Item Id")
    console.log(index)
    todos[index].title = this.state.item
    this.setState({
      editItem: false,
      editingItemID: "",
      item: "",
      items: todos
    })
  }
  handleEdit = id => {
    console.log(`handle edit ${id}`);
    const todos = [...this.state.items]
    var index = todos.map(function(todo) { return todo.id; }).indexOf(id);
    console.log(index)
    //const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);
    console.log("selectedItem");
    console.log(selectedItem)
       
    this.setState({
      item: todos[index].title,
      editingItemID: id,
      //items: todos,
      editItem: true 
    });
  };

  getSummary = () => {
    console.log("in get summary")
    this.setState({
      showSummary: true
    })
  };
  
  render() {
    
    //console.log(this.state)
    //var countTodo = todos.length;
    var countTodo = this.state.items.length; 
    var countsCompleted = this.state.itemsDoneCounter;
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

      {!this.state.showSummary ?
        <div className="todo-container">
      
       <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} handleEditSubmit={this.handleEditSubmit} completeAll={this.completeAll}></TodoInput>
        <TodoList 
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
          completeAll={this.completeAll}
          >
      </TodoList>
      </div>
       : <Summary items={this.state.items}/>}
      
     
      <footer className="App-footer">

        <h2>Always stay organized</h2>
      </footer>

    </div>
    );
  }
}

export default App;