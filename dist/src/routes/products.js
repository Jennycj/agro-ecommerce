"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});
exports.default = router;
//# sourceMappingURL=products.js.map