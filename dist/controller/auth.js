"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checker = void 0;
var Checker = function (req, res, next) {
    if (req.session.user && req.cookies.user_sid) {
        next();
    }
    else {
        res.redirect('/login-register');
    }
};
exports.Checker = Checker;
//# sourceMappingURL=auth.js.map