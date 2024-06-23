const express = require("express");
const router = express.Router();

router.get("/results/components", (req, res) => {
    res.render("graphics/TJ/results/components", {});
});

router.get("/results/athlete", (req, res) => {
    res.render("graphics/TJ/results/athlete", {});
});

router.get("/next/components", (req, res) => {
    res.render("graphics/TJ/next/components", {});
});

router.get("/next/athlete", (req, res) => {
    res.render("graphics/TJ/next/athlete", {});
});

module.exports = router;