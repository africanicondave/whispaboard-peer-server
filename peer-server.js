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

// Optional test route
app.get("/", (req, res) => {
  res.send("✅ PeerJS server is live.");
});

// Required by Render — bind to process.env.PORT
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ PeerJS server running on Render at port ${PORT}`);
});
