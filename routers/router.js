const express = require("express");
const router = express.Router();

const userRouter = require("../routers/user");
const adminRouter = require("../routers/admin");

router.use("/users", userRouter);
router.use("/admins", adminRouter);

module.exports = router;
