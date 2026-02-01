const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Booking = require('./models/Booking');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        const bookings = await Booking.find({});
        console.log("All Bookings:", bookings.length);
        bookings.forEach(b => console.log(JSON.stringify(b, null, 2)));
        process.exit();
    })
    .catch(err => console.error(err));
