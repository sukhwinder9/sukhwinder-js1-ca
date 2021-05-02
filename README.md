# sukhwinder-js1-ca

async function getData() {
users.innerHTML = `<div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span> </div>`

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
        users.innerHTML = message("error", error);

    }

}

getData();

<header>
        <a href="index.html ">Home</a>
        <nav>
            <ul>
                <li>
                    <a href="index.html "></a>
                </li>
                <li><a href="contact.html ">contact</a></li>
                <li><a href="details.html ">details</a></li>
            </ul>
        </nav>
    </header>
