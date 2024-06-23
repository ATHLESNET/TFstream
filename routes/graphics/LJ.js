const express = require("express");
const router = express.Router();

router.get("/results/components", (req, res) => {
    res.render("graphics/LJ/results/components", {});
});

router.get("/results/athlete", (req, res) => {
    res.render("graphics/LJ/results/athlete", {});
});

router.get("/next/components", (req, res) => {
    res.render("graphics/LJ/next/components", {});
});

router.get("/next/athlete", (req, res) => {
    res.render("graphics/LJ/next/athlete", {});
});

module.exports = router;