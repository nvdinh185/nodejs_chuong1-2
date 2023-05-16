const table = document.getElementById("table");

async function getData() {

    try {
        var listUsers = await axios.get('http://localhost:3000/users');
        listUsers = listUsers.data;

        var htmls = `
                <table>        
                    <tr>
                            <th>Username</th>
                            <th>Fullname</th>
                    </tr>`

        for (let us of listUsers) {
            htmls += `
                    <tr>
                            <td>${us.username}</td>
                            <td>${us.fullname}</td>
                    </tr>`
        }
        htmls += `</table>`
        table.innerHTML = htmls;

    } catch (err) {
        console.log('Lỗi ' + err);
    }
}

getData();