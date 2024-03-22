import React from "react";
import { TodoListProps } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos && todos.map((todo) => ( // I dislike this approach because it involves excessive prop passing and unnecessary abstraction.

     <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
