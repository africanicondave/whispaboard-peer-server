const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

const server = require("http").createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs",
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

// Optional: Home route
app.get("/", (req, res) => {
  res.send("✅ WhispaBoard PeerJS server is live!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ PeerJS server running at port ${PORT}`);
});
