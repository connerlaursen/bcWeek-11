const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "The server is alive"
    })
})

app.get("/cool-route", (req, res) => {
    console.log("client is trying to access cool-route")
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/public/cool-route.html"))
})

app.listen(PORT, () => {
    console.log(`server listening to http://localhost:${PORT}`)
})

