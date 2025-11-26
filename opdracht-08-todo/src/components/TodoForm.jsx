import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task
    };

    setTodos([...todos, newTodo]);

    setTask(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nieuwe taak:
        <input 
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Typ een taak..."
        />
      </label>

      <button type="submit">Toevoegen</button>
    </form>
  );
};

export default TodoForm;
