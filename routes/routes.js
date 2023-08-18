const express = require('express')

const{register, home} = require('../Controllers/controllers.js')
const router = express.Router()

router.get('/' , home)
router.post('/register' , register);


module.exports = router;