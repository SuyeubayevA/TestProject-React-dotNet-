using System.Linq.Expressions;
using BEForReact.Contracts;
using BEForReact.DataAccess;
using BEForReact.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BEForReact.Controllers;

[ApiController]
[Route("[controller]")]
public class TestModelController : ControllerBase
{
    private readonly TestModelContext _context;

    public TestModelController(TestModelContext context)
    {
        _context = context;
    }
    // GET
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery]GetTestModelRequest request, CancellationToken ct)
    {
        var query = _context.TestModels.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            var search = request.Search.ToLower();
            query = query.Where(model => model.Name.ToLower().Contains(search));
        }
        
        query = query.Where(model => model.IsActive == request.IsActive);

        Expression<Func<TestModel, object>> selectorKey = request.OrderBy?.ToLower() switch
        {
            "started" => model => model.StartDate,
            "name" => model => model.Name,
            "created" => model => model.CreatedAt,
            _ => model => model.Id
        };
        
        query = request.SortOrder == "desc" ? query.OrderByDescending(selectorKey) : query.OrderBy(selectorKey);
        
        var modelDtos = await query
            .Select(m => new TestModelDto(m.Id, m.Name, m.Description, m.IsActive, m.StartDate, m.CreatedAt))
            .ToListAsync(ct);
        
        return Ok(new GetTestModelResponse(modelDtos));
    }
    
    // POST
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateTestModelRequest request, CancellationToken ct)
    {
        var testModel = new TestModel(request.Name, request.Description, request.DateStarted, request.IsActive);
        
        await _context.TestModels.AddAsync(testModel, ct);
        await _context.SaveChangesAsync(ct);
        
        return Ok();
    }
}