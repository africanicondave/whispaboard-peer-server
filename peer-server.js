const { PeerServer } = require("peer");

const server = PeerServer({
  port: process.env.PORT || 9000,
  path: "/",
  allow_discovery: true,
});

console.log("✅ PeerJS server running...");
