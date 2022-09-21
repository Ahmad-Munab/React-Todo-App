import {useRef } from "react"
import {  } from "react-icons/";

const InputForm = ({ todos, setTodos }) => {
  const input = useRef()

  function objection() {
    alert("Not a valid task")
    input.current.value = null
  }

  function handleSubmition(e) {
    e.preventDefault()
    const task = input.current.value

    if (task === "" || task.length > 100) return objection()
    
    setTodos(prevTodos => {
      return [...prevTodos, {id: Date.now(), task: task, completed: false}]
    })
    input.current.value = null
  }

  return (
    <form  className="input_section">
      <input
        autoFocus
        className="form-control" 
        type="text"
        placeholder="Enter task"
        ref = {input}
       />
      <button className="btn btn-primary" onClick={handleSubmition}><b>Add</b></button>
    </form>
  )
}

export default InputForm