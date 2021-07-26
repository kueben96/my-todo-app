import React, { Component } from "react";
// hello world
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
     <form onSubmit="handleSubmit">
     <input type="text"
        className="input todo"
        placeholder="Add Todo Item"
        value = {item}
        onChange={handleChange}
        />
    <button 
    //Conditional rendering
        //className={editItem ? "button-edit":"button-add"} 
        className={"button-add"} 
        onClick={handleSubmit}
        disabled={item?false:true}>Add Task</button>
      
     </form>
      );
  }
}