// Socket
export const ws = new WebSocket("ws://localhost:8088");
ws.addEventListener("open", (event) => {
  console.log("Client connected to server");
});
// following code was moved in app-chat-page
