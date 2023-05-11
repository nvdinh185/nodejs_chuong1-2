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

const findUserInList = (obj, usersList) => {
    for (const user of usersList) {
        if (user.username === obj.username
            && user.password === obj.password) {
            return user;
        }
    }
    return null;
}

const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

app.post('/register', (req, res) => {
    var user = req.body;

    if (!findUserInList(user, users)) {
        users.push(user);
        res.status(200).send({ status: 'OK' });
    } else {
        res.status(500).send({ status: 'NOK' });
    }
})

app.post('/login', (req, res) => {
    var user = req.body;

    if (findUserInList(user, users)) {
        res.status(200).send({ status: 'OK' });
    } else {
        res.status(500).send({ status: 'NOK' });
    }
})

app.get('/', function (req, res) {
    res.sendFile(publicPath, 'index.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})