var form = document.forms['register-form'];

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }

    // console.log(formValue);
    try {
        var results = await axios({
            method: "POST",
            url: 'http://localhost:3000/register',
            data: formValue,
            headers: { "Content-Type": "application/json" },
        });

        console.log(results.data);
    } catch (error) {
        console.log('Lỗi: ' + error);
    }
})