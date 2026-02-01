const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Booking = require('./models/Booking');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const seedData = async () => {
    try {
        await User.deleteMany({});
        await Booking.deleteMany({});

        // Agency
        const agency = await User.create({
            _id: '65c4d6e9f9c7d4b4e8b45678', // Hardcoded ID
            name: 'Monk Entertainment',
            email: 'agency@monk.com',
            password: 'password123',
            role: 'agency',
            avatar: 'https://i.pravatar.cc/150?img=50'
        });

        // Mentors
        const mentors = await User.insertMany([
            {
                _id: '65c4d6e9f9c7d4b4e8b45679', // Hardcoded ID Aman
                name: 'Aman Verma',
                email: 'aman@mentorgram.com',
                password: 'password123',
                role: 'mentor',
                category: 'Comedy',
                followers: '1.2M',
                price: '₹2,999',
                slots: 5,
                image: 'https://i.pravatar.cc/150?img=11',
                desc: 'Viral sketch artist. Expert in short-form storytelling.',
                color: 'from-yellow-400 to-orange-500',
                managedBy: agency._id
            },
            {
                _id: '65c4d6e9f9c7d4b4e8b4567a', // Hardcoded ID Riya
                name: 'Riya Sharma',
                email: 'riya@mentorgram.com',
                password: 'password123',
                role: 'mentor',
                category: 'Finance',
                followers: '850k',
                price: '₹3,499',
                slots: 3,
                image: 'https://i.pravatar.cc/150?img=5',
                desc: 'Finance simplified. I help you build trust and monetize.',
                color: 'from-green-400 to-emerald-600',
                managedBy: agency._id
            }
        ]);

        // Regular User
        const user = await User.create({
            _id: '65c4d6e9f9c7d4b4e8b4567b', // Hardcoded ID User
            name: 'Arnav User',
            email: 'user@mentorgram.com',
            password: 'password123',
            role: 'user',
            avatar: 'https://i.pravatar.cc/150?img=33'
        });

        // Bookings
        await Booking.create({
            mentor: mentors[0]._id,
            user: user._id,
            date: '2024-02-20',
            time: '5:00 PM',
            topic: 'Content Strategy',
            price: '₹2,898',
            status: 'upcoming',
            meetingLink: 'https://meet.google.com/abc-defg-hij'
        });

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedData();
