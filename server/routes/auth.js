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
    response.json('The Auth Router is working :)')
});

router.delete('/user', async (request, response) => {
    await User.deleteMany({});

    try {
        response.send('All Users Deleted');
    } catch {
        response.status(500).send(error);
    };

});

router.post('/user/register', async (request, response) => {
    const user = new User(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get('/user', async (request, response) => {
    const users = await User.find({});

    try {
        response.send(users);
    } catch {
        response.status(500).send(error);
    };
});

router.get(`/user/:id`, async(request, response, next) => {
    const user = await User.findById(request.params.id);

    try {
        response.send(user);
    } catch {
        response.status(500).send(error);
    };
});

module.exports = router;
