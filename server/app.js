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

function sendEmail({ email, subject, message, name, numbers, maill }) {
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
      <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
      </head>
      <body>
       <table cellpadding="5" style="font-family:Montserrat, sans-serif; font-size:12px; color:#333; border-left: solid 1px #e9e9e9; border: thin groove #CCCCCC">
          <tr bgcolor=#FF8100 valign="top">
            <td style="border-bottom-style: groove; border-bottom-width: thin"><strong>${subject}</strong></td>
            <td style="border-bottom-style: groove; border-bottom-width: thin"><strong>Document</strong></td>
          </tr>
          <tr bgcolor=#FFCA99 valign="top">
            <td>Jmeno</td>
            <td> 
              <ul style="margin: 0px 0px 0px 0px; padding: 5px 15px 5px 5px;">
               <li>${name}</li>
              </ul>
            </td>
          </tr>
          <tr bgcolor=#FFCA99 valign="top">
            <td>Telefonní číslo</td>
            <td> 
              <ul style="margin: 0px 0px 0px 0px; padding: 5px 15px 5px 5px;">
               <li>${numbers}</li>
              </ul>
            </td>
          </tr>
          <tr bgcolor=#FFCA99 valign="top">
            <td>Maill</td>
            <td> 
              <ul style="margin: 0px 0px 0px 0px; padding: 5px 15px 5px 5px;">
               <li>${maill}</li>
              </ul>
            </td>
          </tr>
          <tr bgcolor=#FFCA99 valign="top">
            <td>Meseg</td>
            <td> 
              <ul style="margin: 0px 0px 0px 0px; padding: 5px 15px 5px 5px;">
               <li>${message}</li>
              </ul>
            </td>
          </tr>
         </table>
        </body>
       </html>
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
