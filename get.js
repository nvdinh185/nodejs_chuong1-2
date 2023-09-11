const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/client'));

app.get('/search', function (req, res) {
    console.log('GET: ', req.query);
    res.send('search ok');
})

app.post('/register', function (req, res) {
    console.log('POST: ', req.body);
    res.send('register ok');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})