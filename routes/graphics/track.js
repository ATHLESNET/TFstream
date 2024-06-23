const express = require("express");
const router = express.Router();

router.get("/results/components", (req, res) => {
    res.render("graphics/track/results/results", {});
});

router.get("/results/title", (req, res) => {
    res.render("graphics/track/results/title", {});
});

router.get("/results/wind", (req, res) => {
    res.render("graphics/track/results/wind", {});
});

module.exports = router;