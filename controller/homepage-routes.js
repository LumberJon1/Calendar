const router = require("express").Router();
const path = require("path");

// Missing middleware function??

// Render the homepage at the root url
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"../../view/index.html"))
})

module.exports = router;