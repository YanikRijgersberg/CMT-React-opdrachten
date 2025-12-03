const TodoList = ({ todos }) => {
  return (
    <div className="mt-8 space-y-4 w-80">
      {todos.map((task, index) => (
        <div
          key={index}
          className="bg-white flex items-center justify-between p-2 rounded-md shadow"
        >
          <span className="text-gray-800 font-medium">{task}</span>

          <div className="flex items-center gap-2">
            <button className="bg-green-400 text-white px-2 py-1 rounded">
              ✔
            </button>
            <button className="bg-blue-400 text-white px-2 py-1 rounded">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
