const mongoose = require('.../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    passworld: {
        type: String,
        required: true,
        select: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
});


User.Schema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.passworld,10);
    this.passworld = hash;

    next();
});


const User = mongoose.model('User', UserSchema);
module.exports = User;