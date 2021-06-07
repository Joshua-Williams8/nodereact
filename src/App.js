import './App.css';
//The way react works is that it manages the state of the app, and when it changes it re-renders it for us.
//We want to store all of our todos inside of a state so we can render them each time we change a todo, add a todo, remove a todo.
//Inorder to use state in a function component we need ot use the { useState } hook.
//Now we are going to add the useRef Hook also.
//This allows us to reference elements inside of our HTML in this case we were using it for the input?
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  //We're setting the useState to an empty array so we can add to it?
  //This a prop of App?
  //Were changing the array so we can use IDs properly.
  //instead of = useState([`Todo 1`,`Todo 2`])
  //We have what is currently in there.
  //Now we are removing our default object todo. which was:
  //= useState([{id: 1, name:`Todo 1`, complete: false}])
  //By default we don't want to have any Todos at all in our App when it starts up.

  const  [todos,setTodos] = useState([])
  //The [todos, setTodos] we are destructoring the useState array, into 2 variables
  //The 1st variable are the todos
  //The 1nd variable is the function we are going to call.
  //The firs time our app loads it's going to be an empty array of all the Todos
  //This const below allows us to access the useRef Hook and get values stored in our HTML, the const name is use in a ref attr tag on an input...
  const todoNameRef = useRef()

  function handleAddTodo(e){
    //.current is what ever element we are referencing
    const name = todoNameRef.current.value
    if (name === '') {
      return
    }
    setTodos(prevTodos =>{
      return [...prevTodos, {id: 1, name: name , complete: false}]
    })
    //console.log(name)
    //Line below clears the input bar
    todoNameRef.current.value = null


  }
  return (
    //In order to return more than one thing you need to wrap it inside of an empty element
    //Adding a onclick listener to call a new function for handling todos
//To call the ref for HTML elements you need a ref attribute.

    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
