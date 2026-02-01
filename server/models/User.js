const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Will be hashed in real app
    role: { type: String, enum: ['user', 'mentor', 'agency'], default: 'user' },
    avatar: { type: String, default: 'https://i.pravatar.cc/150?img=3' },
    
    // For Mentors
    category: { type: String },
    desc: { type: String },
    price: { type: String },
    followers: { type: String },
    slots: { type: Number, default: 0 },
    color: { type: String, default: 'from-purple-400 to-pink-400' }, // Gradient
    managedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Agency ID
    
    // For Agencies
    managedCreators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
