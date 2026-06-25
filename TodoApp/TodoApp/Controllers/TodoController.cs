using Microsoft.AspNetCore.Mvc;
using TodoApp.Models;
using TodoApp.Services;

namespace TodoApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetAll()
        {
                var todos = _todoService.GetAll();
                return Ok(todos);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetById(int id)
        {
                var todo = _todoService.GetById(id);
                if (todo == null)
                    return NotFound("Todo not found");

                return Ok(todo);
        }

        [HttpPost]
        public IActionResult Add(TodoItem todo)
        {
             if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var createdTodo = _todoService.Add(todo);

                return CreatedAtAction(
                    nameof(GetById),
                    new { id = createdTodo.Id },
                    createdTodo);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, TodoItem todo)
        {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var updated = _todoService.Update(id, todo);

                if (!updated)
                    return NotFound("Todo not found");

                return Ok("Todo updated successfully");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
           
                var deleted = _todoService.Delete(id);

                if (!deleted)
                    return NotFound("Todo not found");

                return Ok("Todo deleted successfully");
           
        }

        [HttpGet("search/{keyword}")]
        public IActionResult Search(string keyword)
        {
                var results = _todoService.Search(keyword);

                return Ok(results);
        }

        [HttpGet("category/{category}")]
        public IActionResult GetByCategory(string category)
        {
                var todos = _todoService.GetByCategory(category);

                return Ok(todos);
        }

        [HttpGet("priority/{priority}")]
        public IActionResult GetByPriority(string priority)
        {
                var todos = _todoService.GetByPriority(priority);
                return Ok(todos);
        }
    }
}
