const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    title: String,
    year: Number,
    make: String,
    model: String,
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;