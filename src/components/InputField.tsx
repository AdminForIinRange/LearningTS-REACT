import React, { useRef } from "react";
import "./styles.css";
import { InputFieldProps } from "../model";

// Interface for props passed to the InputField component

/**
 * InputField component represents the input field for adding new todos.
 * It receives todo value, function to update todo value, and function to handle todo addition as props.
 */
const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {/* Input field for entering new todo */}
      <input
        ref={inputRef}
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
