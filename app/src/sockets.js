// import { showMessages } from "./pages/app-chat-page.js";

// import { RestClient } from "./common/rest-client.js";

export const messagesArrSocket = [];

// Socket
export const ws = new WebSocket("ws://localhost:8088");
ws.addEventListener("open", (event) => {
  console.log("Client connected to server");
});

// ws.addEventListener("message", (event) => {
//   try {
//     const data = JSON.parse(event.data);
//     console.log("Message from server", data);
//     /////////
//     // messagesArrSocket.push(data);
//     // Saving in database
//     RestClient.call("/api/client/saveMessage", data)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => console.log(error));

//     // showMessages(messagesArrSocket);
//     // console.log(messagesArrSocket);
//     /////////
//   } catch (exception) {
//     console.error(exception.message);
//   }
// });
