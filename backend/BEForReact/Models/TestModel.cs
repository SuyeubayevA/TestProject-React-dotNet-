namespace BEForReact.Models;

public class TestModel(string name, string description, DateTime startDate, bool isActive)
{
    public int Id { get; set; }
    public string Name { get; set; } = name;
    public string Description { get; set; } = description;
    public bool IsActive { get; set; } = isActive;
    public DateTime StartDate { get; set; } = startDate;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}