// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();

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
