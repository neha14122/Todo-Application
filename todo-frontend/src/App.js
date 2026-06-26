import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  searchTodos,
  getByCategory,
  getByPriority
} from "./services/todoApi";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Personal");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  const loadTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    try {
      const todo = {
        title,
        description,
        priority,
        category,
        isCompleted: false
      };

      if (editingId) {
        await updateTodo(editingId, todo);
        setEditingId(null);
      } else {
        await addTodo(todo);
      }
      await loadTodos();

      setErrorMessage("");

      setTitle("");
      setDescription("");
      setPriority("Low");
      setCategory("Personal");
      setSearchKeyword("");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Something went wrong.");
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      await loadTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTodo = (todo) => {
    setEditingId(todo.id);

    setTitle(todo.title);
    setDescription(todo.description);
    setPriority(todo.priority);
    setCategory(todo.category);
  };

  const handleSearch = async () => {
    try {
      if (searchKeyword.trim() === "") {
        setErrorMessage("Please enter a keyword to search.");
        return;
      }

      setErrorMessage("");
      const response = await searchTodos(searchKeyword);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryFilter = async (category) => {
    try {
      const response = await getByCategory(category);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePriorityFilter = async (priority) => {
    try {
      const response = await getByPriority(priority);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo Application</h1>

      {errorMessage && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {errorMessage}
        </p>
      )}

      {/* Search Section */}

      <h2>Search Todos</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <button
        onClick={handleSearch}
        style={{ marginLeft: "10px" }}
      >
        Search
      </button>

      <button
        onClick={loadTodos}
        style={{ marginLeft: "10px" }}
      >
        Show All
      </button>

      <hr />

      {/* Category Filters */}

      <h2>Filter By Category</h2>

      <button onClick={loadTodos}>
        All Todos
      </button>

      <button
        onClick={() => handleCategoryFilter("Work")}
        style={{ marginLeft: "10px" }}
      >
        View Work Todos
      </button>

      <button
        onClick={() => handleCategoryFilter("Personal")}
        style={{ marginLeft: "10px" }}
      >
        View Personal Todos
      </button>

      <hr />

      {/* Priority Filters */}

      <h2>Filter By Priority</h2>

      <button onClick={() => handlePriorityFilter("High")}>
        High Priority
      </button>

      <button
        onClick={() => handlePriorityFilter("Medium")}
        style={{ marginLeft: "10px" }}
      >
        Medium Priority
      </button>

      <button
        onClick={() => handlePriorityFilter("Low")}
        style={{ marginLeft: "10px" }}
      >
        Low Priority
      </button>

      <button
        onClick={loadTodos}
        style={{ marginLeft: "10px" }}
      >
        Show All
      </button>

      <hr />
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        priority={priority}
        setPriority={setPriority}
        category={category}
        setCategory={setCategory}
        editingId={editingId}
        onSubmit={handleAddTodo}
      />
      <hr />
      <h2>Todo List</h2>

      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;