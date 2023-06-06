const express = require('express');
const app = express();
const port = 3000;

// middleware để chuyển từ form-data sang req.body (sử dụng form html để post)
app.use(express.urlencoded({
    extended: true
}));

// middleware để chuyển từ form-data sang req.body (sử dụng js để post)
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.post('/register', function (req, res) {
    console.log('POST: ', req.body);
    res.send('Hi');
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})