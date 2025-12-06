// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/database'); 

router.get('/test-db', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Test_Link');
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

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
