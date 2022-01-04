const User = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const { response } = require('express');
const router = express.Router();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));

router.get('/', (request, response, next) => {
    response.status(200).send('The Auth Router is working :)');
});

router.delete('/user', async (request, response) => {
    await User.deleteMany({});

    try {
        response.status(200).send('All Users Deleted');
    } catch {
        response.status(500).send(error);
    };

});

router.post('/user/register', async (request, response) => {
    const user = new User(request.body);

    try {
        await user.save();
        response.status(200).send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post('/user/login', async (request, response) => {
    const user = await User.findOne({
        username: request.body.username,
    });

    if (!user) {
        // Username not found
        response.status(401).send('Username does not exist');
    } else if (user.password !== request.body.password) {
        response.status(401).send('Password is incorrect');
    } else {
        // convert User to a copy so a token can be added to the response
        const loggedInUser = user.toObject();
        loggedInUser.token = 'fake-jwt-token';

        response.status(200).send(loggedInUser);
    };
})

router.get('/user', async (request, response) => {
    const users = await User.find({});

    try {
        response.status(200).send(users);
    } catch {
        response.status(500).send(error);
    };
});

router.get(`/user/:id`, async(request, response, next) => {
    const user = await User.findById(request.params.id);

    try {
        response.status(200).send(user);
    } catch {
        response.status(500).send(error);
    };
});

module.exports = router;
