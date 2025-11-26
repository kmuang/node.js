const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 Welcome to your Node.js project!");
});

app.get("/hello", (req, res) => {
    res.send("Hello from Node.js!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
