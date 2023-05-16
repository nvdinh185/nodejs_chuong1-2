const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());

const users = [
    {
        username: 'dinh',
        password: '123',
        fullname: 'Nguyen Van Dinh'
    }
]

const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

app.post('/register', (req, res) => {
    var user = req.body;
    var check = false;
    // Kiểm tra xem user này đã tồn tại chưa?
    for (const us of users) {
        if (user.username === us.username) {
            check = true;
        }
    }
    if (!check) {
        users.push(user);
        res.status(200).send({ status: 'OK' });
    } else {
        res.status(500).send({ status: 'NOK' });
    }
})

app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, 'register.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})