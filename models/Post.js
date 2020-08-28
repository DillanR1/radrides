const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Your Post must have a title'],
    },
    body: {
        type: String,
        required: [true, 'Your Post must have a body'],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
    
    
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;