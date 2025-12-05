// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Example user routes
router.get('/', (req, res) => {
  // TODO: return list of users
  res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
  // TODO: return single user by id
  res.json({ message: `Get user with id ${req.params.id}` });
});

module.exports = router;
