var form = document.forms['signin-form'];

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }

    // console.log(formValue);

    var results = await axios({
        method: "POST",
        url: 'http://localhost:3000/sign-in',
        data: formValue,
        headers: { "Content-Type": "application/json" },
    });

    console.log(results.data);

    // location = 'index.html';
})