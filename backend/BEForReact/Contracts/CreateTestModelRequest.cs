namespace BEForReact.Contracts;

public record CreateTestModelRequest(string Name, string Description, bool IsActive, DateTime DateStarted = default);