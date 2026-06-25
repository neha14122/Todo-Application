function TodoForm({
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  category,
  setCategory,
  editingId,
  onSubmit
}) {
  return (
    <>
      {editingId && <h3>Editing Todo</h3>}

      <h2>{editingId ? "Update Todo" : "Add New Todo"}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <br /><br />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Work</option>
        <option>Personal</option>
      </select>

      <br /><br />

      <button onClick={onSubmit}>
        {editingId ? "Update Todo" : "Add Todo"}
      </button>
    </>
  );
}

export default TodoForm;