const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/client'));

const courses = [
    {
        id: '1',
        name: 'Javascript',
        description: 'Đây là khóa học Javascript cơ bản',
        coin: 100
    },
    {
        id: '2',
        name: 'HTML - CSS',
        description: 'Đây là khóa học HTML - CSS',
        coin: 200
    },
    {
        id: '3',
        name: 'ReactJS',
        description: 'Đây là khóa học ReactJS',
        coin: 0
    },
    {
        id: '4',
        name: 'NodeJS',
        description: 'Đây là khóa học NodeJS',
        coin: 300
    },
    {
        id: '5',
        name: 'PHP',
        description: 'Đây là khóa học PHP',
        coin: 150
    }
]

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    var id = req.params.id;
    var courseById = courses.find(function (st) {
        return st.id === id;
    });
    res.send(courseById);
})

app.post('/courses', (req, res) => {
    courses.push(req.body);
    res.send('OK');
})

app.put('/courses/:id', (req, res) => {
    var id = req.params.id;
    var idx = courses.findIndex(function (st) {
        return st.id === id;
    });
    courses.splice(idx, 1, req.body);
    res.send('OK');
})

app.delete('/courses/:id', (req, res) => {
    var id = req.params.id;
    var idx = courses.findIndex(function (st) {
        return st.id === id;
    });
    courses.splice(idx, 1);
    res.send('OK');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})