import React from "react";
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";

 interface Props {
  todos: Todo[]; // Current todo input value
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update todo input value

}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos && todos.map((todo) => ( // I dislike this approach because it involves excessive prop passing and unnecessary abstraction.

     <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
