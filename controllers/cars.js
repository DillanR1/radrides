const db = require('../models');

const index = (req, res) => {
    db.Car.find({}, (err, foundCars) => {
        if (err) console.log('Error in cars#index:', err);

        res.status(200).json(foundCars);
    });
};

const show = (req, res) => {
  console.log("car show params", req.params)
    db.Car.findById(req.params.id)
      .populate({path: 'posts'})
      .exec((err, foundCar) => {
        if (err) console.log('Error in cars#show:', err);
     
        res.status(200).send(foundCar);
      });
  }

const create = (req, res) => {
    db.Car.create(req.body, (err, savedCar) => {
      if (err) console.log('Error in Cars#create:', err);
  
      res.status(200).json(savedCar);
    });
};

const update = (req, res) => {
    db.Car.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCar) => {
      if (err) console.log('Error in cars#update:', err);
  
      if (!updatedCar) {
        res.status(400).json({message: `Could not find Car with id ${req.params.id}`});
      }
  
      res.json(updatedCar);
    });
};

const destroy = (req, res) => {
    db.Car.findByIdAndDelete(req.params.id, (err, deletedCar) => {
      if (err) console.log('Error in cars#destroy:', err);
  
      res.status(200).json(deletedCar);
    });
  };

  module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};