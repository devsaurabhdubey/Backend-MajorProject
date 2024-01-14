const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");
// const information = require('../controllers/home_controller')



console.log("Router loaded");
router.get('/',homeController.home);
router.use('/users',require('./users'))
// router.get('/infor',information.information);


module.exports = router;