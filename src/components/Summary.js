
import React, { Component } from "react";
import "./icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {

    render() {
    const { items, handleTodoView } = this.props;
    
    return (

        <div>
        <h1>Completed Items</h1>
        <div className="summaryContainer">
        {items.map(item => {
            if (item.isCompleted) 
               return <span>{item.title}</span>
            else return <div></div>
        })}
        </div>
        <button onClick={handleTodoView}>Back to Todos</button>
        </div>
    );
  }
}

//{//<div>{isCompleted?'Done':'Still Waiting :('}</div>}//