import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="What to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-80 p-2 rounded-l-md outline-none"
      />

      <button
        onClick={addTask}
        className="bg-blue-400 hover:bg-blue-500 text-white px-4 rounded-r-md text-xl"
      >
        +
      </button>
    </div>
  );
};

export default TodoForm;
