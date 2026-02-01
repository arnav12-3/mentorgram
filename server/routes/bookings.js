const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings
router.post('/', async (req, res) => {
    try {
        console.log("Received booking request:", req.body);

        // Create new object to avoid potential read-only req.body issues
        const bookingData = { ...req.body };

        // Mock Google Meet Link Generation (Format: abc-defg-hij, letters only)
        const generateSegment = (length) => {
            const chars = 'abcdefghijklmnopqrstuvwxyz';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        };

        const meetingId = `${generateSegment(3)}-${generateSegment(4)}-${generateSegment(3)}`;
        bookingData.meetingLink = `https://meet.google.com/${meetingId}`;

        console.log("Saving booking with link:", bookingData.meetingLink); // DEBUG

        const booking = new Booking(bookingData);
        await booking.save();

        console.log("Booking saved successfully with ID:", booking._id);
        res.status(201).json(booking);
    } catch (error) {
        console.error("Error saving booking:", error); // DEBUG LOG
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/bookings/user/:userId
router.get('/user/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.params.userId }).populate('mentor');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/bookings/mentor/:mentorId
router.get('/mentor/:mentorId', async (req, res) => {
    try {
        const bookings = await Booking.find({ mentor: req.params.mentorId }).populate('user');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/bookings/agency/:agencyId
router.get('/agency/:agencyId', async (req, res) => {
    // Complex query: find bookings where mentor is managed by agency
    // For simplicity in demo, just return all
    res.json([]);
});

module.exports = router;
