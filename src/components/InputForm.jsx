import {useRef } from "react"

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

    console.log(task.length)
    
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
      <button className="btn btn-primary" onClick={handleSubmition}>Add</button>
    </form>
  )
}

export default InputForm