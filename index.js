const express = require('express');
const app = express();
const port = 3000;

// Khai báo đường dẫn cho các file tĩnh
app.use(express.static(__dirname + '/client'));

// Khai báo các router
app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/home', (req, res) => {
    res.send(
        {
            id: 1,
            name: "home"
        }
    );
})

app.get('/news', (req, res) => {
    res.sendFile(__dirname + '/client/tintuc.html');
})

// Khởi chạy server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})