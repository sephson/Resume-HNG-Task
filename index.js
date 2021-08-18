require("dotenv").config();
const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  console.log("Data", req.body);
  const { subject, email, text } = req.body;
  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Error" });
    } else {
      res.status(200).json({ message: "Email Sent" });
    }
  });
  //   res.status(200).json({ message: "yay" });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server is running"));

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
