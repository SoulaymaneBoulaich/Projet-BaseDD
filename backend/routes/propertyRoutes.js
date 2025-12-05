// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();

const pool = require('../config/database');   // import the pool

router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Properties LIMIT 10');
    res.json(rows);
  } catch (err) {
    next(err);   // will hit your error middleware in server.js
  }
});

// Example property routes
router.get('/', (req, res) => {
  // TODO: list properties
  res.json({ message: 'List properties' });
});

router.post('/', (req, res) => {
  // TODO: create property
  res.json({ message: 'Create property' });
});

router.get('/:id', (req, res) => {
  // TODO: get one property
  res.json({ message: `Get property with id ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  // TODO: update property
  res.json({ message: `Update property with id ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  // TODO: delete property
  res.json({ message: `Delete property with id ${req.params.id}` });
});

module.exports = router;
