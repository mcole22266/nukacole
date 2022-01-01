var express = require('express');
var routerMinibank = require('./routes/minibank.js');

const PORT = process.env.SERVER_PORT;

var app = express();
app.use('/minibank', routerMinibank);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// hello