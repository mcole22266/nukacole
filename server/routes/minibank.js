var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json('The Minibank Router is working :)')
});

router.get('/accounts', (req, res, next) => {
    res.json([
        {
            "id": 0,
            "name": "Caleb's Account",
            "owner": "Caleb Cole",
            "created_date": "December 1, 2021",
            "activity": [
                {
                    "id": 0,
                    "description": "Monthly Payment",
                    "date": "Dec 1, 2021",
                    "amount": 20.00
                },
                {
                    "id": 1,
                    "description": "McDonald's",
                    "date": "Dec 8, 2021",
                    "amount": -8.24
                },
                {
                    "id": 2,
                    "description": "Toy from Walmart",
                    "date": "Dec 13, 2021",
                    "amount": -12.27
                },
                {
                    "id": 3,
                    "description": "Amazon Order",
                    "date": "Dec 27, 2021",
                    "amount": -3.92
                },
                {
                    "id": 4,
                    "description": "Found Money",
                    "date": "Dec 29, 2021",
                    "amount": 9.27
                }
            ]
        }
    ])
});

router.get('/accounts/0', (req, res, next) => {
    res.json({
        "id": 0,
        "name": "Caleb's Account",
        "owner": "Caleb Cole",
        "created_date": "December 1, 2021",
        "activity": [
            {
                "id": 0,
                "description": "Monthly Payment",
                "date": "Dec 1, 2021",
                "amount": 20.00
            },
            {
                "id": 1,
                "description": "McDonald's",
                "date": "Dec 8, 2021",
                "amount": -8.24
            },
            {
                "id": 2,
                "description": "Toy from Walmart",
                "date": "Dec 13, 2021",
                "amount": -12.27
            },
            {
                "id": 3,
                "description": "Amazon Order",
                "date": "Dec 27, 2021",
                "amount": -3.92
            },
            {
                "id": 4,
                "description": "Found Money",
                "date": "Dec 29, 2021",
                "amount": 9.27
            }
        ]
    })
});

module.exports = router;
