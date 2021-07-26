
import React, { Component } from "react";
import "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {

    render() {
    const { title, isCompleted } = this.props;
    
    return (

        <div>
        <h1>Summary</h1>
        <div className="summaryContainer">
            <div>{title}</div>
            <div>{isCompleted?'Done':'Still Waiting :('}</div>
        </div>
        </div>
    );
  }
}