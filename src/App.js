import "./App.css"
import { useEffect, useState } from 'react';
import  InputForm  from './components/InputForm';
import   TodoList   from './components/TodoList';

const LOACL_STORAGE_KEY = "todos"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOACL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    if (todos.length > 0)  localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function deleteTodo(id) {
    if (todos.length === 1) {
      localStorage.setItem("todos", JSON.stringify([]))
      setTodos([])
    }else setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="container-md ">
      <h1 className="title">Todo List</h1>
      <InputForm todos = {todos} setTodos = {setTodos}/>
      <TodoList todos={ todos } toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
