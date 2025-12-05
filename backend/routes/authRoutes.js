// routes/authRoutes.js
const express = require('express');
const router = express.Router();

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
