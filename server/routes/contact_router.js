const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact_controller");

router.route("/Contact").post(contactForm);

module.exports = router;