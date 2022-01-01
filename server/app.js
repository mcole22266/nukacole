var express = require("express");
var app = express();

const port = 3000;

app.get('/accounts', (req, res, next) => {
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
})

app.get('/accounts/0', (req, res, next) => {
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
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
