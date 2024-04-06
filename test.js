const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080"); // Replace 'localhost:8080' with your server's URL

ws.on("open", function open() {
  console.log("Connected to WebSocket server");

  // Sending a message to the server once connected
  ws.send("Hello, server!");
});

ws.on("message", function incoming(message) {
  console.log("Received message from server:");
});

ws.on("close", function close() {
  console.log("Disconnected from WebSocket server");
});

// Handling errors
ws.on("error", function error(error) {
  console.error("WebSocket encountered error:", error);
});
