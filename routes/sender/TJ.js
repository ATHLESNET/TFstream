const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("sender/TJ", {});
});

module.exports = router;