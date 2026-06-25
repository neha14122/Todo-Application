using TodoApp.Models;

namespace TodoApp.Services
{
    public interface ITodoService
    {
        List<TodoItem> GetAll();

        TodoItem? GetById(int id);

        TodoItem Add(TodoItem todo);

        bool Update(int id, TodoItem todo);

        bool Delete(int id);

        List<TodoItem> Search(string keyword);

        List<TodoItem> GetByCategory(string category);

        List<TodoItem> GetByPriority(string priority);
    }
}
