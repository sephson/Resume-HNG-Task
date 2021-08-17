const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  console.log("Data", req.body);
  const { subject, email, content } = req.body;
  sendMail(email, subject, content, function (err, data) {
    res.status(200).json({ data, message: "Email Sent" });
    if (err) res.status(500).json({ message: "Error" });
  });
  //   res.status(200).json({ message: "yay" });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server is running"));

// process.on("unhandledRejection", (err) => {
//   console.log(`Logged Error: ${err}`);
//   server.close(() => process.exit(1));
// });
