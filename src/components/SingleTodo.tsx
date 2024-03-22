import React from "react";
import {Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update todo input value
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    
    const handleDone = (id: number) => {
      
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };
    
    
  return (
    <div className="todos__single">
      {/* Apply strike-through style to the todo text if it is marked as done */}
      {!todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
      <div>
        {/* Icons for editing, deleting, and marking the todo as done */}
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
