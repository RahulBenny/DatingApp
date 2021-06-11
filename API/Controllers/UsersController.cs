using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UsersController : BaseController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetUsersAsync()
        {
            return Ok(await _context.AppUsers.ToListAsync());
        }


        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserAsync(int id)
        {
            return Ok(await _context.AppUsers.FindAsync(id));
        }
    }
}