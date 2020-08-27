const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./Post');
const CarSchema = new Schema({
    year: Number,
    make: String,
    model: String,
    carPicUrl: String,
   /* posts: {PostSchema}, <===SERVER DOES NOT LIKE
*/});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;