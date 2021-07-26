import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, completeList, handleDelete, handleEdit, handleComplete } = this.props;
    return (
      
      <div className="todo-list">
       {items.map(item => {return(
         <TodoItem
          key={item.id}
          title={item.title}
          //isCompleted={false}
          handleDelete={()=>handleDelete(item.id)}
          handleEdit = {()=> handleEdit(item.id)}
          handleComplete={()=>handleComplete(item.id)}
          ></TodoItem>
       )})}
       <button className="button-remove-all" onClick={clearList}>Delete All</button>
       <button className="button-complete-all" onClick={completeList}>Complete All</button>
      </div>
    );
  }
}