// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/database'); // import the pool

// GET /api/properties  → list properties from DB
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Properties');
    res.json(rows);
  } catch (err) {
    next(err); // will hit your error middleware in server.js
  }
});

// POST /api/properties  → create property (placeholder for now)
router.post('/', (req, res) => {
  // TODO: create property using pool.query(...)
  res.json({ message: 'Create property' });
});

// GET /api/properties/:id  → get one property
router.get('/:id', (req, res) => {
  // TODO: get one property from DB
  res.json({ message: `Get property with id ${req.params.id}` });
});

// PUT /api/properties/:id  → update property
router.put('/:id', (req, res) => {
  // TODO: update property in DB
  res.json({ message: `Update property with id ${req.params.id}` });
});

// DELETE /api/properties/:id  → delete property
router.delete('/:id', (req, res) => {
  // TODO: delete property in DB
  res.json({ message: `Delete property with id ${req.params.id}` });
});

module.exports = router;
