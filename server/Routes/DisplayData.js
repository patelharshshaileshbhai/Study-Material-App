// Routes/displayData.js
const express = require('express');
const router = express.Router();

router.post("/materialData", async (req, res) => {
  try {
    res.send(global.food_items);
  } catch (err) {
    console.error("error", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
