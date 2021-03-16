"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
module.exports = function (req, res, next) {
    var token = req.header('token');
    if (!token)
        return res.status(401).json({ message: 'Auth Error' });
    try {
        var decoded = jsonwebtoken_1.default.verify(token, 'randomString');
        req.user = decoded.user;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Invalid Token' });
    }
};
exports.default = auth;
//# sourceMappingURL=auth.js.map