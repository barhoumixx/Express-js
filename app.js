// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 5000
const log  = require('./Middleware/verif');
const home =require('./Route/home')
const services = require ('./Route/servies')
const contact = require('./Route/contact')

//load middleware
app.use(log);



// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))


// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')





//load router
app.use('/',home);

app.use('/Services',services);

app.use('/Contact',contact)


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))