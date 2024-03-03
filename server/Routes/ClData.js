// Routes/displayData.js
const express = require('express');
const router = express.Router();

router.post("/clData", async (req, res) => {
  try {
    res.send(global.cldata);
  } catch (err) {
    console.error("error", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
