
import React, { Component } from "react";
import "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {

   state = {checked: false, isCompleted: false}

   handleCheckBoxChange = e => this.setState({checked: e.target.checked, isCompleted: e.target.checked})
  render() {

    //const { title, isCompleted, handleDelete, handleEdit, handleComplete } = this.props;
    const { title, handleDelete, handleEdit, handleComplete } = this.props;
    
   
    //this.isCompleted = false; 
    return (


        <div className="todo" style={{ textDecoration: this.state.isCompleted ? "line-through" : "" }}>
        <div className="check-todo">
        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckBoxChange}></input>   
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