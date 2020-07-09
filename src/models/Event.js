const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    price: Number, 
    thumbnail: String,
    date: Date,
    user: { // Because only user can create a event. relation!
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Event', EventSchema);