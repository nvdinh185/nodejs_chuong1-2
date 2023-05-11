const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true, }));
app.use(express.json());

const users = [
    {
        username: 'dinh',
        password: '123',
        fullname: 'Nguyen Van Dinh'
    }
];

const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

app.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send(users);
})

app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})