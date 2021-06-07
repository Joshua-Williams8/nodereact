import React from 'react';
import Todo from './Todo'
//We put the attribute element name in this todolist input?
//If it's inside of curly bracks it means it's Js code?

export default function TodoList({todos}) {
  return (
    <div>
      {todos.length}
    </div>
  )
}
