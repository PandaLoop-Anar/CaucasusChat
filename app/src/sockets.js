// import { showMessages } from "./index.js";
// const messagesArr = [];

// // Socket
// export const ws = new WebSocket("ws://localhost:8088");
// ws.addEventListener("open", (event) => {
//   console.log("Client connected to server");
// });

// ws.addEventListener("message", (event) => {
//   try {
//     const data = JSON.parse(event.data);
//     console.log("Message from server", data);
//     /////////
//     messagesArr.push(data);
//     // showMessages(messagesArr);
//     console.log(messagesArr);
//     /////////
//   } catch (exception) {
//     console.error(exception.message);
//   }
// });