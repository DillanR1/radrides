const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    year: Number,
    make: String,
    model: String,
    carPicUrl: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
 });

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;