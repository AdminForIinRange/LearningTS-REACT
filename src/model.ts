export interface Todo {
    id: number,
    todo: string,
    isDone: boolean,
}


export interface TodoListProps {
    todos: Todo[]; // Current todo input value
    setTodos: React.Dispatch<React.SetStateAction<string>>; // Function to update todo input value
  
}

export interface InputFieldProps {
    todo: string; // Current todo input value
    setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to update todo input value
    handleAdd: (e: React.FormEvent) => void; // Function to handle todo addition
  }
  