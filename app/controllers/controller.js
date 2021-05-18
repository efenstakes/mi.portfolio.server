const nodemailer = require("nodemailer")


exports.index = (req, res)=>{
    res.json({
        'app': 'Felix Ndunda Portfolio',
        'page': 'index',
        'message': 'working'
    })
}


exports.contact_me = (req, res)=>{
    let responze = { send: false }
    
    const { name, email, company_or_individual } = req.body

    const mail_message = `  
        <p>
            Hello I am ${name}. I would like to subscribe to Great Minds Kenya Newletters. 
        </p>
        <h3> Applicant Details <h3>
        <p> ${name} </p>
        <p> Name ${email} </p>

        <h2> Company or Individual <h2>
        <p> ${company_or_individual} </p>
        <p> 
            I look forward to hearing from you. 
        </p>
        <p> 
            Regards. 
        </p>
        `;

    try {
        var transporter = nodemailer.createTransport({
            //   service: 'gmail',
            // host: 'smtp.gmail.com',
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
                ciphers:'SSLv3'
            },
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'dev.tests@outlook.com', // 'hypemap.co@gmail.com', 
                pass: 'pwdForDevTests@101', // 'cerami@11056'
            }
        });
        var mailOptions = {
            from: 'dev.tests@outlook.com', // 'hypemap.co@gmail.com',
            to: 'efenstakes101@gmail.com',
            cc: [email],
            subject: 'Get back to Me',
            html: mail_message,
        };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('transporter.sendMail ', error);
              return res.status(500).json({ ...responze, error })
            } else {
              console.log('Email sent: ' + info.response);
              return res.json({ send: true })
            }
        });
    } catch (error) {
        return res.status(500).json({ ...responze, error })
    }

}
