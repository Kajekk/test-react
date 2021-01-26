import React from "react";

const Todo = ({todo}) => (
    <li className="todo-item">
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span>
      {todo.content}
    </span>
    </li>
)

export default Todo