const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        const users = await User.find({});
        console.log("Users and IDs:");
        users.forEach(u => console.log(`${u.name}: ${u._id} (${u.role})`));
        process.exit();
    })
    .catch(err => console.error(err));
