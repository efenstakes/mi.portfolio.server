var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'dev.tests@outlook.com',
        pass: 'pwdForDevTests@101'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'dev.tests@outlook.com', // sender address (who sends)
    to: 'efenstakes101@gmail.com, agente.tikka@gmail.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log('msg error ', error);
    }

    console.log('Message sent: ' + info.response);
});