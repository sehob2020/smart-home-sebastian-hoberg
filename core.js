const { db, sse } = require('./db')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.get('/init', (req, res) => {
    let devices = db.get('devices').value();
    res.send(JSON.stringify({ devices: devices }));
})

app.get('/stream', sse.init);

module.exports = { app }