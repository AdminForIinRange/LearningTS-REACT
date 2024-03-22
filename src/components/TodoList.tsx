import React from "react";
import { TodoListProps } from "../model";
import "./styles.css";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos && todos.map((t) => (
        <li key={t.id}>
          {t.todo}
          {t.isDone}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
