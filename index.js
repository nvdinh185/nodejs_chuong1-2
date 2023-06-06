const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/client'));

const news = [
    {
        id: "1",
        description: "Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan",
        detail: "Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va vào tàu Việt Nam.",
        catId: "1"
    },
    {
        id: "2",
        description: "Trọng tài - vết đen của kỳ World Cup sôi động",
        detail: "World Cup 2014 chưa đi hết lượt đầu vòng bảng nhưng các trọng tài đẳng cấp FIFA đã có tới bốn trận bị chỉ trích dữ dội.",
        catId: "2"
    },
    {
        id: "3",
        description: "Những mỹ nhân Việt duyên dáng ở tuổi tứ tuần",
        detail: "Việt Trinh, Thu Hà, Hồng Nhung, Thanh Lam... vẫn giữ được nét thanh xuân, tươi trẻ và cuốn hút theo thời gian nhờ phong cách làm đẹp tinh tế.",
        catId: "1"
    },
    {
        id: "4",
        description: "Chuyển nhượng 17/6: Arsenal mua Balotelli, tráo hàng Man Utd",
        detail: "Đội bóng thành London đang đẩy mạnh việc tuyển lựa những vị trí còn yếu trong đội hình ở cả ba tuyến.",
        catId: "3"
    },
    {
        id: "5",
        description: "Chuyên gia Anh tin chắc vị trí MH370 rơi",
        detail: "Các chuyên gia thuộc công ty viễn thông Anh Inmarsat cho rằng họ xác định được vị trí chiếc máy bay MH370 đã rơi xuống trên Ấn Độ Dương, tuy nhiên đội.",
        catId: "1"
    }
]

app.get('/news', (req, res) => {
    res.send(news);
})

const categories = [
    {
        "id": "1",
        "name": "Thời sự"
    },
    {
        "id": "2",
        "name": "Góc nhìn"
    },
    {
        "id": "3",
        "name": "Thế giới"
    },
    {
        "id": "4",
        "name": "Kinh doanh"
    }
]

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news-by-cat', (req, res) => {
    var cId = req.query.cid;

    var listNewsByCat = news.filter(function (st) {
        return st.catId === cId;
    })
    res.send(listNewsByCat);
})

app.get('/news-by-id', (req, res) => {
    var id = req.query.id;

    var newsDetail = news.find(function (tin) {
        return tin.id === id;
    })
    res.send(newsDetail);
})

app.get('/cat-by-id', (req, res) => {
    var id = req.query.id;

    var catDetail = categories.find(function (cat) {
        return cat.id === id;
    })
    res.send(catDetail);
})

// get by params
app.get('/news-by-id/:id', (req, res) => {
    var id = req.params.id;

    var newsDetail = news.find(function (st) {
        return st.id === id;
    })
    res.send(newsDetail);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})