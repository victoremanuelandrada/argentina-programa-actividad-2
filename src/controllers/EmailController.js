const { Console } = require("console");
const nodemailer = require("nodemailer");

const EmailController = {}

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'postmaster@sandbox1004aa8cc9e44bfd84b7ffb83729d176.mailgun.org',
      pass: '0f0206b7df7173c7a0be3feec0d01117-8c9e82ec-f6a0dd31'
    }
  });

  
EmailController.enviarEmail = async(req, res)=>{
     
        // send mail with defined transport object
       const info = await transporter.sendMail({
          from: '"equipo argentina programa 👻" <foo@example.com>', // sender address
          to: "lvpemanuelandrada@gmail.com", // list of receivers
          subject: "Bienvenido ✔", // Subject line
          text: "Bienvenido emanuel andrda", // plain text body
          html: "<b>exelente trabajo emanuek</b>", // html body
        });

    /*console.log("Message sent: %s", info.messageId);
    transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });*/

    return res.json({ mensaje: ' Ingreso Correctamente'});
}

module.exports = EmailController;