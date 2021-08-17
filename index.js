const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server is running"));

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
