import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, completeAll, handleDelete, handleEdit, handleComplete, getSummary } = this.props;
    return (
      
      <div className="todo-list">
       {items.map(item => {return(
         <TodoItem
          key={item.id}
          title={item.title}
          isCompleted={item.isCompleted}
          handleDelete={()=>handleDelete(item.id)}
          handleEdit = {()=> handleEdit(item.id)}
          handleComplete={()=>handleComplete(item.id)}
          ></TodoItem>
       )})}
       <button className="button-remove-all" onClick={clearList}>Delete All</button>
       <button className="button-complete-all" onClick={completeAll}>Complete All</button>
       <button className="button-summary" onClick={getSummary}>Get Summary</button>
      </div>
    );
  }
}