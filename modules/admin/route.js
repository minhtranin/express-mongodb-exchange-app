'use strict'
const express = require('express')
const router = express.Router()
const admin = require('./Controllers/AuthController')



/*auth admin */
router.get('/create',  admin.create)
router.post('/login', admin.login)
router.post('/verify', admin.verify)
/**auth admin */






module.exports = router