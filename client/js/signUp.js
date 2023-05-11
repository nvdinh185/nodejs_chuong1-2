async function getData() {

    try {
        var listNews = await axios.get('http://localhost:3000/students2?address=hue');
        listNews = listNews.data;

        console.log(listNews);

    } catch (err) {
        console.log('Lỗi ' + err);
    }
}

// getData();