const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/client'));

app.get('/register', function (req, res) {
    console.log('GET: ', req.query);
    res.send('Hello');
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index1.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})