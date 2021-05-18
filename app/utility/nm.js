const nodemailer = require("nodemailer")



exports.subscribe = async function send_mail ({
  receiver, 
  subject, 
  message,
  // cv,
  cc_to,
  error_callback,
  success_callback,
}) {

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
            pass: 'pwdForDevTests@101', // 'cerami11056'
        }
    });
      
    var mailOptions = {
        from: 'dev.tests@outlook.com', // 'hypemap.co@gmail.com',
        to: receiver,
        cc: cc_to,
        subject: subject,
        html: message,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('transporter.sendMail ', error);
          error_callback()
        } else {
          console.log('Email sent: ' + info.response);
          success_callback()
        }
    });

  } catch(e) {
    print('block error ', e)
    error_callback()
  }

} 

exports.send_mail = async function send_mail ({
        receiver, 
        subject, 
        message,
        photo,
        // cv,
        cc_to,
        error_callback,
        success_callback,
    }) {
    console.log('got photo ', photo)

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
                pass: 'pwdForDevTests@101', // 'cerami11056'
            }
        });
          
        var mailOptions = {
            from: 'dev.tests@outlook.com', // 'hypemap.co@gmail.com',
            to: receiver,
            cc: cc_to,
            subject: subject,
            html: message,
            attachments: [
                { filename: photo.name, path: photo.path, },
                { filename: 'Application CSV', path: './application.csv', },
                // { filename: cv.name, path: cv.path, }
            ]
        };
      

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('transporter.sendMail ', error);
              error_callback()
            } else {
              console.log('Email sent: ' + info.response);
              success_callback()
            }
        });

    } catch(e) {
        print('block error ', e)
        error_callback()
    }

} 

exports.create_msg = ({
        applicant_fullname,
        applicant_email,
        applicant_phone,
        applicant_title,
        expectations,
        company_name,
        company_email,
        company_phone,
        applicant_dob,
        application_type
    }) => {
    
    return `
        <p>
          Hello I am ${applicant_fullname}. I am interested in your bootcamp. Please find my application details below. 
        </p>
        <h3> Applicant Details <h3>
        <p> ${application_type} </p>
        <p> Name ${applicant_fullname} </p>
        <p> Email ${applicant_email} </p>
        <p> Phone ${applicant_phone} </p>
        <p> Date of Birth ${applicant_dob} </p>
        <p> Title ${applicant_title} </p>
        <p> Expectations: </p>
        <p> ${expectations} </p>

        <h2> Company Details <h2>
        <p> Name ${company_name} </p>
        <p> Email ${company_email} </p>
        <p> Phone ${company_phone} </p> 
        <p> 
          I look forward to hearing from you. 
        </p>
        <p> 
          Regards. 
        </p>

    `;
}







// send_mail({
//     receiver: 'efenstakes101@gmail.com', 
//     subject: 'GMC', 
//     message: '<h>Hello Again</b>'
// })



// async function send() {
//     var transporter = nodemailer.createTransport({
//         //   service: 'gmail',
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         requireTLS: true,
//         auth: {
//             user: 'hypemap.co@gmail.com',   
//             pass: 'cerami11056',
//         }
//     });
    
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//         to: 'efenstakes101@gmail.com', // sender address
//         from: "hypemap.co@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         // text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>" // html body
//     });
    
//     console.log('info ', info)
    
// }

// try {
//     send()
// } catch (error) {
//     console.log('error ', error)
// }

