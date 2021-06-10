using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsersAsync()
        {
            return Ok(await _context.AppUsers.ToListAsync());
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserAsync(int id)
        {
            return Ok(await _context.AppUsers.FindAsync(id));
        }
    }
}