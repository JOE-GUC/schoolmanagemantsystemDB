const { Router } = require('express');
const router = Router();

const authController = require('../src/controllers/auth.controller');
const { verifyLoginBody, verifyRegisterBody } = require('../src/middlewares/auth.middleware');

// Login and Register routes
router.post('/login', verifyLoginBody, authController.login);
router.post('/register', verifyRegisterBody, authController.register);

module.exports = router;