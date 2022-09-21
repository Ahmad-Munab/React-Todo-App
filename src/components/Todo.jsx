import React from "react";
import { FaWindowClose } from "react-icons/fa";

function Todo({ todo, toggleTodo, deleteTodo }) {
  function handleCheckbox() {
    toggleTodo(todo.id);
  }

  function handleDeleting() {
    deleteTodo(todo.id);
  }

  return (
    <div className="form-check hstack">
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          value="option1"
          defaultChecked={todo.completed}
          onChange={handleCheckbox}
        />
        <label
          style={{
            textDecoration: todo.completed && "line-through",
            textDecorationColor: todo.completed && "rgba(33,37,41,1)",
            textDecorationThickness: todo.completed && "2.5px",
            textDecorationStyle: todo.completed && "solid",
          }}
        >
          <b>{todo.task}</b>
        </label>
      </div>
      <button className="btn btn-sm btn-danger" onClick={handleDeleting}>
        <FaWindowClose className="icon" />
      </button>
    </div>
  );
}

export default Todo;
