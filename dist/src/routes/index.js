"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index1', { title: 'Express' });
});
router.get('/dashboard', function (req, res) {
    res.render('dashboard', { title: 'Express' });
});
router.get('/charts', function (req, res) {
    res.render('charts', { title: 'Express' });
});
router.get('/tables', function (req, res) {
    res.render('Tables', { title: 'Express' });
});
router.get('/login', function (req, res) {
    res.render('login', { title: 'Express' });
});
router.get('/my-account', function (req, res) {
    res.render('my-account', { title: 'Express' });
});
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});
router.get('/cart', function (req, res) {
    res.render('cart', { title: 'Carts' });
});
router.get('/login-register', function (req, res) {
    res.render('login-register', { title: 'Login' });
});
router.get('/about-us', function (req, res) {
    res.render('about-us', { title: 'About' });
});
router.get('/product', function (req, res) {
    res.render('product', { title: 'Express' });
});
router.get('/shop', function (req, res) {
    res.render('shop', { title: 'Express' });
});
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});
router.get('/productadd', function (req, res) {
    res.render('productadd', { title: 'Express' });
});
exports.default = router;
//# sourceMappingURL=index.js.map