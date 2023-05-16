const express = require('express');
const app = express();
const port = 3000;

const students = [
    {
        id: '1',
        name: "Dinh",
        address: "hue"
    },
    {
        id: '2',
        name: "Nam",
        address: "quang nam"
    },
    {
        id: '3',
        name: "Tan",
        address: "da nang"
    },
    {
        id: '4',
        name: "Hung",
        address: "hue"
    },
    {
        id: '5',
        name: "Tri",
        address: "quang tri"
    },
    {
        id: '6',
        name: "Anh",
        address: "hue"
    },
    {
        id: '7',
        name: "Binh",
        address: "da nang"
    }
]

app.get('/students', (req, res) => {
    res.send(students);
})

app.get('/studentsbyaddress', (req, res) => {
    var address = req.query.address;

    var newStudents = students.filter(function (st) {
        return st.address === address;
    })
    res.send(newStudents);
})

app.get('/studentbyid', (req, res) => {
    var id = req.query.id;

    var newStudent = students.find(function (st) {
        return st.id === id;
    })
    res.send(newStudent);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})