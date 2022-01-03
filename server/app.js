const express = require('express');
const routerMinibank = require('./routes/minibank.js');
const routerAuth = require('./routes/auth.js');

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.use('/minibank', routerMinibank);
app.use('/auth', routerAuth);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
