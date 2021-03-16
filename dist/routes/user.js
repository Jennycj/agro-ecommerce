"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
// Login page
router.get('/login', function (req, res) { return res.render('login-register'); });
// Register
router.get('/login-register', function (req, res) { return res.render('login-register'); });
// 
//# sourceMappingURL=user.js.map