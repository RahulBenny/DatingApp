using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Password { get; set; }

        [Required]
        public string UserName { get; set; }
    }
}

