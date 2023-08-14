
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 name: String,
 score: Number,
 actions: {
    pompesScore: Number,
    abdosScore: Number,
    tractionsScore: Number,
    squatsScore: Number,
    cardioScore: Number,
    haltèresScore: Number,
 },
});

const User = mongoose.model('users', userSchema);

module.exports = User;