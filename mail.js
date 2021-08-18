const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, callback) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      //if error
      console.log(err);
      return callback(err, null);
    } else {
      console.log("Message Sent!");
      return callback(data, null);
    }
  });
};

// console.log(process.env.API_KEY, process.env.DOMAIN, process.env.EMAIL);

module.exports = sendMail;
