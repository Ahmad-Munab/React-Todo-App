import React from "react";

function Todo({ todo, toggleTodo, deleteTodo }) {
  function handleCheckbox() {
    toggleTodo(todo.id)
  }

  function handleDeleting() {
    deleteTodo(todo.id)
  }

  return (
    <div className="form-check ">
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          value="option1"
          defaultChecked={todo.completed}
          onChange={handleCheckbox} />
        <label style={{ textDecoration: todo.completed && "line-through" }}>
          {todo.task}
        </label>
      </div>
      <button className="btn btn-sm btn-danger" onClick={handleDeleting}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
