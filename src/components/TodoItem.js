
import React, { Component } from "react";
import "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {

    render() {
    const { title, isCompleted, handleDelete, handleEdit, handleComplete } = this.props;
    
    return (
        <div className="todo" style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        <div className="check-todo">
        <input type="checkbox" checked= {isCompleted ? true: false} onChange={() => handleComplete()}></input>   
         <span>{title}</span>
        </div>
      <div>
        <button className="button" onClick={() => handleEdit()}><FontAwesomeIcon alt="check" icon={"edit"} /></button>
        <button className="button" onClick={() => handleDelete()}><FontAwesomeIcon alt="check" icon={"trash-alt"} /></button>
      </div>
        </div>
    );
  }
}