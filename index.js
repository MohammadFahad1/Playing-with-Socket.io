const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

app = express();
server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log("Error from handler: ", err);
  next();
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
