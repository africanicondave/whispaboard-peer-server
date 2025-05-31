const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

const server = require("http").createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs",           // Must match frontend
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

// Optional route for Render health check
app.get("/", (req, res) => {
  res.send("✅ PeerJS server is live.");
});

const PORT = process.env.PORT || 3000;

// ✅ FIX: Bind to 0.0.0.0 for Render
server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ PeerJS server running at http://0.0.0.0:${PORT}`);
});
