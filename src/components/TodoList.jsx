import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}

      <p className="noTodos">
        {todos.length === 0
          ? "No todos to show"
          : todos.filter((todo) => todo.completed === false).length}
        {todos.length !== 0 ? " left to do" : null}
      </p>
    </div>
  );
};

export default TodoList;
