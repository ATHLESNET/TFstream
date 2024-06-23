const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");

const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8880" });

server.on("connection", (ws) => {
  console.log("WS: Main server connected to a CLIENT");

  ws.on("message", (message) => {
    server.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`${message}`);
      }
    });
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

const panel = require("./routes/panel");
const track = require("./routes/graphics/track");
const sendLJ = require("./routes/sender/LJ");
const LJ = require("./routes/graphics/LJ");
const sendTJ = require("./routes/sender/TJ");
const TJ = require("./routes/graphics/TJ");

app.use("/view/TJ", TJ);
app.use("/send/TJ", sendTJ);
app.use("/view/LJ", LJ);
app.use("/send/LJ", sendLJ);
app.use("/view/track", track);
app.use("/panel", panel);

app.listen(2087);

