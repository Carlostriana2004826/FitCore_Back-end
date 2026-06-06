const {Router} = require('express')
const userControllers = require("../controllers/auth.controller")

const router = Router()
router.post('/auth/login', userControllers.login)
router.post('/auth/login', userControllers.register)

// router.get('/auth/login', authUser, renewToken)

module.exports = router