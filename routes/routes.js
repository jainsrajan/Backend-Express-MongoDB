const express = require('express')

const{register, home , login} = require('../Controllers/controllers.js')
const router = express.Router()

router.get('/' , home)
router.post('/register' , register);
router.post('/login' , login)


module.exports = router;