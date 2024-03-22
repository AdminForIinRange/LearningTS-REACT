import React from "react";
import "./styles.css";

// Interface for props passed to the InputField component
interface Props {
  todo: string; // Current todo input value
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to update todo input value
  handleAdd: (e: React.FormEvent) => void; // Function to handle todo addition
}

/**
 * InputField component represents the input field for adding new todos.
 * It receives todo value, function to update todo value, and function to handle todo addition as props.
 */
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      {/* Input field for entering new todo */}
      <input
        type="text"
        placeholder="Enter A Task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {/* Submit button to add new todo */}
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
