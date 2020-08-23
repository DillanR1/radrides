const db = require('./models');
const data = require('./carData.json');

db.Car.deleteMany({}, (err, deletedCars) => {
    db.Car.create(data.car, (err, seededCars) => {
        if (err) console.log(err);

        console.log(data.cars.length, 'cars created successfully');
    
        process.exit();
    });
});