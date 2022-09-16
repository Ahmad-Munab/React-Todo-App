import React from 'react'
import Todo from "./Todo"

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todos">
      { todos.map(todo => {
        return <Todo key={todo.id} todo={ todo } todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      }) }
      
      <p className="noTodos">{todos.filter(todo => todo.completed === false).length} left to do</p>
    </div>
  )
}

export default TodoList