import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField"; // Fixed typo in component import
import { Todo } from "./model";
import TodoList from "./components/TodoList";

/**
 * App component represents the main application.
 * It manages the state of todos and handles todo addition.
 */
const App: React.FC = () => {
  // State to store the current todo input value
  const [todo, setTodo] = useState<string>("");

  // State to store the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Handles the addition of a new todo item.
   * @param e React form event
   */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the todo input is not empty
    if (todo) {
      // On submit, it will first check if there's even a todo in the input field given to us by the onChange={setTodo}, then only will it run. This is self-evident when you have nothing in the field and you try to press go.
      // Add the new todo to the todos list with a unique ID and mark it as not done
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);

      // Clear the todo input field after adding the todo
      setTodo("");

      // Log the updated todos list
      console.log(todos);
    }
  };

  return (
    <div className="App">
      {/* Application title */}
      <span className="heading">Taskify</span>

      {/* InputField component to add new todos */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {/* Display the list of todos */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
