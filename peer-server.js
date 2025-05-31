const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

const server = require("http").createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs", // 👈 must match what you're using in frontend
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

// Optional: root message
app.get("/", (req, res) => {
  res.send("🟢 PeerJS server is live.");
});

// Start the server
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ PeerJS server running at http://localhost:${PORT}`);
});
