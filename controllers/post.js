const db = require('../models');


const index = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if (err) console.log('Error in posts#index:', err);

        res.status(200).json(foundPosts);
    });
};
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPosts) => {
        if (err) console.log('Error in post#show:', err);
    
        res.status(200).send(foundPosts);
    });
};
const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
      if (err) console.log('Error in Posts#create:', err);
      // get car by id (findById) and update with new post info 
     // Once post is created embed post into car doc, Push this post into cars array of posts. Only related to specific car once embedded.
      res.status(200).json(savedPost);
    });
};
const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
      if (err) console.log('Error in Posts#update:', err);
  
      if (!updatedPost) {
        res.status(400).json({message: `Could not find Post with id ${req.params.id}`});
      }
  
      res.json(updatedPost);
    });
};
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) console.log('Error in posts#destroy:', err);
  
      res.status(200).json(deletedPost);
    });
  };




  module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};