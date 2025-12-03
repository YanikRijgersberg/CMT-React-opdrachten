import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-r from-blue-600 to-blue-900">
      <h1 className="text-white text-4xl font-bold mb-10">
        &lt;Jouw naam&gt; To Do List
      </h1>

      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
