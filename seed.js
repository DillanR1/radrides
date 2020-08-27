require('dotenv').config();

const db = require('./models');
const data = require('./carData.json');

db.Car.deleteMany({}, (err, deletedCars) => {
    db.Car.create(data.cars, (err, seededCars) => {
        if (err) console.log(err);

        console.log(seededCars.length, 'cars created successfully');
    
        process.exit();
    });
});