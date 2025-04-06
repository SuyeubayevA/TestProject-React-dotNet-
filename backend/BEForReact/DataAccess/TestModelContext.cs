using BEForReact.Models;
using Microsoft.EntityFrameworkCore;

namespace BEForReact.DataAccess;

public class TestModelContext: DbContext
{
    public TestModelContext(DbContextOptions<TestModelContext> options): base(options)
    {
        
    }

    public DbSet<TestModel> TestModels { get; set; }
}