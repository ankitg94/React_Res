const express =require('express')
const { sendController } = require('../Controllers/PortController.js')

//router object
const router =express.Router()

//routes
router.post('/sendemail',sendController)



module.exports =router