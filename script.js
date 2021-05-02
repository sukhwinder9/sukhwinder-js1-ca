const users = document.querySelector(".userslist");
const urlclass = "https://reqres.in/api/users";

async function getData() {

    try {
        const response = await fetch(urlclass);
        const output = await response.json();
        console.log(output);

        users.innerHTML = "";
        const listofUser = output.data;


        for (info in listofUser) {
            console.log(listofUser[info].id);
            users.innerHTML +=
                `
            <div class="userdiv">
            <a href ="/details.html?id=${listofUser[info].id}" class="users">
            <p>ID: <strong> ${listofUser[info].id}</strong></p>
            <p>First name: <strong> ${listofUser[info].first_name}</strong></p>
            <p>Email: <strong> ${listofUser[info].email}</strong></p>
            </a>
            </div>
            `
        }
    } catch (error) {
        console.log(error);



    }
}

getData();