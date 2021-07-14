
import React from "react";
import './App.css';
import "./components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Link for editing
//https://dev.to/joelynn/how-to-build-a-react-crud-todo-app-edit-todo-46g6

//for creating components it doesnt matter if you use const Form = ()=>{} or function Form ()}

function Todo({ todo, index, completeTodo, removeTodo, editTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <button className="button" onClick={() => completeTodo(index)}><FontAwesomeIcon alt="check" icon={"check-circle"} /></button>
      {todo.text}
      <div>

        <button className="button" onClick={() => editTodo(index)}><FontAwesomeIcon alt="check" icon={"edit"} /></button>
        <button className="button" onClick={() => removeTodo(index)}><FontAwesomeIcon alt="check" icon={"trash-alt"} /></button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  //set value gleich. gucken, wie man value aus dem todo-item
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  // mal gucken was wir damit machen 
  const [isEditing, setIsEditing] = React.useState(false);
  const handleEdit = ()=> {
    //*******HIER: WAS PASSIERT NACHDEM GEKLICKT WURDE?  */
    console.log("in Edit Mode");
    console.log("isEditing",isEditing);
    console.log(value)
    
      //editTodo(value)
     //setValue(value);
     //setIsEditing(false)
  }

  return (
    
    <form onSubmit={isEditing? handleSubmit: handleEdit}>
      <input type="text"
        className="input todo"
        value={value}
        onChange={e => setValue(e.target.value)} />
      <button className="button-add" onClick={handleSubmit}>Add</button>
    </form>
  );
}


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      isEditing: false
    }
  ]);

  //console.log(todos)

  var countTodo = todos.length;
  var countsCompleted = 0;
  todos.forEach(todo => todo.isCompleted === true ? countsCompleted += 1 : countsCompleted);


  const addTodo = text => {
    //const newTodos = [...todos, { text }];
    const newTodos = [{ text },...todos ];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const editTodo = (index) => {
    console.log("in const editTodo");
    console.log("new todo index");
    console.log(index);
    const newTodos = [...todos];
    var text  = newTodos[index].text;
    console.log(text);
    newTodos[index].isEditing = true;
    console.log(newTodos[index].isEditing);
    setTodos(newTodos);
    //setTodos(newTodos);
    //newTodos[index].isEditing = false;
    //console.log("New Todos");
   // console.log(newTodos);
  };


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


        <TodoForm addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          ))}

        </div>
      </div>
      <footer className="App-footer">

        <h2>Always stay organized</h2>
      </footer>


    </div>
  );
}

export default App;
