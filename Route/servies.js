
const express = require('express')
let router = express.Router();

router.get('/', (req, res) => {
    res.render('Services', { title: 'Servies Page'})
})

module.exports = router;