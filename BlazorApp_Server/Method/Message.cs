using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorApp_Server
{
    public static class Message
    {
        [JSInvokable]
        public static Task GetMessage()
        {
            var message = "Hello Blazor from C#";
            return Task.FromResult(message);
        }
    }
}