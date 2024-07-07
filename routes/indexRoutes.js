const express = require('express');
const router = express.Router();

// Assuming indexUrls.home is a predefined path for the home route
const indexUrls = {
  home: '/'
};

router.get(indexUrls.home, (req, res) => {
  res.status(200).send("Welcome to Chrixsaintworld Server");
});

module.exports = router;