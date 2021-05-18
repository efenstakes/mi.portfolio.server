const mailjet = require ('node-mailjet')
.connect('cdef866d241a75ce53033ae225a477d9', '856e03ff8134161dc2ca5082202b2a45')


exports.make_mail = function(from, to, cv, cv_content, photo) {
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            // "Email": from.email, "Name": from.name,
            "Email": "agente.tikka@gmail.com", "Name": "from.name",
          },
          "To": [
            {
              "Email": "efenstakes101@gmail.com", "Name": "Efen"
            }
          ],
          "Subject": "APPLICATION.",
          "TextPart": "Find my cv below",
          "HTMLPart": "<h3>Heeey Efen, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          "CustomID": "s46trhdfhtrdyhg3resdf",
          'Attachments': [
            {
              "Content-Type": cv.type,
              "Filename": cv.name,
              "Content": cv_content
            }
          ]
        }
      ]
    })

  return request
}

// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })


// const request = mailjet
// .post("send", {'version': 'v3.1'})
// .request({
//   "Messages":[
//     {
//       "From": {
//         "Email": "agente.tikka@gmail.com",
//         "Name": "agente"
//       },
//       "To": [
//         {
//           "Email": "efenstakes101@gmail.com",
//           "Name": "Efen"
//         }
//       ],
//       "Subject": "Greetig t AGENTE.",
//       "TextPart": "My first Mailjet email",
//       "HTMLPart": "<h3>Heeey Efen, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//       "CustomID": "s46trhdfhtrdyhg3resdf"
//     }
//   ]
// })