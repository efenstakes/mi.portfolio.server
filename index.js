// include external libraries
const Express = require('express')
const BodyParser = require('body-parser')
const DotEnv = require('dotenv')
const Cors = require('cors')
const Morgan = require('morgan')


// include internal libraries
const controller = require('./app/controllers/controller')
const validator = require('./app/validators/validator')


// get environment vars from .env
DotEnv.config()
const PORT = process.env.PORT || 3456



// initialize express apllication instance
const app = Express()

// log request info
app.use(Morgan('dev'))

// setup server to allow cor's
app.use(Cors())

// setup body parser to help acess json and urlencoded data from
// client applications
// app.use(BodyParser.json())
// app.use(BodyParser.urlencoded({ extended: false }))
app.use(Express.json())


/** 
* hook up routes with the app instance
*/


app.get('/', controller.index)

// contact me
app.post('/contact', [ validator.contact_me, validator.check_request_data ],  controller.contact_me)



// start application
app.listen(PORT, '0.0.0.0', () => {
    console.log(`server started at port ${PORT}`)
})
