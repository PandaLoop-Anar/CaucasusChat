import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import { Connection } from "./connection.js";
import { Client } from "./modules/clients.js";
import WebSocket, { WebSocketServer } from "ws";
import bodyParser from "body-parser";

const modules = {
  client: Client,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.all("/api/:controller/:method", (req, res) => {
  if (req.params.controller) {
    modules[req.params.controller][req.params.method].call(
      null,
      req,
      res,
      req.body
    );
  }
});

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

///////////////

MongoClient.connect(
  "mongodb+srv://Panda-loop:4MCUjB5azcYTQiZ@cluster0.uvko4zc.mongodb.net/?retryWrites=true&w=majority&authSource=admin",
  (error, client) => {
    if (error) {
      return console.error(error);
    }

    Connection.set(client.db("Caucasus_chat"));

    app.listen(8082, () => {
      console.log("App is running...");
    });

    // Sockets

    const wss = new WebSocketServer({ port: 8088 });

    wss.on("connection", (ws) => {
      ws.on("message", (data) => {
        console.log(`Client has sent us: ${data}`);
        try {
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(data, { binary: false });
            }
          });
        } catch (exception) {
          console.error(exception.message);
        }
      });

      ws.on("close", () => {
        console.log("The client has connected");
      });

      ws.onerror = function () {
        console.log("Some Error occurred");
      };
    });
    console.log("The WebSocket server is running");
  }
);
