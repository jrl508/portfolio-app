const nodemailer = require("nodemailer");

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
  
//   contactEmail.verify((error) => {
//       console.log(process.env.EMAIL_AD)
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

export default function handler(req, res) {
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
        res.status(201).json({ status: "Message Sent" });
      }
    });
  }
  