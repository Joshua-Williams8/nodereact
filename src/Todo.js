import React from "react";

//Notice all this default info to use this function we are adding.
//We are passing out todos so we can display each one
//Test the check box on the todo out by checking the value on the object array, to true instead of false.

export default function Todo({todo, toggleTodo}){
  function handleTodoClick(){
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>

        {todo.name}
      </label>
    </div>
  )
}
