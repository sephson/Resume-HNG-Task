const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "db6eea6239fb6aafc6a53b56df7f6426-9776af14-bf7d1fb5",
    domain: "sandboxdc83f4aebe8b49bab52a89307be65112.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, content, callback) => {
  const mailOptions = {
    from: email,
    to: "disutj@gmail.com",
    subject,
    content,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      //if error
      return callback(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
