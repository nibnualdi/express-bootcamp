const express = require("express");
const router = express.Router();

const { shows } = require("../controllers/userController");

router.get("/", shows);
router.post("/", shows);

module.exports = router;
