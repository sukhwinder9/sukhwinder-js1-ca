let users = document.querySelector(".userslist");

const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
    users.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`

    try {
        const response = await fetch(url);
        const output = await response.json();
        console.log(output);

        users.innerHTML = "";
        const listofUser = output.data;


        for (info in listofUser) {
            console.log(listofUser[info].id);
            users.innerHTML +=
                `
            <div>
            <a href ="/details.html?id=${listofUser[info].id}" class="users">
            <p>ID: <strong> ${listofUser[info].id}</strong></p>
            <p>First name: <strong> ${listofUser[info].name}</strong></p>
            <p>Email: <strong> ${listofUser[info].email}</strong></p>
            </a>
            </div>
            `
        }
    } catch (error) {
        console.log(error);
        users.innerHTML = message("error", error);

    }
}

getData();