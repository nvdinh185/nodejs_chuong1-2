var headingElement = $("#heading");

headingElement.text('Trang tin VinaEnter Edu');

const ulElement = $("#list");

async function displayData() {
    var listNews = await axios.get('http://localhost:3000/list-news');
    listNews = listNews.data;

    var htmls = '';
    listNews.forEach(function (news) {
        htmls += `
        <li>
            <a href="#"><img src="images/${news.img}" alt="${news.img}" /></a>
            <div class="khoiphai">
                <h2><a href="#">${news.title}</a></h2>
                <p>${news.content}</p>
            </div>
            <div class="clr"></div>
        </li>
    `;
    })
    ulElement.html(htmls);
}

displayData();