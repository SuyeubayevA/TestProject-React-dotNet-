namespace BEForReact.Contracts;

public record GetTestModelRequest(string? Search, string? OrderBy, string? SortOrder, bool IsActive = true);