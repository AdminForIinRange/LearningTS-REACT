import React from 'react'
import { Todo } from "../model";
import "./styles.css"

interface Props {
  todos: string; // Current todo input value
  setTodos: React.Dispatch<React.SetStateAction<string>>; // Function to update todo input value

}

const TodoList : React.FC<Props> = ( todos, setTodos, ) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList