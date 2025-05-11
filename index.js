const express = require("express");
const { createServer } = require("node:http");

app = express();
server = createServer(app);

app.get("/", (req, res) => {
  res.send("Welcome to the playing with socket.io!");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log("Error from handler: ", err);
  next();
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
