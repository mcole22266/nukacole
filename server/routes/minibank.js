const Account = require('../models/minibank');
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
    response.json('The Minibank Router is working :)')
});

router.delete('/account', async (request, response) => {
    await Account.deleteMany({});

    try {
        response.send('All Accounts Deleted');
    } catch {
        response.status(500).send(error);
    };

})

router.post('/account', async (request, response) => {
    const account = new Account(request.body);

    try {
        await account.save();
        response.send(account);
    } catch (error) {
        response.status(500).send(error);
    };

});

router.get('/account', async (request, response) => {
    const accounts = await Account.find({});

    try {
        response.send(accounts);
    } catch {
        response.status(500).send(error);
    };
});

router.get('/account/:id', async (request, response, next) => {
    const account = await Account.findById(request.params.id);

    try {
        response.send(account);
    } catch {
        response.status(500).send(error);
    };

});

router.post('/account/:id', async (request, response, next) => {
    const account = await Account.findById(request.params.id);
    console.log(account);

    try {
        account.activity.push(request.body);
        await account.save();
        response.send(account);
    } catch (error) {
        response.status(500).send(error);
    };
})

module.exports = router;
