const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.get('/', cors(corsOptions), function(req, res) {
    // Generate a random dice roll (1 to 6)
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
