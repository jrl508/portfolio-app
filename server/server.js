const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config({
    path:'../.env'
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: 'smtp.mail.gmail.com',
    port: 465,
    service:'gmail',
    secure: false,
    auth: {
      user: process.env.EMAIL_AD,
      pass: process.env.EMAIL_PW,
    },
    logger: true
  });
  
  contactEmail.verify((error) => {
      console.log(process.env.EMAIL_AD)
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.EMAIL_AD,
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });