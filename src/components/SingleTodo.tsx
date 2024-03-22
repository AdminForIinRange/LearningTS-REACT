import React from "react";
import { SingleTodoProps } from "../model";
import {AiFillEdit, AiFillDelete,  } from "react-icons/ai"
import {MdDone } from "react-icons/md"
import "./styles.css";
const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
    const handleDone = (id) =>{
        
    }
  return (
    <form className="todos__single">
      <span className="todos__single--text"> {todo.todo}</span>

      <div>
        <span className="icon">
            <AiFillEdit />
        </span>
        <span className="icon">
        <AiFillDelete />
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
        <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
