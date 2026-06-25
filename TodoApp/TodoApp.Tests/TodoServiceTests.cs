using TodoApp.Models;
using TodoApp.Services;

namespace TodoApp.Tests
{
    public class TodoServiceTests
    {
        [Fact]
        public void AddTodo_ShouldAddTodoToList()
        {
            var service = new TodoService();

            var todo = new TodoItem
            {
                Title = "Study ASP.NET",
                Description = "Practice Web API",
                Priority = "High",
                Category = "Work"
            };

            service.Add(todo);

            Assert.Single(service.GetAll());
        }
    }
}