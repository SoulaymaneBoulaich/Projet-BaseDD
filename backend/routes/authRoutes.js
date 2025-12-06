// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/database');   // <‑‑ add this if you query users table

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await pool.query(
      'INSERT INTO Users (name, email, password_hash, user_type) VALUES (?, ?, ?, ?)',
      [name, email, password, 'Buyer']
    );
    res.json({ message: 'Registered' });
  } catch (err) {
    next(err);
  }
});


// Example auth routes
router.post('/register', (req, res) => {
  // TODO: implement registration
  res.json({ message: 'Register endpoint' });
});

router.post('/login', (req, res) => {
  // TODO: implement login
  res.json({ message: 'Login endpoint' });
});

// IMPORTANT: export the router itself, not an object
module.exports = router;
