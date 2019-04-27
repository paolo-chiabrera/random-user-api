const express = require('express');

const router = express.Router();

const { name, version } = require('../package.json');

router.get('/', (req, res) => {
  res.json({
    name,
    version,
  });
});

module.exports = router;
