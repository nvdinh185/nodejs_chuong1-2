const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})