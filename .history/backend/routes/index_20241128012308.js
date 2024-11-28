const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const contactRouter = require("./contact");
const diaryRouter = require("./diary");
const weatherRouter = require("./weather");

// manage routes
router.use("/auth", authRouter);
router.use("/diary", diaryRouter);
router.use("/contact", contactRouter);
router.use("/weather", weatherRouter);

router.use("/*", (req, res) => {
  res.status(404).json({ status: 404, message: "not found" });
});

module.exports = router;
