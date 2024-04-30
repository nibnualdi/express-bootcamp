const express = require("express");
const router = express.Router();

const { uploadFille } = require("../controllers/adminController");

router.post("/uploads", uploadFille);

module.exports = router;
