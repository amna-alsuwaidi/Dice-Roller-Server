const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

// Dice roll endpoint
app.get("/roll", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    res.json({ roll: diceRoll });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

