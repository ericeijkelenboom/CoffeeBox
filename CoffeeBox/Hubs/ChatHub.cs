using CoffeeBox.Models;
using SignalR.Hubs;

namespace CoffeeBox.Hubs
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void Send(Message message)
        {
            Clients.addMessage(message);
        }
    }
}