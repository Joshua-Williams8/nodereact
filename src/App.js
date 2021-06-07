import './App.css';
//The way react works is that it manages the state of the app, and when it changes it re-renders it for us.
//We want to store all of our todos inside of a state so we can render them each time we change a todo, add a todo, remove a todo.
//Inorder to use state in a function component we need ot use the { useState } hook.
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  //We're setting the useState to an empty array so we can add to it?
  //This a prop of App?
  const  [todos,setTodos] = useState([`Todo 1`,`Todo 2`])
  //The [todos, setTodos] we are destructoring the useState array, into 2 variables
  //The 1st variable are the todos
  //The 1nd variable is the function we are going to call.
  //The firs time our app loads it's going to be an empty array of all the Todos
  return (
    //In order to return more than one thing you need to wrap it inside of an empty element
    <>
      <TodoList todos={todos} />
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear Complete Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
