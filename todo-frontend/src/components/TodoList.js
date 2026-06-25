function TodoList({ todos, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <strong>{todo.title}</strong>
          {" - "}
          {todo.description}
          {" | "}
          Priority: {todo.priority}
          {" | "}
          Category: {todo.category}

          <button
            onClick={() => onEdit(todo)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;