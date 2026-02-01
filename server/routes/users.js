const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/users/mentors
router.get('/mentors', async (req, res) => {
    try {
        const mentors = await User.find({ role: { $in: ['mentor', 'creator'] } });
        res.json(mentors);
    } catch (error) {
        console.error("Error fetching mentors:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
