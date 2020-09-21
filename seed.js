require('dotenv').config();

const db = require('./models');
const data = require('./carData.json');
const post = require('./controllers/post');

db.Car.deleteMany({}, (err, deletedCars) => {
    db.Car.create(data.cars, (err, seededCars) => {
        if (err) console.log(err);

        console.log(seededCars.length, 'cars created successfully');
        db.Post.create({title: "post1", body: "this is the body"},(error, newPost) => {
            if (err) console.log(err);
            seededCars[0].posts.push(newPost)
            seededCars[0].save((err, savedCar) => {
                if (err) console.log(err)
                console.log("new post created successfully")
                process.exit();
            })
        })
    });
});