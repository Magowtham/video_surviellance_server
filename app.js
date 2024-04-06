process.loadEnvFile();
const express = require("express");
const WebSocket = require("ws");
const app = express();

const fs = require("fs");

const PORT = process.env.PORT || 5000;
const wss = new WebSocket.Server({ port: 8080 });

const videoStream = fs.createWriteStream("video.mp4");

wss.on("listening", () => {
  console.log("websocket server is listening on port: 8080");
});

wss.on("connection", (ws) => {
  console.log("client conected");

  ws.on("message", (data) => {
    videoStream.write(data);
  });

  ws.on("close", () => {
    console.log("client disconnected");
  });
});

app.listen(PORT, () => {
  console.log(`http server running on port: ${PORT}`);
});
