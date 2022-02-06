const express = require('express');

const message = (name) => `Welcome, ${name}!`;

const app = express();

app.get('/', (req, res) => {
    const { name } = req.query;
    res.status(200).send({ message: message(name) });
});

module.exports = app;