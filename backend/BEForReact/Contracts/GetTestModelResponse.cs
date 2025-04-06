namespace BEForReact.Contracts;

public class GetTestModelResponse()
{
    public List<TestModelDto> ModelDtos { get; set; }

    public GetTestModelResponse(List<TestModelDto> items) : this()
    {
        ModelDtos = items;
    }
}