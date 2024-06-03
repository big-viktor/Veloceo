const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 1000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "svitlik.viktor78@gmail.com",
        pass: "ddbo gfkd vdhp adyd",
      },
    });

    const mail_configs = {
      from: "volceo@gmail.com2222",
      to: email,
      subject: subject,
      html: `
      <p>Jmeno</p>
      <p>${message}</p>
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred222222` });
      }
      return resolve({ message: "Email sent successfully1111" });
    });
  }); 
}

app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
