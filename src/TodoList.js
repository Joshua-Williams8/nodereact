import React from 'react';
import Todo from './Todo'
//We put the attribute element name in this todolist input?
//If it's inside of curly bracks it means it's Js code?
//Since we not using a ID key React is going to update every single todo in the list?
//Since we only want it to re-render the ones that change we need to add a key attribute, and give it a unique value, in this case we using our todo name since they're all different.
//Each time we have
//Since we are calling an object now we are going to use different elements with properties

export default function TodoList({todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
    })
  )
}
