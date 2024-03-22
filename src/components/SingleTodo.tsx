import React from "react";
import { SingleTodoProps } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
   
    ));
    console.log(todos)
  };

  return (
    <div className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
