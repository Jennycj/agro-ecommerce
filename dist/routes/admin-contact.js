"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var admin_contact_1 = require("../controller/admin-contact");
var router = express_1.Router();
router.get('/', admin_contact_1.getAllContact);
exports.default = router;
//# sourceMappingURL=admin-contact.js.map