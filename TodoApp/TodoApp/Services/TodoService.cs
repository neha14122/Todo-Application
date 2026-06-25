using System.Xml.Linq;
using TodoApp.Models;

namespace TodoApp.Services
{
    public class TodoService : ITodoService
    {
        private static readonly List<TodoItem> _todos = new();
        private static int _nextId = 1;
        public TodoItem Add(TodoItem todo)
        {
            todo.Id = _nextId++;
            todo.CreatedDate = DateTime.Now;

            _todos.Add(todo);

            return todo;
        }

        public bool Delete(int id)
        {
            var todo = GetById(id);

            if (todo == null)
                return false;

            _todos.Remove(todo);

            return true;

        }

        public List<TodoItem> GetAll()
        {
            return _todos;
        }

        public List<TodoItem> GetByCategory(string category)
        {
            return _todos
                .Where(t => t.Category.Equals(category, StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        public TodoItem? GetById(int id)
        {
            return _todos.FirstOrDefault(t => t.Id == id);
        }

        public List<TodoItem> GetByPriority(string priority)
        {
            return _todos
            .Where(t => t.Priority.Equals(priority, StringComparison.OrdinalIgnoreCase))
            .ToList();
        }

        public List<TodoItem> Search(string keyword)
        {
            return _todos
                .Where(t =>
                t.Title.Contains(keyword, StringComparison.OrdinalIgnoreCase) ||
                (t.Description != null &&
                t.Description.Contains(keyword, StringComparison.OrdinalIgnoreCase)))
                .ToList();
        }

        public bool Update(int id, TodoItem todo)
        {
            var existingTodo = GetById(id);

            if (existingTodo == null)
                return false;

            existingTodo.Title = todo.Title;
            existingTodo.Description = todo.Description;
            existingTodo.Priority = todo.Priority;
            existingTodo.Category = todo.Category;
            existingTodo.IsCompleted = todo.IsCompleted;

            return true;
        }
    }
}
