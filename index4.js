const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const users = [
    {
        id: 1,
        username: 'user1',
        password: '123'
    }
];

const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

app.post('/sign-up', (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(publicPath, 'home.html'));
})

app.post('/sign-in', (req, res) => {
    var address = req.query.address;

    var newStudents = students.filter(function (st) {
        return st.address === address;
    })
    res.send(newStudents);
})

app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})