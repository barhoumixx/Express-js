const express = require('express')
var bodyParser = require('body-parser')

let router = express.Router();
// thirdpart middleware urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router 
.route('/')
.get( (req, res) => {
    res.render('Contact', { title: 'Contact page'})
})
.post(urlencodedParser,(req, res) => {
    console.log(req.body);
    res.render('Contact-success', { data: req.body,title: 'Contact success page' })
})


module.exports = router;