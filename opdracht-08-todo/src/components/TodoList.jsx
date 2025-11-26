import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Mijn Taken</h2>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
